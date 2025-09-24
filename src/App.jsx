import { CssBaseline, ThemeProvider } from "@mui/material";
// import "./App.css";
import { RouterProvider } from "react-router-dom";
import Route from "./routes/Route";
import Theme from "./theme/Theme";
import { Toaster } from "sonner";
import { Cartprovider } from "./hooks/context/cart/CartProvider";
import { Wishlistprovider } from "./hooks/context/wishlist/Wishlistprovider";

function App() {
  return (
    <>
      <Wishlistprovider>
        <Cartprovider>
          <Toaster position="top-right" />
          <ThemeProvider theme={Theme}>
            <CssBaseline />
            <RouterProvider router={Route} />
          </ThemeProvider>
        </Cartprovider>
      </Wishlistprovider>
    </>
  );
}

export default App;
