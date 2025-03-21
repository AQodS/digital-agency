"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { cloneElement, useEffect, useState } from "react";
import { CardMedia, useColorScheme, useScrollTrigger } from "@mui/material";
import Link from "next/link";
import ToggleThemeButton from "./ToggleThemeButton";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

const drawerWidth = 240;
const navItems = [
  { title: "Home", url: "/" },
  { title: "Services", url: "#services" },
  { title: "Portofolio", url: "#portofolio" },
  { title: "Features", url: "#features" },
  { title: "Team", url: "#team" },
  { title: "Contact Us", url: "#contact" },
];

export default function AppNavbar(props: Props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const { mode } = useColorScheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const containers = window !== undefined ? () => window.document.body : undefined;

  useEffect(()=>{
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[])

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <CardMedia
          sx={{ width: "100%" }}
          component={"img"}
          height={"100%"}
          image={mode === "light" ? "/black_logo.svg" : "/white_logo.svg"}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <ElevationScroll {...props}>
        <AppBar component="nav" sx={{
          transition: "all 0.3s ease-in-out",
          backgroundColor: isScrolled ? "primary.main" : "transparent",
          boxShadow: isScrolled ? 2 : "none"
        }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <CardMedia
                sx={{ width: 300 }}
                component={"img"}
                height={"100%"}
                image={"/white_logo.svg"}
              />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  key={item.title}
                  sx={{ color: "#fff" }}
                  LinkComponent={Link}
                  href={item.url}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <ToggleThemeButton />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
