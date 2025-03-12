import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Home } from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: open ? "250px" : "70px",
          height: "100vh",
          backgroundColor: "#093C1E",
          color: "white",
          padding: open ? "20px" : "10px",
          transition: "width 0.3s",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Bouton pour Fermer/Ouvrir */}
        <IconButton onClick={toggleSidebar} sx={{ color: "white", alignSelf: open ? "flex-end" : "center" }}>
        <Home />
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
          
        </IconButton>

        {/* Liste des éléments */}
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <DashboardIcon style={{ color: "white" }} />
              </ListItemIcon>
              {open && <ListItemText primary="Dashboard" sx={{ color: "white" }} />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/users">
              <ListItemIcon>
                <PeopleIcon style={{ color: "white" }} />
              </ListItemIcon>
              {open && <ListItemText primary="Utilisateurs" sx={{ color: "white" }} />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon style={{ color: "white" }} />
              </ListItemIcon>
              {open && <ListItemText primary="Paramètres" sx={{ color: "white" }} />}
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
