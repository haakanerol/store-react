import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <div>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
    </>
  );
};

export default AppRouter;
