import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faSquareFacebook,
  faYelp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3 className="footer-subtitle">
          Thanks for visiting Floras Flowers wedding page!
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Image - Flex Start */}
          <div className="flex justify-start md:justify-start md:flex-grow-0">
            <Link href="#main">
              <img
                src="/floras-Flowers.png"
                alt="Floras Flowers"
                className="cursor-pointer"
                width="300"
                height="auto"
              />
            </Link>
          </div>

          {/* Social Media Links - Flex Center */}
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:flex-grow">
            <div className="flex flex-col items-center">
              <h3 className="footer-subtitle text-center">
                Follow me on social media:
              </h3>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/florasweddings"
                  className="footer-link"
                >
                  <FontAwesomeIcon icon={faSquareInstagram} className="fa-xl" />
                </a>
                <a
                  href="https://www.facebook.com/florasweddings"
                  className="footer-link"
                >
                  <FontAwesomeIcon icon={faSquareFacebook} className="fa-xl" />
                </a>
                <a
                  href="https://www.yelp.com/biz/florasweddings"
                  className="footer-link"
                >
                  <FontAwesomeIcon icon={faYelp} className="fa-xl" />
                </a>
                <a
                  href="https://www.google.com/search?q=florasweddings"
                  className="footer-link"
                >
                  <FontAwesomeIcon icon={faGoogle} className="fa-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Site Link - Flex End */}
          <div className="flex flex-col items-end gap-2 md:flex-row md:justify-end md:flex-grow-0">
            <div className="flex flex-col items-center">
              <h4 className="footer-subtitle text-center">
                Visit my florist eCommerce site here:
              </h4>
              <Link
                href="https://www.florasflowers.com"
                className="footer-link"
              >
                🌸 Floras Flowers
              </Link>
            </div>
          </div>
        </div>

        <h3 className="footer-subtitle">Email or call me now at:</h3>
        <a href="mailto:stacimw@yahoo.com" className="footer-link">
          <FontAwesomeIcon icon={faMailBulk} className="h-5 w-5 mr-2" />
          stacimw@yahoo.com
        </a>
        <a href="tel:+12087559409" className="footer-link">
          <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-2" />
          (208)-755-9409
        </a>
      </div>

      <div className="footer-bottom">
        <p className="body-text">
          © {new Date().getFullYear()} Floras Weddings. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
