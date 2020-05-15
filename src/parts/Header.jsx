import React from "react";
import IconText from "./IconText";
import Button from "elements/Button";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };
  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
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
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Sign In
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="btn btn-outline-primary" href="/">
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
