import React from "react";
import Hero from "../components/Hero/Hero";
import LatestProducts from "../components/latest/LatestProducts";
import Banner from "../components/Banner/Banner";
import SpecialProducts from "../components/dealsInWeek/SpecialProducts";
import ChooseBest from "../components/ChooseBest/ChooseBest";
import Policy from "../components/policy/Policy";
import Reviews from "../components/Reviews/Reviews";
import Blog from "../components/Blog/Blog";
const Home = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <LatestProducts />
      <SpecialProducts />
      <ChooseBest />
      <Policy />
      <Reviews />
      <Blog />
    </div>
  );
};

export default Home;
