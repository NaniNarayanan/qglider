import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// ------------ custom files ------------

import AppRoutes from "../../../Routes/AppRoute";
import NavItems from "../../../Constant/Navmenu";
import CurrentPage from "../../../ActivePage/page";
import BookAppointment from "../../../Popup/BookAppointment";
import "./HomePage.css";
import { Alert } from "../../ReuseComponents/Alert/Alertmessage";

// ------------ custom icons and images -------
import Logo from "../../../Assets/qgliderlogo.png";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 280;

export default function HomePage() {
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState();
  const location = CurrentPage();

  const handleBookModalOpen = () => {
    setBookModalOpen(true);
    Alert("success","success message")
  };

  const handleBookModalClose = () => {
    setBookModalOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          {/* <Toolbar /> */}
          {/* <Divider /> */}
          <Box sx={{ padding: "0px 25px" }}>
            <Box sx={{ padding: "15px 16px" }}>
              <img src={Logo} alt={Logo + ".logo"} />
            </Box>
            <Box sx={{ margin: "30px 0px 20px" }}>
                <Button
                  onClick={handleBookModalOpen}
                  sx={{
                    borderRadius: "25px",
                    width: "100%",
                    background: "#41BA8F",
                    padding: "10px 5px",
                    color: "white",
                    "&:hover": { background: "#41BA8F" },
                  }}
                >
                  + Book an Appointment
                </Button>
            </Box>
            <List>
              {NavItems.map((text, index) => (
                <ListItem sx={{ padding: "5px 0px" }} className={location === text.url ? "activeNavLi" : ""} key={text} disablePadding>
                  <Link
                    style={{ textDecoration: "none", color: "#000000" }}
                    to={text.url}
                  >
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "35px" }}>
                        <img src={text.icon} alt={text.name + ".logo"} />
                      </ListItemIcon>
                      <ListItemText
                        className={location === text.url ? "activeNav" : ""}
                        primary={text.name}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
            
            <Box sx={{marginTop:"50px"}}>
              <Divider sx={{margin:"0px -25px"}}/>
              <Box sx={{display:"flex", padding:"20px 10px"}}>
                <Box>
                  <AccountCircleIcon style={{fill:"#41BA8F"}} />
                </Box>
                <Box>John Doe</Box>
              </Box>
            </Box>
            
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, padding: "5px 25px" }}>
          <AppRoutes />
        </Box>
      </Box>

      <BookAppointment open={bookModalOpen} onClose={handleBookModalClose} />
    </>
  );
}
