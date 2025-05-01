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
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import SettingsIcon from "@mui/icons-material/Settings";
// import PeopleIcon from "@mui/icons-material/People";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
// import BuildIcon from "@mui/icons-material/Build";
import ReportIcon from "@mui/icons-material/Report";
import InfoIcon from "@mui/icons-material/Info";
import "./Sidebar4.css";
import logo from "../assets/UASZ1.png";
const navItems = [
    { name: "Accueil", icon: <HomeIcon />, path: "/accueilUser" },
    { name: "Signaler une panne", icon: <ReportIcon />, path: "/signalerpanne" },
    { name: "appropos", icon: <InfoIcon />, path: "/info" }, 
];

export const SidebarUser = () => {
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