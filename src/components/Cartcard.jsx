import {
  Box,
  CardMedia,
  Typography,
  IconButton,
  Container,
  Paper,
} from "@mui/material";

import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RemoveTwoToneIcon from "@mui/icons-material/RemoveTwoTone";
const Cartcard = ({ item }) => {
  return (
    <>
      <Container sx={{ py: 4, width: "35.75rem" }}>
        <Box
          key={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#182225",
            borderRadius: "1rem",
            mb: 3,
            p: 2,
            boxShadow: 2,
            color: "#fff",
          }}
        >
          <IconButton sx={{ alignSelf: "flex-start", color: "#fff" }}>
            <CancelTwoToneIcon />
          </IconButton>
          <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            sx={{
              borderRadius: "1rem",
              width: "8rem",
              height: "8rem",
              objectFit: "cover",
              mr: 3,
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Paper
                elevation={2}
                sx={{
                  px: 1.5,
                  py: 0.5,
                  display: "flex",
                  alignItems: "center",
                  background: "rgb(10,19,22)",
                }}
              >
                <RemoveTwoToneIcon
                  sx={{ fontSize: 20, color: "#fff", pr: 1 }}
                />
                <Typography sx={{ px: 1 }}>{item.quantity}</Typography>
                <AddTwoToneIcon sx={{ fontSize: 20, color: "#fff", pl: 1 }} />
              </Paper>
            </Box>
          </Box>
          <Typography
            variant="h5"
            sx={{ ml: 3, fontWeight: "medium", color: "#f7b94b" }}
          >
            {item.price}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Cartcard;