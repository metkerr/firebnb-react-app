import React from "react";

export default function Loading() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div
        className="spinner-border"
        role="status"
        style={{ position: "absolute", top: "45%" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
