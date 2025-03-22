import {
  Box,
  Divider,
  Grid2,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import { Fragment, useState } from "react";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { Brush, Code, TrendingUp, Javascript } from "@mui/icons-material";
import CircularProgressWithIcon from "./CircularProgressWithIcon";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { PhotoProvider, PhotoView } from "react-photo-view";

const services = [
  {
    icon: <Brush />,
    title: "Creative Design",
    description: "Photoshop",
    value: 55,
  },
  {
    icon: <Code />,
    title: "Development",
    description: "HTML5 / CSS3",
    value: 67,
  },
  {
    icon: <TrendingUp />,
    title: "Marketing",
    description: "Google Ads",
    value: 83,
  },
  {
    icon: <Javascript />,
    title: "Javascript",
    description: "Javascript Ajax",
    value: 77,
  },
];

function PhotographyImageList() {
  return (
    <PhotoProvider>
      <ImageList sx={{}} variant="woven" cols={3} gap={8}>
        {itemData5.map((item) => (
          <PhotoView
            key={item.img}
            src={`${item.img}?w=500&fit=crop&auto=format`}
          >
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}

const itemData5 = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
];

function WebsiteImageList() {
  return (
    <PhotoProvider>
      <ImageList sx={{}}>
        {itemData4.map((item) => (
          <PhotoView
            key={item.img}
            src={`${item.img}?w=500&fit=crop&auto=format`}
          >
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                position="below"
              />
            </ImageListItem>
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}

const itemData4 = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

function srcset(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function PhotoshopImageList() {
  return (
    <PhotoProvider>
      <ImageList
        sx={{
          // width: 500,
          // height: 450,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
        }}
        // rowHeight={200}
        gap={1}
      >
        {itemData3.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <PhotoView
              key={item.img}
              src={`${item.img}?w=500&fit=crop&auto=format`}
            >
              <ImageListItem key={item.img} cols={cols} rows={rows}>
                <img
                  {...srcset(item.img, 250, 200, rows, cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  }}
                  title={item.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      sx={{ color: "white" }}
                      aria-label={`star ${item.title}`}
                    >
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            </PhotoView>
          );
        })}
      </ImageList>
    </PhotoProvider>
  );
}

const itemData3 = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

function IllustratorImageList() {
  return (
    <Box sx={{}}>
      <PhotoProvider>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData2.map((item) => (
            <PhotoView
              key={item.img}
              src={`${item.img}?w=500&fit=crop&auto=format`}
            >
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={item.author} />
              </ImageListItem>
            </PhotoView>
          ))}
        </ImageList>
      </PhotoProvider>
    </Box>
  );
}

const itemData2 = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    author: "swabdesign",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    author: "Charles Deluvio",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    author: "Christian Mackie",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    author: "Taylor Simpson",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    author: "Ben Kolde",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    author: "Philipp Berndt",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    author: "Jen P.",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    author: "Douglas Sheppard",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    author: "Fi Bell",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
];

function AllPortfolioImageList() {
  return (
    <Box>
      <PhotoProvider>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <PhotoView
              key={item.img}
              src={`${item.img}?w=500&fit=crop&auto=format&dpr=2`}
            >
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            </PhotoView>
          ))}
        </ImageList>
      </PhotoProvider>
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", mt: 4 }}>
      <AppBar elevation={0} color="inherit" position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile={true}
          aria-label="full width tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Illustrator" {...a11yProps(1)} />
          <Tab label="Photoshop" {...a11yProps(2)} />
          <Tab label="Website" {...a11yProps(3)} />
          <Tab label="Photography" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <Divider variant="fullWidth" />
      <TabPanel value={value} index={0} dir={theme.direction}>
        <AllPortfolioImageList />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <IllustratorImageList />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <PhotoshopImageList />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <WebsiteImageList />
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <PhotographyImageList />
      </TabPanel>
    </Box>
  );
}

const PortfolioSection = () => {
  return (
    <Fragment>
      <Box
        id="portfolio"
        sx={[
          (theme) => ({
            backgroundColor: theme.vars.palette.grey[800],
            [theme.breakpoints.down("md")]: {
              pt: "48px",
            },
            ...theme.applyStyles("dark", {
              backgroundColor: theme.vars.palette.background.default,
            }),
          }),
        ]}
      >
        <Box
          sx={{
            mt: { lg: 6, md: 6, sm: 0, xs: 0 },
            pt: { lg: 7, md: 7, sm: 0, xs: 0 },
            color: (theme) => theme.vars.palette.common.white,
          }}
        >
          <Zoom direction="right" duration={1200}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                textAlign: "center",
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: "1.3",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Our Portfolio Showcase
            </Typography>
          </Zoom>
          <Box sx={{ textAlign: "center", display: "block" }}>
            <IconButton color="warning">
              <DesignServicesOutlinedIcon />
            </IconButton>
          </Box>
          <Slide direction="right" duration={1500}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, textAlign: "center", px: 2 }}
            >
              Some of our recent work of the hundreds that we have for our
              customers around the world are displayed in Fusce lacinia arcu et
              nulla. Nulla vitae mauris non felis mollis faucipus.
            </Typography>
          </Slide>
        </Box>

        <Box>
          <FullWidthTabs />
        </Box>
      </Box>
      <Box sx={{ width: "100%", pt: { lg: 10, md: 10, sm: 0, xs: 0 } }}>
        <Fade direction="right" duration={1400}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              textAlign: "center",
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: "1.3",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textWrap: "wrap",
              fontSize: {
                lg: "3.75rem",
                md: "3.75rem",
                sm: "2rem",
                xs: "2rem",
              },
            }}
          >
            Our capabilities
          </Typography>
        </Fade>
        <Box sx={{ textAlign: "center", display: "block" }}>
          <IconButton color="warning" size="large">
            <DesignServicesOutlinedIcon />
          </IconButton>
        </Box>
        <Slide direction="down" duration={1200}>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              display: "block",
              maxWidth: 600,
              margin: "0 auto",
              py: 3,
            }}
          >
            Some of our recent work of the hundreds that we have for our
            customers around the world are displayed in Fusce lacinia arcu et
            nulla. Nulla vitae mauris non felis mollis faucipus.
          </Typography>
        </Slide>
        <Grid2 container spacing={2}>
          {services.map((item) => (
            <Grid2 key={item.title} size={{ lg: 3, md: 3, sm: 12, xs: 12 }}>
              <Fade duration={1300} direction="bottom-right">
                <Paper
                  elevation={4}
                  sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    margin: "0 auto",
                  }}
                >
                  <Box>
                    <CircularProgressWithIcon
                      value={item.value}
                      icon={
                        <IconButton color="warning" size="small">
                          {item.icon}
                        </IconButton>
                      }
                    />

                    <Typography variant="h5">{item.title}</Typography>
                    <Typography>{item.description}</Typography>
                  </Box>
                </Paper>
              </Fade>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Fragment>
  );
};

export default PortfolioSection;
