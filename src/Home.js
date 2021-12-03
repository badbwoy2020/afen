import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import Section1 from "./Section1";
import Mask from "./Mask";
import Educative from "./Educative";
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <Header />
      <Banner />
      <Section1 />
      <Mask />
      <Educative />
    </div>
  );
}

export default Home;
