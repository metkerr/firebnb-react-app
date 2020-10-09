import React from "react";
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
                    <span className="d-block text-gray-800">
                      <h5 className="h4">{item.name}</h5>
                    </span>
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
