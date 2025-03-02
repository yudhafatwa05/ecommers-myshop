import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", 
        element: <Home /> },
      { path: "/Products", 
        element: <Products /> },
      { path: "/Orders", 
        element: <Orders /> },
      { path: "/Login", 
        element: <Login /> },
      { path: "/Register",  
        element: <Register /> }
    ],
  },
]);

export default router;




