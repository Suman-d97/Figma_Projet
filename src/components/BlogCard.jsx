
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CommentIcon from "@mui/icons-material/Comment";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const BlogCard = ({ chef }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{
          maxWidth: 370,
          borderRadius: "1rem",
          backgroundColor: "#121A1D",
          color: "white",
          margin: "auto",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
          },
        }}
      >
        {/* Image */}
        <CardMedia
          component="img"
          image={chef.image}
          alt={chef.title}
          sx={{
            width: "100%",
            height: 230,
            objectFit: "cover",
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />

        {/* Content */}
        <CardContent sx={{ p: 3 }}>
          {/* Meta Info */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
              mb: 1.5,
            }}
          >
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", color: "#ccc" }}
            >
              <PersonIcon sx={{ color: "orange", fontSize: "1rem", mr: 0.5 }} />
              Admin
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", color: "#ccc" }}
            >
              <CalendarMonthIcon
                sx={{ color: "orange", fontSize: "1rem", mr: 0.5 }}
              />
              17 June 2025
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", color: "#ccc" }}
            >
              <CommentIcon sx={{ color: "orange", fontSize: "0.9rem", mr: 0.5 }} />
              Comments
            </Typography>
          </Box>

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 1,
              lineHeight: 1.4,
              "&:hover": { color: "orange", cursor: "pointer" },
            }}
          >
            {chef.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{ color: "#aaa", lineHeight: 1.6, mb: 2 }}
          >
            Savor our latest blog where we serve up delicious recipes, insider
            kitchen tips, and design inspirations that blend mouthwatering
            flavors with a delightful dining experience.
          </Typography>

          {/* Read More */}
          <Link
            to="/single-blog"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "white",
                fontWeight: "bold",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "orange",
                  "& .arrow-icon": {
                    transform: "translateX(6px) scale(1.1)",
                  },
                },
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold", mr: 0.5 }}>
                READ MORE
              </Typography>
              <ArrowForwardIosIcon
                className="arrow-icon"
                sx={{
                  fontSize: "0.85rem",
                  transition: "transform 0.3s ease",
                }}
              />
            </Box>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogCard;
