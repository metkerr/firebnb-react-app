import React, { useRef, useEffect } from "react";
import Header from "parts/Header";

import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import Fade from "react-reveal/Fade";

export default function LandingPage(props) {
  const refMostPicked = useRef();
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Firebnb | Home";
  });

  return (
    <>
      <Header {...props}></Header>
      <Fade>
        <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
      </Fade>
      <Fade>
        <MostPicked data={landingPage.mostPicked} ref={refMostPicked} />
      </Fade>
      <Categories data={landingPage.categories} />
      <Fade bottom>
        <Testimony data={landingPage.testimonial} />
      </Fade>
      <Footer />
    </>
  );
}
