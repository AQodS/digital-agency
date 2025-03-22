"use client";
import { Fragment } from "react";
import { Container } from "@mui/material";
import {
  AppNavbar,
  PortfolioSection,
  ServicesSection,
  TopSection,
} from "../common";

const HomePage = () => {
  return (
    <Fragment>
      <AppNavbar />
      <TopSection />
      <Container sx={{ pt: 2 }} component="main" maxWidth="xl">
        <ServicesSection />
        <PortfolioSection />
      </Container>
    </Fragment>
  );
};

export default HomePage;
