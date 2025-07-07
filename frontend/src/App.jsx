import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/layout/Header/Header.jsx";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import Product from "./component/Product/Product.jsx";
import DisplayProduct from "./component/Product/DisplayProduct.jsx";
import Cart from "./component/Cart/Cart.jsx"
import LoginSignup from "./component/LoginSignup/LoginSignup.jsx";
import WebFont from "webfontloader";
import { useEffect } from "react";

function App() {
  //   useEffect(() => {
  // //     WebFont.load({
  // //       google: {
  // //         families: ["Roboto"],
  // //       },
  // //     });
  // //   }, []);

  return (
    <div className="bg-bg-clr">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<DisplayProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>{" "}
      <Footer />
    </div>
  );
}

export default App;
