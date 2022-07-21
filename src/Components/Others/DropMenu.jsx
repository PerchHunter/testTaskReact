import React from "react";
import { Link } from "react-router-dom";

import "./css/styles.css";

import { Menu, MenuItem } from "@mui/material";

export default function DropMenu({ point, anchorElem, handleClose }) {
  let links;

  if (point == "accountsMenu") {
    links = [
      ["/profile", "Profile"],
      ["/account", "My account"],
    ];
  } else if (point == "pagesMenu") {
    links = [
      ["/", "Home"],
      ["/login", "Auth"],
    ];
  }

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElem}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElem)}
      onClose={() => handleClose(point)}
    >
      {links.map((link) => (
        <Link to={link[0]} key={link[0]} className="menuLinks">
          <MenuItem onClick={() => handleClose(point)}>{link[1]}</MenuItem>
        </Link>
      ))}
    </Menu>
  );
}
