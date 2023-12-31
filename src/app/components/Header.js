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
  faAngleDown,
  faDollarSign,
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
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);

  const handleOutsideClick = (e) => {
    // Close services dropdown if click is outside the dropdown menu
    if (!e.target.closest(".services-dropdown-menu")) {
      setShowServicesDropdown(false);
    }
    // Close gallery dropdown if click is outside the dropdown menu
    if (!e.target.closest(".gallery-dropdown-menu")) {
      setShowGalleryDropdown(false);
    }
  };

  useEffect(() => {
    // Add event listener if either dropdown is visible
    if (showServicesDropdown || showGalleryDropdown) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showServicesDropdown, showGalleryDropdown]);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="header flex-col">
      {/* Header - Image Row with Social Links */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
        <div className="flex">
          <Link href="/" passHref>
            <img
              src="/img/logo.webp"
              alt="Floras Flowers"
              className="cursor-pointer logo"
              height="auto"
              width={400}
            />
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 mt-2 md:mr-20">
          <Link href="https://www.instagram.com/florasflower4u/" passHref>
            <div className="nav-link custom-button">
              <FontAwesomeIcon icon={faSquareInstagram} className="fa-xl" />
            </div>
          </Link>
          <Link href="https://www.facebook.com/happytrailsfloral" passHref>
            <div className="nav-link custom-button">
              <FontAwesomeIcon icon={faSquareFacebook} className="fa-xl" />
            </div>
          </Link>
          <Link
            href="https://www.yelp.com/biz/floras-flowers-rathdrum?osq=floras+flowers"
            passHref
          >
            <div className="nav-link custom-button">
              <FontAwesomeIcon icon={faYelp} className="fa-xl" />
            </div>
          </Link>
          <Link
            href="https://www.google.com/search?q=floras+flowers&oq=floras+flowers&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIPCAEQLhgKGK8BGMcBGIAEMgYIAhBFGEAyDwgDEC4YChivARjHARiABDIMCAQQABgKGA8YFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINTA1N2owajSoAgCwAgA&sourceid=chrome&ie=UTF-8"
            passHref
          >
            <div className="nav-link custom-button">
              <FontAwesomeIcon icon={faGoogle} className="fa-xl" />
            </div>
          </Link>
        </div>

        {/* Image */}

        {/* Email and Phone Links */}
        <div className="flex flex-col md:ml-20">
          <p className="body-text">Email or call me now at:</p>
          <a href="mailto:stacimw@yahoo.com" className="nav-link">
            florasproflowers@gmail.com
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
          <FontAwesomeIcon icon={faBars} className="h-5 w-5 mt-2" /> Menu
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
          <Link href="/" passHref>
            <div className="nav-link mt-2 mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faHome}
                className="h-5 w-5 inline-block mr-2"
              />
              Home
            </div>
          </Link>
          <Link href="/gallery" passHref>
            <div className="nav-link mt-2 mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faImages}
                className="h-5 w-5 inline-block mr-2"
              />
              Galleries
            </div>
          </Link>
          <Link href="/pricing" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faDollarSign}
                className="h-5 w-5 inline-block mr-2"
              />
              Pricing
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faUser}
                className="h-5 w-5 inline-block mr-2"
              />
              About US
            </div>
          </Link>

          <Link href="/contact" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="h-5 w-5 inline-block mr-2"
              />
              Contact Us
            </div>
          </Link>
          <Link href="/faqs" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="h-5 w-5 inline-block mr-2"
              />
              Q&A
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
          <Link href="/gallery" passHref>
            <div
              className="nav-link"
              onMouseEnter={() => setShowGalleryDropdown(!showGalleryDropdown)}
            >
              <FontAwesomeIcon
                icon={faImages}
                className="h-5 w-5 inline-block mr-2"
              />
              Galleries
              <FontAwesomeIcon icon={faAngleDown} className="fa-lg" />
            </div>
          </Link>
          {showGalleryDropdown && (
            <div className="dropdown-menu gallery-dropdown-menu">
              <Link href="/gallery/knox" passHref>
                <span className="dropdown-items">Knox/Farley Wedding</span>
              </Link>
              <Link href="/gallery/ditrich" passHref>
                <span className="dropdown-items">
                  Chelsey and Tim Ditrich Wedding
                </span>
              </Link>
              <Link href="/gallery/wabs" passHref>
                <span className="dropdown-items">The Wabs Wedding</span>
              </Link>
              {/* Add links to other gallery subpages here */}
            </div>
          )}
          <Link href="/pricing" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faDollarSign}
                className="h-5 w-5 inline-block mr-2"
              />
              Pricing
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faUser}
                className="h-5 w-5 inline-block mr-2"
              />
              About Us
            </div>
          </Link>

          <Link href="/contact" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="h-5 w-5 inline-block mr-2"
              />
              Contact Us
            </div>
          </Link>
          <Link href="/faqs" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="h-5 w-5 inline-block mr-2"
              />
              Q&A
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
