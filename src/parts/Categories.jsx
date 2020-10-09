import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;
    return (
      <Fade bottom key={`category-${index1}`} delay={300 * index1}>
        <section className="container">
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 165 }}>
                      <img
                        src={
                          item.imageId[0]
                            ? `${process.env.REACT_APP_FIREBNB_API}/${item.imageId[0].imageUrl}`
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
                        <h5 className="h4">{item.title}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Fade>
    );
  });
}
