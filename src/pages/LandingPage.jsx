import React, { useRef, useEffect } from "react";
import Header from "parts/Header";
import { connect } from "react-redux";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import Fade from "react-reveal/Fade";
import Loading from "parts/Loading";

import { fetchPage } from "store/actions/page";

function LandingPage(props) {
  const refMostPicked = useRef();
  const { page } = props;

  useEffect(() => {
    document.title = "Firebnb | Home";
    window.scrollTo(0, 0);

    if (!props.page.landingPage) {
      props.fetchPage(`/landing-page`, "landingPage");
    }
  });

  if (!page.hasOwnProperty("landingPage")) return <Loading />;

  return (
    <>
      <Header {...props}></Header>
      <Fade>
        <Hero refMostPicked={refMostPicked} data={page.landingPage.hero} />
      </Fade>
      <Fade>
        <MostPicked data={page.landingPage.mostPicked} ref={refMostPicked} />
      </Fade>
      <Categories data={page.landingPage.category} />
      <Fade bottom>
        <Testimony data={page.landingPage.testimonial} />
      </Fade>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  page: state.page,
  //  ? state.page.landingPage : null,
});
export default connect(mapStateToProps, { fetchPage })(LandingPage);
