import { backdropClasses, createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    background: {
      default: "#121A1D",
    },
    text: {
      primary: "#ffffff",
      secondary: "#40d6c4ff",
    },
    primary: {
      main: "#40d6c4ff",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "4rem",
      fontWeight: 600,
      color: "#ffffff",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 500,
      color: "#ffffff",
    },
    body1: {
      fontSize: "1rem",
      color: "#9C9D9B",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "15px 20px",
          borderRadius: "8px",
          textTransform: "none",
        },
        containedPrimary: {
          backgroundColor: "#D68240",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            color: "#ffffff",
            border: "1px solid white"
          },
        },
      },
    },
  },
});

export default Theme;
