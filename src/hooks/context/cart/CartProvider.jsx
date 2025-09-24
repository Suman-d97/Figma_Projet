import { useEffect, useReducer } from "react";
import CartContext from "./CreatecartContext";
import api from "../../../api/Api";
import { toast } from "sonner";

const initialState = {
  cart: [],
  loading: true,
};
function reducer(state, action) {
  switch (action.type) {
    case "set_cart":
      return { ...state, cart: action.payload, loading: false };

    case "add_to_cart":
      return { ...state, cart:[...state.cart,action.payload]  };;

    case "remove_cart":
      return{...state, cart:state.cart.filter((item)=>item.id!==action.payload)};

    default:
      return state;
  }
}

export const Cartprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/cart");
      console.log("carts", response?.data);
      dispatch({ type: "set_cart", payload: response.data });
    };
    fetchData();
  }, []);
  const addtoCart=async (product) => {
    const response= await api.post("/cart",product)
    toast.success("product added into cart")
    dispatch({ type: "add_to_cart", payload: response.data })
  }
  const removeCart=async (productId) => {
    await api.delete(`/cart/${productId}`)
  
    
    dispatch({ type: "remove_cart", payload: productId})
  }
  return (
    <CartContext.Provider value={{ cart: state.cart, addtoCart,removeCart}}>
      {children}
    </CartContext.Provider>
  );
};