import React from "react";
import Nav from "./Components/Nav";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marquees from "./Components/Marquees";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full font-["Satoshi_Regular"] bg-zinc-900 text-white '>
      <Nav />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
