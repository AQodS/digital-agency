import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import Slider from "react-slick";

type TestimonialItem = {
  id: number;
  name: string;
  location: string;
  designation: string;
  avatar: string;
  message: string;
  lorem: string;
  rating: number;
  audio: string;
};
const data: TestimonialItem[] = [
  {
    id: 1,
    name: "Lance Jarvis",
    location: "London, UK",
    designation: "General Manager ",
    avatar: "https://picsum.photos/200?random=1",
    message:
      "We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.8,
    audio: "https://testimonialapi.toolcarton.com/audio/1.mp3",
  },
  {
    id: 2,
    name: "Juliet Wright",
    location: "Sweden",
    designation: "Technical Director",
    avatar: "https://picsum.photos/200?random=2",
    message:
      "It has changed the way I used the website. Product lets you create anything you envision and it does it so easy and flawless. I can't imagine not working with the service.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.4,
    audio: "https://testimonialapi.toolcarton.com/audio/2.mp3",
  },
  {
    id: 3,
    name: "Michael D.",
    location: "Austin, Texas",
    designation: "Investor",
    avatar: "https://picsum.photos/200?random=3",
    message:
      "Insights from service drove 30% lift in our conversions, this product service is essential for your company growth strategy.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.5,
    audio: "https://testimonialapi.toolcarton.com/audio/3.mp3",
  },
  {
    id: 4,
    name: "Kylie Lutz",
    location: "Paris, France",
    designation: "Freelancer",
    avatar: "https://picsum.photos/200?random=4",
    message:
      "The company really helped with my personal branding - everything from conception to execution was amazing and super professional. Looking forwards for upgradation.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 5,
    audio: "https://testimonialapi.toolcarton.com/audio/4.mp3",
  },
  {
    id: 5,
    name: "Mark Twin",
    location: "Berlin, Germany",
    designation: "Developer",
    avatar: "https://picsum.photos/200?random=5",
    message:
      "Best company I have ever deal with online! Quick delivery and excellent customer service. Will definetly upgrade the service.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.5,
    audio: "https://testimonialapi.toolcarton.com/audio/5.mp3",
  },
  {
    id: 6,
    name: "Anne",
    location: "New York, USA",
    designation: "Content Writer & Artist",
    avatar: "https://picsum.photos/200?random=6",
    message:
      "These folks are my go-to for any design or branding services. Excellent communication and I feel like I'm always a priority for them.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.7,
    audio: "https://testimonialapi.toolcarton.com/audio/6.mp3",
  },
  {
    id: 7,
    name: "Bryan S.",
    location: "Sydney, Australia",
    designation: "Manager",
    avatar: "https://picsum.photos/200?random=7",
    message:
      "Love your stuff, the quality has been incredible year after year. I tell everyone I know that they have to try the product. Thank you to the team the whole team.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.7,
    audio: "https://testimonialapi.toolcarton.com/audio/7.mp3",
  },
  {
    id: 8,
    name: "Kamren Hays",
    location: "Florida, USA",
    designation: "Marketing Head",
    avatar: "https://picsum.photos/200?random=7",
    message:
      "Product bring 10x multiplier in terms of both ease and spread of use. I'm able to quickly and easily execute on my marketing strategies. That the fundamental difference from other services.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.8,
    audio: "https://testimonialapi.toolcarton.com/audio/8.mp3",
  },
  {
    id: 9,
    name: "Diane Smith",
    location: "New York, USA",
    designation: "Sales Head",
    avatar: "https://picsum.photos/200?random=8",
    message:
      "Team offers a powerful suite of tools that every client must have. And if you get stuck their support team will help out. Its is fast, reliable and has no complications at all.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.1,
    audio: "https://testimonialapi.toolcarton.com/audio/9.mp3",
  },
  {
    id: 10,
    name: "Mikayla Mccullough",
    location: "Madrid, Spain",
    designation: "Designer",
    avatar: "https://picsum.photos/200?random=9",
    message:
      "The vibe, level of inquiry, feedback and traffic at our product services and newly designed booth at a recent conference was very positive.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.9,
    audio: "https://testimonialapi.toolcarton.com/audio/10.mp3",
  },
];

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <Card elevation={8} sx={{ p: 2, minHeight: 320 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          sx={{
            borderRadius: "50%",
            height: 120,
            width: 120,
            border: (theme) => `5px solid ${theme.vars.palette.primary.light}`,
          }}
          className="avatar"
          src={item.avatar}
        />
      </Box>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5">
          <span>&ldquo;</span>
          {item.message}
          <span>&rdquo;</span>
        </Typography>
        <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          sx={{ justifyContent: "center" }}
        >
          <Typography color="primary" variant="subtitle1">
            {item.name},{" "}
          </Typography>
          <Typography color="warning" variant="subtitle2">
            {item.location}
          </Typography>
        </Stack>
        <Typography
          color="textSecondary"
          variant="caption"
          sx={{ fontStyle: "italic" }}
        >
          {item.designation}
        </Typography>
      </CardContent>
    </Card>
  );
}

export const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    swipeToSlide: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Fragment>
      <Box sx={{ position: "relative" }}>
        <Slider {...settings}>
          {data.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </Slider>
      </Box>
    </Fragment>
  );
};
