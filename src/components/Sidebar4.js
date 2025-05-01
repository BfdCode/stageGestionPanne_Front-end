import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import EngineeringIcon from "@mui/icons-material/Engineering";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import "./Sidebar4.css";
import logo from "../assets/UASZ1.png"; 

const navItems = [
  { name: "Accueil", icon: <HomeIcon />, path: "/acueillGestion" },
  { name: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { name: "Technicien", icon: <EngineeringIcon />, path: "/users" },
  { name: "Paramètres", icon: <SettingsIcon />, path: "/settings" },
];

export const Sidebar4 = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation(); // Obtenir l'URL actuelle

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <aside className={`sidebar-4 ${open ? "open" : "closed"}`}>
      <div className="inner">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </div>

        {/* Bouton d'ouverture/fermeture */}
        <IconButton onClick={toggleSidebar} className="toggle-btn">
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>

        {/* Menu de navigation */}
        <nav className="menu">
          <List>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {open && <ListItemText primary={item.name} />}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </div>
    </aside>
  );
};
