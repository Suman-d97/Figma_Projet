import { Button, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Breadcrumb from "../../layout/Breadcrumb";


const Home = () => {
   const [value, setValue] = React.useState(2);
  return (
    <>
    <Breadcrumb/>
      <Typography variant="h1">Home</Typography>

      <Button color="primary" variant="contained">
        Search
      </Button>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </>
  );
};

export default Home;
