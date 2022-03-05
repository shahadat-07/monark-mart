import React from "react";
import Banner from "../Banner/Banner";
import MidBar from "../MidBar/MidBar";
import Newsletter from "../Newsletter/Newsletter";
import TopBar from "../TopBar/TopBar";

const Home = () => {
  return (
    <section className="home">
      <TopBar />
      <MidBar />
      <Banner />
      <Newsletter />
    </section>
  );
};

export default Home;
