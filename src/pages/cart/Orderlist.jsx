import React, { useContext } from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Container,
  InputBase,
  Paper,
} from "@mui/material";

import cart1 from "../../assets/Cart/Cart-Image-1.png";
import cart2 from "../../assets/Cart/Cart-Image-2.png";
import cart3 from "../../assets/Cart/Cart-Image-3.png";
import Cartcard from "../../components/Cartcard";
import CartContext from "../../hooks/context/cart/CreatecartContext";


const initialData = [
  {
    id: 1,
    image: cart1,
    title: "Fried Chiken",
    price: "250",
    description:
      "Lorem ipsum is the simply dummy text of the printing and typesetting industry",
  },
  {
    id: 2,
    image: cart2,
    title: "Chokolate Ice Cream",
    price: "175",
    description:
      "Lorem ipsum is the simply dummy text of the printing and typesetting industry",
  },
  {
    id: 3,
    image: cart3,
    title: "Chiken Burger",
    price: "175",
    description:
      "Lorem ipsum is the simply dummy text of the printing and typesetting industry",
  },
];

const Orderlist = () => {
  const {cart} = useContext(CartContext)
  return (

    <Paper sx={{ backgroundColor: "rgb(10,19,22)" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {/* Cart Items */}
        <Container sx={{ py: 4, width: "35.75rem" }}>
          {cart.map((card) => (
            <Cartcard key={card.id} item={card} />
          ))}
        </Container>

        {/* Coupon & Summary Section */}
        <Box
          sx={{
            maxWidth: 340,
            mx: "auto",
            p: 3,
            color: "#fff",
            mt: 4,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Order Summary
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Item</Typography>
            <Typography>{initialData.length}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Subtotal</Typography>
            <Typography sx={{ color: "#f7b94b" }}>
              Rs,{" "}
              {initialData.reduce((sum, item) => sum + Number(item.price), 0)}
              .00
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Shipping</Typography>
            <Typography sx={{ color: "#f7b94b" }}>Rs, 0.00</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Tax</Typography>
            <Typography sx={{ color: "#f7b94b" }}>Rs, 0.00</Typography>
          </Box>

          <Divider sx={{ borderColor: "#434743", mt: 1, mb: 1 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography>Total</Typography>
            <Typography sx={{ color: "#f7b94b", fontWeight: "bold" }}>
              Rs,{" "}
              {initialData.reduce((sum, item) => sum + Number(item.price), 0)}
              .00
            </Typography>
          </Box>

          {/* Coupon Input */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <InputBase
              sx={{
                flex: 1,
                border: "1px solid #f7b94b",
                borderRadius: "8px",
                px: 2,
                py: 1,
                color: "#fff",
                background: "transparent",
                mr: 2,
              }}
              placeholder="Coupon Code"
            />
            <Button variant="contained" sx={{ color: "whitesmoke" }}>
              APPLY
            </Button>
          </Box>

          <Typography variant="body2" sx={{ mb: 3 }}>
            Free Delivery above Rs, 500
          </Typography>

          <Button variant="contained" sx={{ color: "whitesmoke" }}>
            PROCEED TO CHECKOUT
          </Button>
        </Box>
      </Container>
    </Paper>
  );
};

export default Orderlist;