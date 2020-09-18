import React from "react";
import ReactHtmlParser from "react-html-parser";
export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4 className="description-title">About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div
              key={`feature-${index}`}
              className="col-6 amenities"
              style={{
                marginBottom: 20,
              }}
            >
              <img
                src={feature.imageUrl}
                alt={feature.name}
                className="mr-4 pb-3"
              />
              <span>{feature.qty}</span> <span>{feature.name}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
