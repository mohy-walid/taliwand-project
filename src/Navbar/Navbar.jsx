import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function MYNavbar() {
  const [ISscrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handlescroll() {
      if (window.scrollY > 250) setScrolled(true);
      else setScrolled(false);
    }
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <Navbar
      fluid
      rounded={false}
      className={`fixed top-0 w-full bg-main transition-all z-50 ${
        !ISscrolled ? "py-7" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
      
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-white uppercase font-bold text-2xl">
            START FRAMEWORK
          </span>
        </NavbarBrand>

      
        <NavbarToggle />

      
        <NavbarCollapse>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive
                ? "active block text-center text-white uppercase font-bold text-lg py-2"
                : "block text-center text-white uppercase font-bold text-lg py-2"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/Portfolio"
            className={({ isActive }) =>
              isActive
                ? "active block text-center text-white uppercase font-bold text-lg py-2"
                : "block text-center text-white uppercase font-bold text-lg py-2"
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive
                ? "active block text-center text-white uppercase font-bold text-lg py-2"
                : "block text-center text-white uppercase font-bold text-lg py-2"
            }
          >
            Contact
          </NavLink>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
