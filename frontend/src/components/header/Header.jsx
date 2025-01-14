import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <ul className={`menu ${isOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={handleOpen}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleOpen}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={handleOpen}>
            SERVICES
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleOpen}>
            CONTACT US
          </Link>
        </li>
        <li>
          <Link to="/career" onClick={handleOpen} >
            CAREER
          </Link>
        </li>
      </ul>
      <FiAlignJustify
        onClick={handleOpen}
        className="menu-toggle cursor-pointer"
      />
    </header>
  );
};

export default Header;
