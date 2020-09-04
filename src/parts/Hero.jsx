import React from "react";

import ImageHero from "assets/images/undraw_Eiffel_tower_3gw8.svg";
import Button from "elements/Button";
import IconTravelers from "assets/images/accessibility_new-24px.svg";
import IconTreasures from "assets/images/photo_camera-24px.svg";
import IconCities from "assets/images/pin_drop-24px.svg";

import numberFormat from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 570 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Let’s Get <br /> Your Best Trip <br /> Experience Ever
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "24px" }}
          >
            Firebnb, It's like Airbnb but warmer and we will help you to create
            your dream trip
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Warm Me Now
          </Button>
          <div className="row mt-5">
            <div className="col-auto" style={{ marginRight: "30" }}>
              <img
                src={IconTravelers}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)}
                <span className="text-gray-500 font-weight-light">
                  {" "}
                  travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: "30" }}>
              <img
                src={IconTreasures}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.treasures)}
                <span className="text-gray-500 font-weight-light">
                  {" "}
                  treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img src={IconCities} alt={`${props.data.cities} Cities`} />
              <h6 className="mt-3">
                {numberFormat(props.data.cities)}
                <span className="text-gray-500 font-weight-light"> cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 516, height: 429 }}>
            <img
              src={ImageHero}
              alt="eiffel tower illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
