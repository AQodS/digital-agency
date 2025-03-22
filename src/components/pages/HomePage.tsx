"use client";
import { Fragment } from "react";
import { Container } from "@mui/material";
import { AppNavbar, ServicesSection, TopSection } from "../common";

const HomePage = () => {
  return (
    <Fragment>
      <AppNavbar />
      <TopSection />
      <Container sx={{ pt: 2 }} component="main" maxWidth="xl">
        <ServicesSection />
      </Container>
    </Fragment>
  );
};

export default HomePage;
