import React from "react";
import Button from "elements/Button";

function MostPicked(props, ref) {
  return (
    <section className="container" ref={ref}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostpicked--${index}`}
              className={`item column-3 ${index === 0 ? " row-2" : " row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span className="font-weight-light"> / {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={
                      item.imageId[0]
                        ? `${process.env.REACT_APP_FIREBNB_API}/${item.imageId[0].imageUrl}`
                        : "/images/accommodationDefaultImage.jpg"
                    }
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="stretched-link d-block text-white"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.title}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const mostPickedRef = React.forwardRef(MostPicked);
export default mostPickedRef;
