import React from "react"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/calculator",
      text: "Calculator",
    },
    {
      id: 3,
      path: "/about",
      text: "About",
    },
  ]

  return (
    <nav style={{ 'background-color': '#0c296891', display: 'flex', 'justify-content': 'space-between', padding: '10px 30px' }} >
      <p>Math Magicians</p>
      <ul>
        {links.map(link => {
          return (
            <li key={link.id}>
              <NavLink 
              to={link.path}
              exact
              >
                {link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
