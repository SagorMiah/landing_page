import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Header = () => {
  const { currentMode, setCurrentMode } = useStateContext();
  const [scrollShow, setScrollShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const closeShowMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const scrollnum = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollShow(true);
      } else {
        setScrollShow(false);
      }
    });

    return () => window.removeEventListener(scrollnum);
  }, []);

  return (
    <div className="header section" id="header">
      <div className="header_container container">
        <a className="logo" href="#">
          Christmas Gift
        </a>

        <div className={`${showMenu ? "menu show_menu" : "menu"}`}>
          <ul className="nav_list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#share">Share</a>
            </li>
            <li>
              <a href="#decoration">Decorations</a>
            </li>
            <li>
              <a href="#accessoreis">Accessory</a>
            </li>
            <div
              onClick={() =>
                setCurrentMode(currentMode === "light" ? "dark" : "light")
              }
              className="dark_light"
            >
              {currentMode === "light" ? (
                <i class="uil uil-toggle-off"></i>
              ) : (
                <i class="uil uil-toggle-on"></i>
              )}
            </div>
            <i onClick={closeShowMenu} className="close_menu uil uil-times"></i>
          </ul>
        </div>
        <i
          onClick={() => setShowMenu(true)}
          className="menu_show uil uil-apps"
        ></i>
      </div>
      {scrollShow && (
        <div onClick={() => window.scrollTo(0, 0)} className="scroll_top">
          <i className="uil uil-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default Header;
