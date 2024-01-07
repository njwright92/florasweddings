"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareInstagram,
  faSquareFacebook,
  faYelp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const pathname = usePathname();
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".gallery-dropdown-menu")) {
      setShowGalleryDropdown(false);
    }
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (showGalleryDropdown) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
  }, [showGalleryDropdown]);

  return (
    <header className="header flex-col">
      {/* Header - Image Row with Social Links */}
      <div className="flex flex-col md:flex-row items-center">
        <Link href="/" passHref>
          <img
            src="/img/logo.webp"
            alt="Floras Flowers"
            className="cursor-pointer logo -mt-6 -mb-6 md:-mt-0 md:-mb-0 xl:-ml-10"
          />
        </Link>

        {/* Social Links */}
        <div className="flex gap-2 mt-2 md:ml-10">
          <Link
            href="https://www.instagram.com/florasflower4u/"
            className="footer-link custom-button"
            aria-label="Visit our Instagram page"
          >
            <FontAwesomeIcon icon={faSquareInstagram} className="fa-xl" />
            <span className="sr-only">Instagram</span>
          </Link>
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
            href="https://www.google.com/search?q=florasweddings"
            className="footer-link custom-button"
            aria-label="Find us on Google"
          >
            <FontAwesomeIcon icon={faGoogle} className="fa-xl" />
            <span className="sr-only">Google</span>
          </Link>
        </div>

        {/* Image */}

        {/* Email and Phone Links */}
        <div className="md:ml-20 text-center">
          <a href="mailto:stacimw@yahoo.com" className="nav-link text-center">
            FlorasProFlowers@gmail.com
          </a>
          <a href="tel:+12087559409" className="nav-link text-center">
            (208)-755-9409
          </a>
        </div>
      </div>

      {/* Navbar Row */}
      <nav className="relative">
        {/* Navbar toggler for small screens */}
        <div
          aria-label="Open Menu"
          className={`navbar-toggler ${
            isNavbarOpen ? "hidden" : "block"
          } md:hidden`}
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
          Menu
        </div>

        {/* Side-opening menu for small screens */}
        <div
          className={`fixed top-0 right-0 h-screen w-3/8 z-50 transform ${
            isNavbarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col p-4 md:hidden`}
          style={{ backgroundColor: `rgba(var(--color-primary))` }}
        >
          <button
            className="navbar-close text-right"
            aria-label="Close Menu"
            onClick={toggleNavbar}
          >
            <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
          </button>
          <Link href="/" passHref>
            <div className="nav-link mt-2 mb-2" onClick={toggleNavbar}>
              Home
            </div>
          </Link>
          <Link href="/gallery" passHref>
            <div className="nav-link mt-2 mb-2" onClick={toggleNavbar}>
              Weddings
            </div>
          </Link>
          <Link href="/pricing" passHref>
            <div className="nav-link mt-2 mb-2" onClick={toggleNavbar}>
              Pricing
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className="nav-link mt-2 mb-2" onClick={toggleNavbar}>
              About US
            </div>
          </Link>

          <Link href="/contact" passHref>
            <div className="nav-link mt-2 mb-2" onClick={toggleNavbar}>
              Contact Us
            </div>
          </Link>
          <Link href="/faqs" passHref>
            <div className="nav-link mt-2 mb-2" onClick={toggleNavbar}>
              Q&A
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-row justify-center space-x-4 flex-wrap">
          <Link href="/" passHref>
            <div
              className={`nav-link ${pathname === "/" ? "active-link" : ""}`}
            >
              Home
            </div>
          </Link>
          <Link href="/gallery" passHref>
            <div
              className={`nav-link ${
                pathname === "/gallery" ? "active-link" : ""
              }`}
              onMouseEnter={() => setShowGalleryDropdown(!showGalleryDropdown)}
            >
              Weddings
            </div>
          </Link>
          {showGalleryDropdown && (
            <div className="dropdown-menu gallery-dropdown-menu">
              <Link href="/gallery/lumen" passHref>
                <span className="dropdown-items">
                  Damschen Wedding at The Lumen Hall CDA
                </span>
              </Link>

              <Link href="/gallery/butterfield" passHref>
                <span className="dropdown-items">
                  Butterfield Wedding at The Willows CDA
                </span>
              </Link>
              <Link href="/gallery/cataldo" passHref>
                <span className="dropdown-items">
                  Country Barn Bed and Breakfast, Cataldo ID
                </span>
              </Link>
              <Link href="/gallery/ditrich" passHref>
                <span className="dropdown-items">
                  Ditrich Wedding in Athol, ID
                </span>
              </Link>
              <Link href="/gallery/dretke" passHref>
                <span className="dropdown-items">
                  The Dretke Wedding at Elkins Resort
                </span>
              </Link>
              <Link href="/gallery/flores" passHref>
                <span className="dropdown-items">
                  Flores Wedding on a Cruise Boat CDA
                </span>
              </Link>
              <Link href="/gallery/hauser" passHref>
                <span className="dropdown-items">
                  The Lee Wedding Private resdience Hauser, ID
                </span>
              </Link>
              <Link href="/gallery/hirschel" passHref>
                <span className="dropdown-items">
                  Hirschel Wedding at The Hagadone Event Center
                </span>
              </Link>
              <Link href="/gallery/homestead" passHref>
                <span className="dropdown-items">
                  Gundland Wedding at Homestead barn, Dover, ID
                </span>
              </Link>
              <Link href="/gallery/hoyer" passHref>
                <span className="dropdown-items">
                  Hoyer Wedding at Farm in Mica, Washington
                </span>
              </Link>
              <Link href="/gallery/jewett" passHref>
                <span className="dropdown-items">
                  Ross wedding at The Jewett House
                </span>
              </Link>
              <Link href="/gallery/justin" passHref>
                <span className="dropdown-items">
                  A Wright wedding in Rathdrum, ID
                </span>
              </Link>
              <Link href="/gallery/knox" passHref>
                <span className="dropdown-items">
                  Knox/Farley Wedding at the CDA Casino
                </span>
              </Link>
              <Link href="/gallery/koho" passHref>
                <span className="dropdown-items">
                  Koho Wedding at Firebrand Cocallala
                </span>
              </Link>

              <Link href="/gallery/suko" passHref>
                <span className="dropdown-items">
                  Suko Wedding at Firebrand cocalala
                </span>
              </Link>
              <Link href="/gallery/trezzi" passHref>
                <span className="dropdown-items">
                  Knox wedding at Trezzi Farm Winery, WA
                </span>
              </Link>
              <Link href="/gallery/wabs" passHref>
                <span className="dropdown-items">The Wabs Wedding Idaho</span>
              </Link>
              <Link href="/gallery/webster" passHref>
                <span className="dropdown-items">
                  Webster wedding at The Mountain Sky Guest Ranch, MO
                </span>
              </Link>
              <Link href="/gallery/wright" passHref>
                <span className="dropdown-items">
                  Wright wedding at Idaho Shakespeare Festival Park, Boise
                </span>
              </Link>
              <Link href="/gallery/misc" passHref>
                <span className="dropdown-items">
                  Miscellaneous smaller weddings
                </span>
              </Link>
              {/* Add links to other gallery subpages here */}
            </div>
          )}
          <Link href="/pricing" passHref>
            <div
              className={`nav-link ${
                pathname === "/pricing" ? "active-link" : ""
              }`}
            >
              Pricing
            </div>
          </Link>
          <Link href="/about" passHref>
            <div
              className={`nav-link ${
                pathname === "/about" ? "active-link" : ""
              }`}
            >
              About Us
            </div>
          </Link>

          <Link href="/contact" passHref>
            <div
              className={`nav-link ${
                pathname === "/contact" ? "active-link" : ""
              }`}
            >
              Contact Us
            </div>
          </Link>
          <Link href="/faqs" passHref>
            <div
              className={`nav-link ${
                pathname === "/faqs" ? "active-link" : ""
              }`}
            >
              Q&A
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
