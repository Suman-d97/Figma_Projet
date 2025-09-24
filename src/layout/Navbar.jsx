import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Badge, IconButton, Modal } from "@mui/material";
import Logo from "../assets/Logo.png";
import imageUnion from "../assets/basket.png";
import { Container, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Login from "../pages/login/Login";
import Cookies from "js-cookie";
import CartContext from "../hooks/context/cart/CreatecartContext";
import Wishlistcontext from "../hooks/context/wishlist/Wishlistcontext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Navbar = () => {
  const { favourite } = useContext(Wishlistcontext);
  const Pages = ["Home", "Menu", "About Us", "Chef", "Blog", "Contact"];
  const navigate = useNavigate();
  const pages = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "menu" },
    { name: "About Us", path: "about" },
    { name: "Chef", path: "chef" },
    { name: "Blog", path: "blog" },
    { name: "Contact", path: "contact" },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const loginData = Cookies.get("loginData");
  const { cart } = useContext(CartContext);
  return (
    <Container style={{ position: "relative" }}>
      <header
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "1.25rem",
          padding: "0.9375rem 3.125rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          position: "relative",
          top: "35px",
          right: "0",
          left: "0",
          zIndex: "10",
        }}
      >
        <IconButton sx={{ gap: "20px" }}>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ height: "25px", display: { xs: "none", md: "block" } }}
          />
        </IconButton>
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", gap: "2.5rem" }}>
            {pages.map((page, index) => (
              <Link
                key={index}
                onClick={() => navigate(page.path)}
                sx={{
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                  position: "relative",
                  padding: "0.3rem",
                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    width: "8px",
                    height: "8px",
                    border: "2px solid orange",
                    opacity: 0,
                    transition: "all 0.3s ease",
                  },
                  "&::before": {
                    top: "0",
                    left: "0",
                    borderRight: "none",
                    borderBottom: "none",
                  },
                  "&::after": {
                    bottom: 0,
                    right: "0",
                    borderLeft: "none",
                    borderTop: "none",
                  },
                  "&:hover::before, &:hover::after": {
                    opacity: 1,
                  },
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
        <div>
          <IconButton
            aria-label="go to wishlist"
            onClick={() => (loginData ? navigate("/wishlist") : handleOpen())}
          >
            <Badge
              badgeContent={loginData ? favourite?.length : 0}
              color="secondary"
            >
              <FavoriteBorderIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>
          <IconButton sx={{ gap: "24px" }}>
            {loginData ? (
              <Badge badgeContent={cart?.length} color="secondary">
                <Box
                  component="img"
                  src={imageUnion}
                  alt="Logo"
                  sx={{
                    width: "1.231rem",
                    height: "1.186rem",
                    top: "0.125rem",
                    left: "0.125rem",
                  }}
                  // onClick={() => navigate("loggedin/cart")}
                  onClick={() => (loginData ? navigate("/cart") : handleOpen())}
                />
              </Badge>
            ) : (
              <Badge color="secondary">
                <Box
                  component="img"
                  src={imageUnion}
                  alt="Logo"
                  sx={{
                    width: "1.231rem",
                    height: "1.186rem",
                    top: "0.125rem",
                    left: "0.125rem",
                  }}
                  // onClick={() => navigate("loggedin/cart")}
                  onClick={() => (loginData ? navigate("/cart") : handleOpen())}
                />
              </Badge>
            )}
          </IconButton>
          {!loginData ? (
            <Button color="primary" variant="contained" onClick={handleOpen}>
              LOGIN
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              onClick={() => Cookies.remove("loginData")}
            >
              LOGOUT
            </Button>
          )}
          {/* <Button
            color="primary"
            variant="contained"
            onClick={() => navigate("/admin/dashboard")}
          >
            Admin
          </Button> */}
        </div>
      </header>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* We add a Box here to prevent focus issues and to wrap the component */}
        <Box>
          <Login handleClose={handleClose} />
        </Box>
      </Modal>
    </Container>
  );
};
export default Navbar;
