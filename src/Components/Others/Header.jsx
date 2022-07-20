import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";

import { observer } from "mobx-react-lite";
import useStore from "../../hooks/useStore.js";
import DropMenu from "./DropMenu.jsx";

export default observer(Header);

function Header() {
  const [authStore] = useStore("auth");
  const auth = authStore.auth;

  const [anchorElems, setAnchorEl] = useState({
    pagesMenu: null,
    accountsMenu: null,
  });

  const handleMenu = (e, elem) => {
    let newAnchors = { ...anchorElems, [elem]: e.currentTarget };
    setAnchorEl(newAnchors);
  };

  const handleClose = (elem) => {
    let newAnchors = { ...anchorElems, [elem]: null };
    setAnchorEl(newAnchors);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={(e) => handleMenu(e, "pagesMenu")}
          >
            <MenuIcon />
          </IconButton>

          <DropMenu
            point="pagesMenu"
            anchorElem={anchorElems.pagesMenu}
            handleClose={handleClose}
          />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                color="inherit"
                onClick={(e) => handleMenu(e, "accountsMenu")}
              >
                <AccountCircle />
              </IconButton>

              <DropMenu
                point="accountsMenu"
                anchorElem={anchorElems.accountsMenu}
                handleClose={handleClose}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
