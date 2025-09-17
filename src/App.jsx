import { CssBaseline, ThemeProvider } from "@mui/material";
// import "./App.css";
import { RouterProvider } from "react-router-dom";
import Route from "./routes/Route";
import Theme from "./theme/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <RouterProvider router={Route} />
      </ThemeProvider>
    </>
  );
}

export default App;
