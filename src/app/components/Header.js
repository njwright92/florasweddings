"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faEnvelopeOpenText,
  faBars,
  faTimes,
  faHome,
  faQuestionCircle,
  faUser,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareInstagram,
  faSquareFacebook,
  faYelp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const handleOutsideClick = (e) => {
    // Close dropdown if click is outside the dropdown menu
    if (!e.target.closest(".dropdown-menu")) {
      setShowServicesDropdown(false);
    }
  };

  useEffect(() => {
    if (showServicesDropdown) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showServicesDropdown]);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="header flex-col">
      {/* Header - Image Row with Social Links */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
        {/* Social Links */}
        <div className="flex gap-2 mt-2 md:mr-20">
          <a
            href="https://www.instagram.com/florasweddings"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faSquareInstagram} className="fa-xl" />
          </a>
          <a
            href="https://www.facebook.com/florasweddings"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faSquareFacebook} className="fa-xl" />
          </a>
          <a
            href="https://www.yelp.com/biz/florasweddings"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faYelp} className="fa-xl" />
          </a>
          <a
            href="https://www.google.com/search?q=florasweddings"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faGoogle} className="fa-xl" />
          </a>
        </div>

        {/* Image */}
        <div className="flex -mt-5 -mb-12">
          <Link href="/" passHref>
            <img
              src="/floras-Flowers.png"
              alt="Floras Flowers"
              className="cursor-pointer"
              height="auto"
              width={300}
            />
          </Link>
        </div>

        {/* Email and Phone Links */}
        <div className="flex flex-col md:ml-20">
          <p className="text-white">Email or call me now at:</p>
          <a href="mailto:stacimw@yahoo.com" className="nav-link">
            stacimw@yahoo.com
          </a>
          <a href="tel:+12087559409" className="nav-link">
            (208)-755-9409
          </a>
        </div>
      </div>

      {/* Navbar Row */}
      <nav className="relative">
        {/* Navbar toggler for small screens */}
        <button
          className={`navbar-toggler ${
            isNavbarOpen ? "hidden" : "block"
          } md:hidden`}
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon icon={faBars} className="h-5 w-5 mt-2" />
        </button>

        {/* Side-opening menu for small screens */}
        <div
          className={`fixed top-0 left-0 h-screen w-3/8 z-50 transform ${
            isNavbarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col p-4 md:hidden`}
          style={{ backgroundColor: `rgba(var(--color-primary), 0.8)` }}
        >
          <button className="navbar-close text-right" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
          </button>
          <Link href="#main" passHref>
            <div className="nav-link mt-2 mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faHome}
                className="h-5 w-5 inline-block mr-2"
              />
              Home
            </div>
          </Link>
          <Link href="#gallery" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faImages}
                className="h-5 w-5 inline-block mr-2"
              />
              Gallery
            </div>
          </Link>
          <Link href="#services" passHref>
            <div
              className="nav-link mb-2"
              onClick={toggleNavbar}
              onMouseEnter={() => setShowServicesDropdown(true)}
            >
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="h-5 w-5 inline-block mr-2"
              />
              Events & Occasions
            </div>
          </Link>
          {showServicesDropdown && (
            <div className="sidebar-dropdown">
              <Link href="#weddings" passHref>
                <span className="dropdown-items"> Weddings</span>
              </Link>
              <Link href="#private-parties" passHref>
                <span className="dropdown-items"> Private Parties </span>
              </Link>
              <Link href="#business-parties" passHref>
                <span className="dropdown-items"> Business Parties </span>
              </Link>
              <Link href="#funerals" passHref>
                <span className="dropdown-items"> Funerals </span>
              </Link>
            </div>
          )}
          <Link href="#packages" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faUser}
                className="h-5 w-5 inline-block mr-2"
              />
              About US
            </div>
          </Link>
          <Link href="#pricing" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="h-5 w-5 inline-block mr-2"
              />
              FAQs
            </div>
          </Link>
          <Link href="#contact" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="h-5 w-5 inline-block mr-2"
              />
              Contact Us
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-row justify-center space-x-4 flex-wrap">
          <Link href="/" passHref>
            <div className="nav-link" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faHome}
                className="h-5 w-5 inline-block mr-2"
              />
              Home
            </div>
          </Link>
          <Link href="#gallery" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faImages}
                className="h-5 w-5 inline-block mr-2"
              />
              Gallery
            </div>
          </Link>
          <Link href="#services" passHref>
            <div
              className="nav-link mb-2"
              onClick={toggleNavbar}
              onMouseEnter={() => setShowServicesDropdown(true)}
            >
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="h-5 w-5 inline-block mr-2"
              />
              Events & Occasions
            </div>
          </Link>
          {showServicesDropdown && (
            <div className="dropdown-menu">
              <Link href="/events/weddings" passHref>
                <span className="dropdown-items"> Weddings</span>
              </Link>
              <Link href="#private-parties" passHref>
                <span className="dropdown-items"> Private Parties </span>
              </Link>
              <Link href="#business-parties" passHref>
                <span className="dropdown-items"> Business Parties </span>
              </Link>
              <Link href="#funerals" passHref>
                <span className="dropdown-items"> Funerals </span>
              </Link>
            </div>
          )}

          <Link href="#packages" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faUser}
                className="h-5 w-5 inline-block mr-2"
              />
              About Us
            </div>
          </Link>
          <Link href="#pricing" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="h-5 w-5 inline-block mr-2"
              />
              FAQs
            </div>
          </Link>
          <Link href="#contact" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="h-5 w-5 inline-block mr-2"
              />
              Contact Us
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
