import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
  Container,
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import chef1 from "../../assets/chef1.jpg";
import chef2 from "../../assets/chef2.jpg";
import chef3 from "../../assets/chef3.jpg";
import chef4 from "../../assets/chef4.jpg";
import chef5 from "../../assets/chef5.jpg";
import chef6 from "../../assets/chef6.jpg";
import chef7 from "../../assets/chef7.png";
import chef8 from "../../assets/chef8.png";
import chef9 from "../../assets/chef9.png";
import chef10 from "../../assets/chef10.jpg";
import chef11 from "../../assets/chef11.jpg";
import chef12 from "../../assets/chef12.png";
import React from 'react'

const Chefmenu = () => {
    const chefJson = [
    { name: "Masum Rana", chefRole: "Master Chef", image: chef2 },
    { name: "Manisha Agarwal", chefRole: "Senior Chef", image: chef1 },
    { name: "Muhibibur Rashid", chefRole: "Master Chef", image: chef3 },
    { name: "Rashed Kabir", chefRole: "Master Chef", image: chef4 },
    { name: "Jame Radley", chefRole: "Master Chef", image: chef5 },
    { name: "Garima Arora", chefRole: "Senior Chef", image: chef6 },
    { name: "Romy Gill", chefRole: "Senior Chef", image: chef7 },
    { name: "Keneth Conroy", chefRole: "Assistant Chef", image: chef8 },
    { name: "Esther Howard", chefRole: "Master Chef", image: chef9 },
    { name: "Robert Fox", chefRole: "Senior Chef", image: chef10 },
    { name: "Dipna Anand", chefRole: "Master Chef", image: chef11 },
    { name: "Asma Khan", chefRole: "Senior Chef", image: chef12 },
  ];

  return (
    <>
    <Container sx={{marginBottom: "5rem"}}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          {chefJson.map((chef, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 260,
                  borderRadius: "1rem",
                  backgroundColor: "#121A1D",
                  color: "white",
                  textAlign: "center",
                  p: 2,
                  margin: "auto",
                }}
              >
                <CardMedia
                  component="img"
                  image={chef.image}
                  alt={chef.name}
                  sx={{
                    borderRadius: "1rem",
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold", mt: 1 }}
                  >
                    {chef.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
                    {chef.chefRole}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <FacebookRoundedIcon
                      sx={{
                        color: "#ffffffff",
                        cursor: "pointer",
                        fontSize: 30,
                        background: "#182F31",
                        width: "2.8rem",
                        height: "2.8rem",
                        borderRadius: "2.21875rem",
                        padding: "0.75rem 0.6875rem",
                      }}
                    />
                    <XIcon
                      sx={{
                        color: "#ffffffff",
                        cursor: "pointer",
                        fontSize: 30,
                        background: "#182F31",
                        width: "2.8rem",
                        height: "2.8rem",
                        borderRadius: "2.21875rem",
                        padding: "0.75rem 0.6875rem",
                      }}
                    />
                    <InstagramIcon
                      sx={{
                        color: "#ffffffff",
                        cursor: "pointer",
                        fontSize: 30,
                        background: "#182F31",
                        width: "2.8rem",
                        height: "2.8rem",
                        borderRadius: "2.21875rem",
                        padding: "0.75rem 0.6875rem",
                      }}
                    />
                    <LinkedInIcon
                      sx={{
                        color: "#ffffffff",
                        cursor: "pointer",
                        fontSize: 30,
                        background: "#182F31",
                        width: "2.8rem",
                        height: "2.8rem",
                        borderRadius: "2.21875rem",
                        padding: "0.75rem 0.6875rem",
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Chefmenu