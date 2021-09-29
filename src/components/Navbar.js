import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/about',
      text: 'About',
    },
  ];

  const linksStyle = {
    color: '#ffffff',
    fontSize: '20px',
    margin: '10px',
    textDecoration: 'none',
    paddingTop: '10px',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '20px',
  };

  const navStyle = {
    backgroundColor: '#1d2249',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 30px',
    boxShadow: '0 0 20px 1px #1d2249',
  };

  return (
    <nav style={navStyle}>
      <p style={{
        color: '#ffffff',
        fontSize: '40px',
      }}
      >
        Math Magicians
      </p>
      <ul style={ulStyle}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              style={linksStyle}
              to={link.path}
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
