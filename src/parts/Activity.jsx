import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Activity({ data }) {
  if (data.length === 0) return null;
  return (
    <Fade bottom>
      <section className="container">
        <h4 className="mb-3 font-weight-medium">Activities</h4>
        <div className="container-grid">
          {data.map((item, index2) => {
            return (
              <div className="item column-3 row-1" key={`activity-${index2}`}>
                <div className="card">
                  {item.isPopular && (
                    <div className="tag">
                      Popular <span className="font-weight-light">Choice</span>
                    </div>
                  )}
                  <figure className="img-wrapper" style={{ height: 165 }}>
                    <img
                      src={
                        item.imageUrl
                          ? `${process.env.REACT_APP_FIREBNB_API}/${item.imageUrl}`
                          : ""
                      }
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type={"link"}
                      className="stretched-link d-block text-gray-800"
                      href={`/properties/${item._id}`}
                    >
                      <h5 className="h4">{item.name}</h5>
                    </Button>
                    <span className="text-gray-500">{item.type}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
}
