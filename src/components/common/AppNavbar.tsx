"use client";
import * as React from "react";
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
import { CardMedia, useColorScheme, useScrollTrigger } from "@mui/material";
import ToggleThemeButton from "./ToggleThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

const drawerWidth = 240;
const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Portfolio",
    url: "#portfolio",
  },
  {
    title: "Features",
    url: "#features",
  },
  {
    title: "Team",
    url: "#team",
  },
  {
    title: "Contact Us",
    url: "#contact",
  },
];

export default function DrawerAppBar(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { mode } = useColorScheme();

  const pathname = usePathname();
  const [hash, setHash] = React.useState("/");

  console.log(pathname, hash);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const handleHashChange = () => {
      console.log("Hash value ", window.location.hash);
      const val = window.location.hash;
      setHash(!val ? "/" : val); // Extract the hash part
    };

    handleHashChange(); // Set initial hash
    // window.addEventListener("hashchange", handleHashChange); // Listen for hash changes
    window.addEventListener("scroll", handleHashChange); // Listen for hash changes
    return () => {
      window.removeEventListener("scroll", handleHashChange); // Cleanup
    };
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <CardMedia
          sx={{ width: "100%" }}
          component="img"
          height="100%"
          image={mode === "light" ? "/black_logo.svg" : "/white_logo.svg"}
          alt="logo"
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              LinkComponent={Link}
              href={item.url}
              sx={[
                (theme) => ({
                  ...(item.url === hash
                    ? {
                        color: theme.vars.palette.warning.light,
                        borderBottom: `2px solid ${theme.vars.palette.warning.light}`,
                      }
                    : {}),
                }),
              ]}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 50); // Change when scrolling past 50px
    };

    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  // const { window } = props;

  const container = () => window?.document.body;

  return (
    <Box>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: isScrolled ? "primary.main" : "transparent",
            boxShadow: isScrolled ? 2 : "none",
            transition: "0.3s ease-in-out",
          }}
        >
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
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <CardMedia
                sx={{ width: 300 }}
                component="img"
                height="100%"
                image="/white_logo.svg"
                alt="logo"
              />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  size="large"
                  key={item.title}
                  color="inherit"
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  sx={[
                    (theme) => ({
                      // color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.2rem",
                      borderRadius: 0,
                      ...(item.url === hash
                        ? {
                            color: theme.vars.palette.warning.light,
                            borderBottom: `2px solid ${theme.vars.palette.warning.light}`,
                          }
                        : {}),
                    }),
                  ]}
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
