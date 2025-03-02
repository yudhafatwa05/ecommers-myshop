// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Payments from "./pages/Payments";
import Navbar from "./components/Navbar";
import './App.css'


function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>

  );
}

export default App;


