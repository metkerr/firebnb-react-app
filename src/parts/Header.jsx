import React from "react";
import IconText from "./IconText";
import Button from "elements/Button";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };
  return (
    <header className="spacing-sm" style={{ marginBottom: 40 }}>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ padding: "0px" }}
        >
          <IconText />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/accommodation")}`}>
                <Button className="nav-link" type="link" href="/accommodation">
                  Accommodation
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/signin")}`}>
                <Button className="nav-link" type="link" href="/signin">
                  Sign In
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/signup")}`}>
                <Button
                  className="btn btn-outline-primary"
                  style={{ padding: "0px 30px" }}
                  href="/signup"
                >
                  Sign Up
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
