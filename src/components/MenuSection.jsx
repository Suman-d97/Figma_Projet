
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Paper,
  Box,
  Grid,
  Rating,
  Container,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const MenuSection = ({ card }) => {
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
            <FavoriteBorderIcon
              sx={{
                color: "#D68240",
                cursor: "pointer",
                fontSize: 30,
                position: "absolute",
                top: 10,
                right: 10,
                background: "#182F31",
                width: "3rem",
                height: "3rem",
                borderRadius: "2.21875rem",
                padding: "0.75rem 0.6875rem",
              }}
            />
          </Box>
          <CardContent sx={{ backgroundColor: "#182F31" }}>
            <Rating
              name={`star-rating-${card.id}`}
              value={card.rating}
              onChange={(newValue) => handleRating(card.id, newValue)}
              sx={{
                "& .MuiRating-iconEmpty": { color: "#D68240" },
              }}
            />
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ lineHeight: 2 }}
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
