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
import PeopleIcon from "@mui/icons-material/People";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import "./Sidebar4.css";

const navItems = [
  { name: "Accueil", icon: <HomeIcon />, path: "/" },
  { name: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { name: "Utilisateurs", icon: <PeopleIcon />, path: "/users" },
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
        <IconButton onClick={toggleSidebar} className="toggle-btn">
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>

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
