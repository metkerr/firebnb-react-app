import React from "react";

import Button from "elements/Button";
import IconText from "./IconText";
import ImageFooter from "assets/images/undraw_best_place_r685 1.svg";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div
            className="col-auto mr-52"
            style={{ width: 170, paddingRight: 0 }}
          >
            <IconText />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="/tel:+622145556777">
                  (021) 4555 6777
                </Button>
              </li>
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="/mailto:support@firebnb.com"
                >
                  support@firebnb.com
                </Button>
              </li>
              <li className="list-group-item">
                <span>Balikpapan, Indonesia</span>
              </li>
            </ul>
          </div>
          <div className="col-auto mr-52" style={{ width: 76 }}>
            <h6 className="mt-2">Product</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/properties/hotel">
                  Hotel
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties/apartment">
                  Apartment
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties/cottage">
                  Cottage
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto mr-4">
            <h6 className="mt-2">Resources</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/blog">
                  Blog
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/faq">
                  FAQs
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Contact Us
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto mr-52">
            <h6 className="mt-2">Company</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="/about-us">
                  About Us
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="/career">
                  Career
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="/our-team">
                  Out Team
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h6 className="mt-2">Follow Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="https://www.facebook.com/firebnb"
                >
                  Facebook
                </Button>
              </li>
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="https://www.instagram.com/firebnb"
                >
                  Instagram
                </Button>
              </li>
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="https://www.twitter.com/firebnb"
                >
                  Twitter
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <img
              src={ImageFooter}
              alt="properties illustration footer"
              className="img-fluid image-footer"
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            <span>© 2020 Firebnb - All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
