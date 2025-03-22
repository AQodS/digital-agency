"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import FlippingButton from "./FlippingButton";
import { Fade, Slide } from "react-awesome-reveal";
import Slider from "react-slick";

const SliderItem = ({ item }: { item: { url: string } }) => {
  return (
    <Box
      sx={[
        (theme) => ({
          height: "100vh",
          position: "relative",
          backgroundImage: `url(${item.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 0px",
          backgroundAttachment: "fixed", // Fixed background effect
          borderBottom: "10px solid",
          borderImage: `linear-gradient(to right, ${theme.vars.palette.primary.light} 50%, ${theme.vars.palette.error.light} 50%) 1`,
        }),
      ]}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.4)", // Dark overlay
        }}
      />
      <Box
        sx={[
          (theme) => ({
            position: "relative",
            zIndex: 1,
            display: "table-cell",
            verticalAlign: "middle",
            width: "1%",
            padding: "200px 0 120px",
            height: "100vh",
            [theme.breakpoints.down("md")]: {
              padding: "100px 0 60px",
            },
          }),
        ]}
      >
        <Container
          sx={[
            (theme) => ({
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              flexDirection: "column",
              width: "100%",
              [theme.breakpoints.down("md")]: {
                display: "block",
                alignItems: "center",
                justifyContent: "center",
              },
            }),
          ]}
        >
          <Fade direction="top-left">
            <Typography
              sx={[
                (theme) => ({
                  display: "block",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: 24,
                  color: (theme) => theme.vars.palette.common.white,
                  letterSpacing: "0.3em",
                  textAlign: "right",
                  [theme.breakpoints.down("md")]: {
                    // fontSize: 24,
                    fontWeight: 800,
                    letterSpacing: "0em",
                    textAlign: "unset",
                  },
                }),
              ]}
              variant="h5"
            >
              Creative Digital Agency
            </Typography>
          </Fade>
          <Fade direction="top-left" delay={100}>
            <Typography
              sx={[
                (theme) => ({
                  display: "block",
                  fontWeight: 800,
                  color: theme.vars.palette.common.white,
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: "1.15",
                  position: "relative",
                  textAlign: "right",
                  [theme.breakpoints.down("md")]: {
                    // fontWeight: 500,
                    textWrap: "wrap",
                    lineHeight: "1.15",
                    fontSize: 60,
                    textAlign: "unset",
                    letterSpacing: "0.2em",
                    py: 3,
                  },
                }),
              ]}
              variant="h1"
              component={"h1"}
            >
              Digital{" "}
              <Typography
                sx={[
                  (theme) => ({
                    fontWeight: 800,
                    color: theme.vars.palette.common.white,
                    fontFamily: "Montserrat, sans-serif",
                    paddingBottom: 1,
                    borderBottom: "10px solid #fff",
                    [theme.breakpoints.down("md")]: {
                      fontSize: 50,
                      letterSpacing: "0.2em",
                    },
                  }),
                ]}
                variant="h1"
                component={"span"}
              >
                Agency
              </Typography>
            </Typography>
          </Fade>
          <Slide delay={150} duration={3000}>
            <Typography
              sx={[
                (theme) => ({
                  color: (theme) => theme.vars.palette.common.white,
                  mt: 4,
                  maxWidth: 400,
                  textAlign: "center",
                  [theme.breakpoints.down("md")]: {
                    textAlign: "unset",
                    maxWidth: "100%",
                    mr: 9,
                    textWrap: "wrap",
                  },
                }),
              ]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              numquam facilis quod maxime, error sequi. Harum dolore a
              cupiditate delectus.
            </Typography>
          </Slide>
          <Stack
            spacing={2}
            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            sx={{ mt: 4, alignItems: "center" }}
          >
            <Slide direction="left" duration={3000}>
              <FlippingButton
                frontText={"Discover More"}
                backText={"Start Now"}
                frontColor={"error"}
                backColor={"inherit"}
              />
            </Slide>
            <Slide direction="right" duration={3000}>
              <FlippingButton
                frontText={"Contact Us"}
                backText={"Contact Now"}
                frontColor={"info"}
                backColor={"inherit"}
              />
            </Slide>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

const data = [
  {
    url: "/hero.jpeg",
  },
  {
    url: "/hero2.jpeg",
  },
  {
    url: "/hero3.jpeg",
  },
];

const TopSection = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item) => (
          <SliderItem key={item.url} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default TopSection;
