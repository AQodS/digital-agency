import {
  DesignServices,
  Web,
  Security,
  LocalOffer,
  ShoppingCart,
  Build,
  Code,
  Support,
  Language,
  Palette,
  Work,
} from "@mui/icons-material";
import {
  Box,
  CardMedia,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import Paper from "@mui/material/Paper";
import { TestimonialSection } from "./TestimonialSection";
import FlippingButton from "./FlippingButton";
import { Fade, Slide } from "react-awesome-reveal";

const services = [
  {
    icon: <DesignServices />,
    title: "User Interface",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <DesignServices />,
    title: "Professional Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <Web />,
    title: "Landing Pages",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <Security />,
    title: "Secure Web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <LocalOffer />,
    title: "Offert Price",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <ShoppingCart />,
    title: "Ready Shopping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <Build />,
    title: "Easy to Customize",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <Code />,
    title: "Clean Code",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <Support />,
    title: "Support 24/7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
];

const services2 = [
  {
    icon: <Palette />,
    title: "Modern Design",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
  {
    icon: <Build />,
    title: "Easy to Customize",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
  {
    icon: <Work />,
    title: "Professional Portfolio",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
  {
    icon: <Code />,
    title: "Clean Code",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
  {
    icon: <Language />,
    title: "Browser Compatibility",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
  {
    icon: <Support />,
    title: "Support Online",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
];

const ServicesSection = () => {
  return (
    <Fragment>
      <Grid2 id="services" container spacing={2}>
        {services.map((item) => (
          <Grid2 key={item.title} size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
            <Slide cascade delay={100}>
              <Paper elevation={2} sx={{ p: 4 }}>
                <Stack direction={"row"}>
                  <IconButton color="error" size="small">
                    {item.icon}
                  </IconButton>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 400,
                    }}
                    variant="h5"
                  >
                    {item.title}
                  </Typography>
                </Stack>
                <Typography>{item.description}</Typography>
              </Paper>
            </Slide>
          </Grid2>
        ))}
      </Grid2>
      <Box
        sx={[
          (theme) => ({
            mt: 1,
            py: 4,
            px: 2,
            background: theme.vars.palette.grey[100],
            ...theme.applyStyles("dark", {
              background: theme.vars.palette.grey[900],
            }),
          }),
        ]}
      >
        <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          sx={{ justifyContent: "space-between" }}
        >
          <Slide direction="right" duration={2000}>
            <Typography
              variant="h3"
              sx={[
                (theme) => ({
                  fontWeight: 500,
                  fontFamily: "PlayFair",
                  lineHeight: 1.3,
                  [theme.breakpoints.down("md")]: {
                    fontSize: "30px",
                  },
                }),
              ]}
            >
              Incredible, would you like to try the demo?
            </Typography>
          </Slide>
          <Slide direction="left" duration={3000}>
            <FlippingButton
              frontText={"Discover More"}
              backText={"Start Now"}
              frontColor={"warning"}
              backColor={"inherit"}
              variant="outlined"
            />
          </Slide>
        </Stack>
      </Box>

      <Box
        sx={{
          height: "100vh",
          position: "relative",
          backgroundImage: "url(/service_bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100%",
          backgroundAttachment: "fixed",
          width: "100%",
          p: 4,
          display: "flex", // Enables Flexbox
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "800px", // Adjust width as needed
          }}
        >
          <TestimonialSection />
        </Box>
      </Box>

      <Grid2 container spacing={2} sx={{ pt: 4 }}>
        <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Grid2 container spacing={2} sx={{ height: "100%" }}>
            {services2.map((item) => (
              <Grid2 key={item.title} size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                <Fade direction="top-right" cascade delay={100} duration={1500}>
                  <Paper elevation={2} sx={{ p: 2 }}>
                    <Stack direction={"row"}>
                      <IconButton color="warning" size="small">
                        {item.icon}
                      </IconButton>
                      <Typography variant="h5">{item.title}</Typography>
                    </Stack>
                    <Typography>{item.description}</Typography>
                  </Paper>
                </Fade>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
        <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <CardMedia
            component="img"
            height="400"
            image="service_laptop2.jpg"
            alt="service laptop2"
            sx={{ borderRadius: 2, height: "100%" }}
          />
        </Grid2>
      </Grid2>
    </Fragment>
  );
};

export default ServicesSection;
