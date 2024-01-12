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
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo - Flex Start */}
          <div className="md:flex-grow-0">
            <Link href="/">
              <img
                src="/img/logo.webp"
                alt="Floras Flowers"
                className="footer-img"
                load="lazy"
              />
            </Link>
          </div>

        
          <div className="title-container text-center md:flex-grow">
            <h1 className="subtitle">
              Thanks for visiting Floras Flowers wedding page!
            </h1>
            <img
              src="/img/flower-PhotoRoom.webp"
              width={200}
              height={100}
              loading="lazy"
              alt="Flower"
              className="-mt-20 -mb-10"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 w-full">
        
          <div className="flex flex-col items-center md:flex-grow">
            <h2 className="body-text text-center">
              Follow me on social media:
            </h2>
            <div className="flex gap-1">
              {/* <Link
                href="https://www.instagram.com/floras_flowers4u/"
                className="footer-link custom-button"
                aria-label="Visit our Instagram page"
              >
                <FontAwesomeIcon icon={faSquareInstagram} className="fa-xl" />
                <span className="sr-only">Instagram</span>
              </Link> */}
              <Link
                href="https://www.facebook.com/happytrailsfloral"
                className="footer-link custom-button"
                aria-label="Visit our Facebook page"
              >
                <FontAwesomeIcon icon={faSquareFacebook} className="fa-xl" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.yelp.com/biz/floras-flowers-rathdrum?osq=floras+flowers"
                className="footer-link custom-button"
                aria-label="Check out our reviews on Yelp"
              >
                <FontAwesomeIcon icon={faYelp} className="fa-xl" />
                <span className="sr-only">Yelp</span>
              </Link>
              <Link
                href="https://www.google.com/search?sca_esv=596423552&sxsrf=ACQVn09gpbrwwD8VldD4ljK2Zd6apOvpOg:1704670363664&q=florasweddings&nfpr=1&sa=X&ved=2ahUKEwjz1_D7t8yDAxWtATQIHXEaAfgQvgUoAXoECBEQAw&biw=1287&bih=771&dpr=2"
                className="footer-link custom-button"
                aria-label="Find us on Google"
              >
                <FontAwesomeIcon icon={faGoogle} className="fa-xl" />
                <span className="sr-only">Google</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-grow-0">
            <h2 className="body-text text-center m-1">
              Looking to send flowers for a special occasion? Visit our online
              store for a beautiful selection and prompt delivery.
            </h2>
            <Link
              href="https://www.florasflowers4u.com"
              className="footer-link text-lg"
            >
              <button
                className="button"
                aria-label="Visit Floras Flowers Website"
              >
                🌸 Floras Flowers
              </button>
            </Link>
          </div>
        </div>

        <h3 className="body-text pt-2">Email or call me now at:</h3>
        <a
          href="mailto:FlorasProFlowers@gmail.com"
          className="footer-link text-lg m-1"
        >
          <FontAwesomeIcon icon={faMailBulk} className="h-5 w-5 mr-1" />
          FlorasProFlowers@gmail.com
        </a>
        <a href="tel:+12087559409" className="footer-link text-lg m-1">
          <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-1" />
          (208)-755-9409
        </a>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Floras Weddings. All rights reserved.
          <br />
          Designed and Coded by: Nathan Wright visit my portfolio:
          <Link
            href="https://njwright92.github.io/paper-kit-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Portfolio
          </Link>
        </p>
      </div>
    </footer>
  );
}
