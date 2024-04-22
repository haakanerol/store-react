import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
            <Route path="/dashboard/products" element={<Products />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </BrowserRouter> */}
      
    </>
  );
};

export default AppRouter;
