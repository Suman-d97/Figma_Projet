// import {
//   Card,
//   CardContent,
//   CardMedia,
//   CardActionArea,
//   Typography,
//   Box,
//   Rating,
// } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CartContext from "../hooks/context/cart/CreatecartContext";
// import Cookies from "js-cookie";
// import Wishlistcontext from "../hooks/context/wishlist/Wishlistcontext";

// const MenuSection = ({ card }) => {
//   const { addToWishlist } = useContext(Wishlistcontext);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const handleWishlistClick = () => {
//     if (loginData) {
//       addToWishlist(card);
//       setIsWishlisted(!isWishlisted);
//     } else {
//       handleOpen();
//     }
//   };

//   const { addtoCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const loginData = Cookies.get("loginData");

//   return (
//     <>
//       <Card sx={{ maxWidth: 350, m: "auto" }}>
//         <CardActionArea>
//           <Box sx={{ position: "relative" }}>
//             <CardMedia
//               component="img"
//               height="292"
//               width="384"
//               image={card.image}
//               alt={card.title}
//               sx={{ width: "100%", objectFit: "cover" }}
//             />
//             {/* Wishlist/Favorite Button */}
//             <Box
//               onClick={handleWishlistClick}
//               sx={{
//                 position: "absolute",
//                 top: 10,
//                 right: 10,
//                 background: "#182F31",
//                 borderRadius: "2.21875rem",
//                 width: "3rem",
//                 height: "3rem",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 cursor: "pointer",
//                 padding: "0.75rem 0.6875rem",
//                 border: isWishlisted ? "2px solid orange" : "none",
//                 zIndex: 2,
//               }}
//             >
//               {isWishlisted ? (
//                 <FavoriteIcon sx={{ color: "orange", fontSize: 30 }} />
//               ) : (
//                 <FavoriteBorderIcon sx={{ color: "#D68240", fontSize: 30 }} />
//               )}
//             </Box>
//           </Box>
//           <CardContent sx={{ backgroundColor: "#182F31" }}>
//             <Rating
//               name={`star-rating-${card.id}`}
//               value={card.rating}
//               readOnly
//               sx={{
//                 "& .MuiRating-iconEmpty": { color: "#D68240" },
//               }}
//             />
//             <Typography
//               gutterBottom
//               variant="h3"
//               component="div"
//               sx={{ lineHeight: 2 }}
//             >
//               {card.title}
//             </Typography>
//             <Typography variant="body1" sx={{ mt: 1 }}>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Laboriosam similique provident ipsum quae, non autem
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                   marginTop: 15,
//                 }}
//               >
//                 <Typography variant="body2">{card.price}</Typography>
//                 <ShoppingBasketIcon
//                   onClick={() => (loginData ? addtoCart(card) : handleOpen())}
//                   sx={{
//                     color: "#ffffffff",
//                     cursor: "pointer",
//                     fontSize: 30,
//                     top: 10,
//                     right: 10,
//                     background: "#182F31",
//                     width: "3rem",
//                     height: "3rem",
//                     borderRadius: "2.21875rem",
//                     padding: "0.75rem 0.6875rem",
//                     border: "2px solid orange",
//                   }}
//                 />
//               </div>
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </>
//   );
// };

// export default MenuSection;






















import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../hooks/context/cart/CreatecartContext";
import Cookies from "js-cookie";
import Wishlistcontext from "../hooks/context/wishlist/Wishlistcontext";

const MenuSection = ({ card }) => {
  const { addToWishlist } = useContext(Wishlistcontext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = () => {
    if (loginData) {
      addToWishlist(card);
      setIsWishlisted(!isWishlisted);
    } else {
      handleOpen();
    }
  };

  const { addtoCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const loginData = Cookies.get("loginData");

  return (
    <>
      <Card sx={{ maxWidth: 350, m: "auto" }}>
        <CardActionArea>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="292"
              width="384"
              image={card.image}
              alt={card.title}
              sx={{ width: "100%", objectFit: "cover" }}
            />
            {/* Wishlist/Favorite Button */}
            <Box
              onClick={handleWishlistClick}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "#182F31",
                borderRadius: "2.21875rem",
                width: "3rem",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: "0.75rem 0.6875rem",
                border: isWishlisted ? "2px solid orange" : "none",
                zIndex: 2,
              }}
            >
              {isWishlisted ? (
                <FavoriteIcon sx={{ color: "orange", fontSize: 30 }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: "#D68240", fontSize: 30 }} />
              )}
            </Box>
          </Box>
          <CardContent sx={{ backgroundColor: "#182F31" }}>
            <Rating
              name={`star-rating-${card.id}`}
              value={card.rating}
              readOnly
              sx={{
                "& .MuiRating-iconEmpty": { color: "#D68240" },
              }}
            />
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{
                lineHeight: 2,
                fontSize: "2rem" // <-- Only this line changes font size
              }}
            >
              {card.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam similique provident ipsum quae, non autem
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <Typography variant="body2">{card.price}</Typography>
                <ShoppingBasketIcon
                  onClick={() => (loginData ? addtoCart(card) : handleOpen())}
                  sx={{
                    color: "#ffffffff",
                    cursor: "pointer",
                    fontSize: 30,
                    top: 10,
                    right: 10,
                    background: "#182F31",
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "2.21875rem",
                    padding: "0.75rem 0.6875rem",
                    border: "2px solid orange",
                  }}
                />
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default MenuSection;
