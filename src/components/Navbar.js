// import React from "react";
// import { AppBar, Toolbar, Typography , InputBase } from "@mui/material";

// import { alpha, styled } from "@mui/material/styles";


// const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha("#fff", 0.15),
//     "&:hover": {
//       backgroundColor: alpha("#ff", 0.25),
//     },
//     marginLeft: "650px",
//     width: "300px",
//   }));
  
//   const SearchInput = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     width: "100%",
//     padding: theme.spacing(1, 2),
//     backgroundColor: "white",
//     borderRadius: "4px",
//   }));

// const Navbar = () => {
//   return (
//     <AppBar  position="static" sx={{ backgroundColor: "#093C1E" }}>
//       <Toolbar>
//         <Typography variant="h6"></Typography>
//       </Toolbar>
//       {/* <Search>
//           <SearchInput  placeholder="Rechercher..." />
//         </Search> */}
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha("#fff", 0.15),
//   "&:hover": {
//     backgroundColor: alpha("#fff", 0.25),
//   },
//   marginLeft: "auto",
//   marginRight: "20px",
//   width: "250px",
// }));

// const SearchInput = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
//   padding: theme.spacing(1, 2),
//   backgroundColor: "white",
//   borderRadius: "4px",
// }));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#edeeec" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6"  sx={{ color: "green" }} >GESTION DES PANNES</Typography>

        {/* <Search>
          <SearchInput placeholder="Rechercher..." />
        </Search> */}

        <div>
          {/* Icône de Notifications */}
          <IconButton sx={{ color: "green", marginRight: "10px" }}>
            <Badge badgeContent={0} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Icône de Profil (Dropdown) */}
          <IconButton sx={{ color: "green" }} onClick={handleMenuOpen}>
            <AccountCircleIcon />
          </IconButton>

          {/* Menu déroulant du profil */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: 2 }}
          >
            <MenuItem onClick={handleMenuClose} >
              Profil
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                console.log("Déconnexion");
              }}
            >
              <ListItemIcon>
                <LogoutIcon sx={{ color: "green" }} />
              </ListItemIcon>
              Déconnexion
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


