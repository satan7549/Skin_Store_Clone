import { Spacer } from "@chakra-ui/react";
import React from "react";
import CategoryComp from "../Components/CategoryComp";
import { Discover_Holiday_fun } from "../Components/Discover_Holiday_fun";
import Footer from "../Components/Footer";
import HomeImageBottom from "../Components/HomeImageBottom";
import { ImageSlider } from "../Components/ImageSlider";
import { OfferSlider } from "../Components/OfferSlider";
import PartnerCompany from "../Components/PartnerCompany";
import { ReactMultiCarasol } from "../Components/ReactMultiCarasol";
import { TrandingOffer } from "../Components/TrandingOffer";

export const Home = () => {
  return (
    <>
      <OfferSlider />
      <Spacer h="20px" />
      <ImageSlider />
      <Spacer h="20px" />
      <CategoryComp />
      <Spacer h="20px" />
      <Discover_Holiday_fun />
      <Spacer h="20px" />
      <TrandingOffer />
      <Spacer h="20px" />
      <PartnerCompany />
      <Spacer h="20px" />
      <HomeImageBottom />
      <Footer />
    </>
  );
};
