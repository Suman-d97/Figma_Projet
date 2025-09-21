import { Box, Container, Grid, Paper } from "@mui/material";


import food1 from "../../assets/Foodlist/foodlist1.png";
import food2 from "../../assets/Foodlist/foodlist2.png";
import food3 from "../../assets/Foodlist/foodlist3.png";

import { useState } from "react";
import Foodcard from "../../components/Foodcard";

const initialData = [
  {
    id: 1,
    image: food1,
    title: "Classic Waffels",
    rating: 2,
    price: "250",
    description:
      "Lorem ipsum is the simply dummy text of the printing and typesetting industry",
  },
  {
    id: 2,
    image: food2,
    title: "Desi Style Mutton Curry",
    rating: 3,
    price: "175",
    description:
      "Lorem ipsum is the simply dummy text of the printing and typesetting industry",
  },
  {
    id: 3,
    image: food3,
    title: "Mortinez Cocktail",
    rating: 4,
    price: "175",
    description:
      "Lorem ipsum is the simply dummy text of the printing and typesetting industry",
  },
];

const Food = () => {
  const [cardData, setCardData] = useState(initialData);

  return (
    <Box sx={{ backgroundColor: "#0A1316" }}>
      <Container>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={3}>
            {cardData.map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card.id}>
                <Paper
                  elevation={3}
                  sx={{ height: "100%", backgroundColor: "#121A1D" }}
                >
                  <Foodcard card={card} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Food;