import React from "react";
import Accessories from "./components/Accessories";
import Decorations from "./components/Decorations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import SendGift from "./components/SendGift";
import Share from "./components/Share";
import { useStateContext } from "./contexts/ContextProvider";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const { currentMode } = useStateContext();
  AOS.init({
    offset: 120,
    duration: 1000,
    once: false,
  });
  return (
    <div className={currentMode === "dark" ? "dark_theme" : ""}>
      <Header />
      <Home />
      <Share />
      <Decorations />
      <Accessories />
      <SendGift />
      <Footer />
    </div>
  );
};

export default App;
