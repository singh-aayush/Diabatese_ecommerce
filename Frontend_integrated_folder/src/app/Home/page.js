import Banner from "@/Components/Bannar";
import HeroSection from "@/Components/Hero_section";
import React from "react";
import CustomerChoice from "@/Components/Customer_choice";
import PopularProduct from "@/Components/Popular_products";
import SaleBanner from "@/Components/Company_features";
import PocketFriendlyContainer from "@/Components/Pocket_friendly_container";
import AdvertisementBanner from "@/Components/Advertisment_bannar";
import FeatureProduct from "@/Components/Featured_product";
import LatestNews from "@/Components/News_component";
import Testimonial from "@/Components/Testimonial_component";
import Newsletter from "@/Components/Newsletter.components";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Banner />
      <CustomerChoice />
      <PopularProduct />
      <SaleBanner />
      <PocketFriendlyContainer />
      <AdvertisementBanner />
      <FeatureProduct />
      <Testimonial />
    </>
  );
};

export default Home;
