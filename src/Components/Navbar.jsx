import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [IsMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!IsMobile);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleMenu();
    }
  };

  return (
    <header className="App-header">
      <div className="header-flex">
        <div className="header-section">
          <i className="header-name-text">Abheesh K</i>
        </div>

        <div className="header-section">
          {IsMobile ? (
            ""
          ) : (
            <div onClick={toggleMenu} className="mobile-menu">
              <FaBars />
            </div>
          )}
          <ul className={`header-ul ${IsMobile ? "show-mobile-menu" : ""}`}>
            <div
              style={{ fontSize: "25px", cursor: "pointer", textAlign: "end" }}
              className="close-btn"
              onClick={toggleMenu}
            >
              <IoMdCloseCircle />
            </div>
            <li
              onClick={() => scrollToSection("profile")}
              className="header-li"
            >
              Profile
            </li>
            <li
              onClick={() => scrollToSection("services")}
              className="header-li"
            >
              Services
            </li>
            <li
              onClick={() => scrollToSection("experience")}
              className="header-li"
            >
              Experience
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="header-li"
            >
              Projects
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
