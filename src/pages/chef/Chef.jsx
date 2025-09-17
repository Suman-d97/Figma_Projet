
import { Box, Container, Typography } from "@mui/material";
import Breadcrumb from "../../layout/Breadcrumb";
const Chef = () => {
  return (
    <>
    <Breadcrumb/>
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
          <Typography variant="h2">Our World Class Chef</Typography>
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
      </Box>
    </>
  )
}

export default Chef