import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";

import menu1 from "../../assets/menu1.png";
import menu2 from "../../assets/menu2.jpg";
import menu3 from "../../assets/menu3.png";
import menu4 from "../../assets/menu4.jpg";
import menu5 from "../../assets/menu5.jpg";
import menu6 from "../../assets/menu6.jpg";
import menu7 from "../../assets/menu7.png";
import menu8 from "../../assets/menu8.png";
import menu9 from "../../assets/menu9.jpg";
import MenuSection from '../../components/MenuSection';
import { useState } from "react";


const initialData = [
  { id: 1, image: menu1, title: "Chicken", rating: 2, price: "Rs250" },
  { id: 2, image: menu2, title: "Fried Rice", rating: 3, price: "Rs99" },
  { id: 3, image: menu3, title: "Burger", rating: 4, price: "Rs175" },
  { id: 4, image: menu4, title: "Grilled Fish", rating: 4, price: "Rs156" },
  { id: 5, image: menu5, title: "Veg Pizza", rating: 5, price: "Rs159" },
  { id: 6, image: menu6, title: "Pasta", rating: 3, price: "Rs135" },
  { id: 7, image: menu7, title: "Salad Bowl", rating: 4, price: "Rs450" },
  { id: 8, image: menu8, title: "Paneer Tikka", rating: 2, price: "Rs199" },
  { id: 9, image: menu9, title: "Ice Cream", rating: 5, price: "Rs95" },
];
const Menucard = () =>{
    const [cardData] = useState(initialData);
 return (
    <>
      <Box sx={{margin: "3rem 0"}}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 10,
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <Typography variant="h2">Our Declicious Menu</Typography>
          <br />
          <Container>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              libero at quibusdam quod eos et, deserunt maiores possimus quas,
              nostrum cumque reprehenderit placeat eveniet, architecto dolor
              laboriosam velit repellat soluta.
            </Typography>
          </Container>
        </Container>

        <Box>
          <Stack direction="row" spacing={1} justifyContent="center">
            <Button color="primary" variant="outlined">
              Indian
            </Button>
            <Button color="primary" variant="outlined">
              Mexican
            </Button>
            <Button color="primary" variant="outlined">
              Italian
            </Button>
            <Button color="primary" variant="outlined">
              Chinese
            </Button>
            <Button color="primary" variant="outlined">
              Bengali
            </Button>
            <Button color="primary" variant="outlined">
              Arabian
            </Button>
            <Button color="primary" variant="outlined">
              Japanese
            </Button>
          </Stack>
        </Box>

<Container>
          <Box sx={{ flexGrow: 1, p: 3,  }}>
            <Grid container spacing={3}>
              {cardData.map((card) => (
                <Grid item xs={4} key={card.id}>
                  <Paper elevation={3} sx={{ height: "100%", backgroundColor: "#121A1D"}}>
                    <MenuSection card={card} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default Menucard