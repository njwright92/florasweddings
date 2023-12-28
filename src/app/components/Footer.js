import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faSquareFacebook,
  faYelp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faImages,
  faBox,
  faTaxi,
  faDollarSign,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3 className="footer-subtitle">
          Thanks for visiting Floras Weddings!
        </h3>
        <nav className="footer-nav">
          <Link href="#main" passHref>
            <div className="footer-link">
              <FontAwesomeIcon
                icon={faHome}
                className="h-6 w-6 inline-block mr-2"
              />
              Home
            </div>
          </Link>
          <Link href="#gallery" className="footer-link" passHref>
            <FontAwesomeIcon
              icon={faImages}
              className="h-6 w-6 inline-block mr-2"
            />{" "}
            Gallery
          </Link>
          <Link href="#services" className="footer-link" passHref>
            <FontAwesomeIcon
              icon={faTaxi}
              className="h-6 w-6 inline-block mr-2"
            />{" "}
            Services
          </Link>
          <Link href="#packages" className="footer-link" passHref>
            <FontAwesomeIcon
              icon={faBox}
              className="h-6 w-6 inline-block mr-2"
            />{" "}
            Packages
          </Link>
          <Link href="#pricing" className="footer-link" passHref>
            <FontAwesomeIcon
              icon={faDollarSign}
              className="h-6 w-6 inline-block mr-2"
            />{" "}
            Pricing
          </Link>
          <Link
            href="mailto:contact@florasweddings.com"
            className="footer-link"
            passHref
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-6 w-6 inline-block mr-2"
            />{" "}
            Contact Me
          </Link>
        </nav>
        <div className="footer-social">
          <div className="social-media-section">
            <h4 className="footer-subtitle">Follow me on social media:</h4>
            <div className="flex justify-center items-center">
              <a
                href="https://www.instagram.com/florasweddings"
                className="footer-link"
              >
                <FontAwesomeIcon icon={faSquareInstagram} className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/florasweddings"
                className="footer-link"
              >
                <FontAwesomeIcon icon={faSquareFacebook} className="h-6 w-6" />
              </a>
              <a
                href="https://www.yelp.com/biz/florasweddings"
                className="footer-link"
              >
                <FontAwesomeIcon icon={faYelp} className="h-6 w-6" />
              </a>
              <a
                href="https://www.google.com/search?q=florasweddings"
                className="footer-link"
              >
                <FontAwesomeIcon icon={faGoogle} className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="footer-subtitle">Email or call me now at:</p>
            <a href="mailto:stacimw@yahoo.com" className="footer-link">
              stacimw@yahoo.com
            </a>
            <a href="tel:+12087559409" className="footer-link">
              (208)-755-9409
            </a>
          </div>
          <div className="footer-social">
            <h5 className="footer-subtitle">Visit my florist site at:</h5>
            <div className="flex justify-center items-center">
              <a
                href="https://www.florasflowers.com"
                className="footer-social-link mx-2"
              >
                🌸 Floras Flowers
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="body-text">
          © {new Date().getFullYear()} Floras Weddings. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
