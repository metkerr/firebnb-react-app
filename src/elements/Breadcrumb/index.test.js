import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "elements/Breadcrumb";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const breadrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "Accommodation Details", pageHref: "" },
  ];
  const { container } = render(
    <Router>
      <Breadcrumb data={breadrumbList} />
    </Router>
  );
  const breadcrumb = container.querySelector(".breadcrumb");

  return {
    breadcrumb,
  };
};

test("Should have <ol> with className .breadcrumb and have text Home & Accommodation Details", () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("Accommodation Details");
});
