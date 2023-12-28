"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faBox,
  faDollarSign,
  faEnvelopeOpenText,
  faBars,
  faTimes,
  faHome,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareInstagram,
  faSquareFacebook,
  faYelp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

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
            <FontAwesomeIcon icon={faSquareInstagram} className="h-6 w-6" />
          </a>
          <a
            href="https://www.facebook.com/florasweddings"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faSquareFacebook} className="h-6 w-6" />
          </a>
          <a
            href="https://www.yelp.com/biz/florasweddings"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faYelp} className="h-6 w-6" />
          </a>
          <a
            href="https://www.google.com/search?q=florasweddings"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faGoogle} className="h-6 w-6" />
          </a>
        </div>

        {/* Image */}
        <div className="flex -mt-5 -mb-12">
          <Link href="#main" passHref>
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
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 mt-2" />
        </button>

        {/* Side-opening menu for small screens */}
        <div
          className={`fixed top-0 left-0 h-screen w-3/8 z-50 transform ${
            isNavbarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col p-4 md:hidden`}
          style={{ backgroundColor: `rgba(var(--color-primary), 0.8)` }}
        >
          <button className="navbar-close text-right" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
          </button>
          <Link href="#main" passHref>
            <div className="nav-link mt-2 mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faHome}
                className="h-6 w-6 inline-block mr-2"
              />
              Home
            </div>
          </Link>
          <Link href="#gallery" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faImages}
                className="h-6 w-6 inline-block mr-2"
              />
              Gallery
            </div>
          </Link>
          <Link href="#services" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faTaxi}
                className="h-6 w-6 inline-block mr-2"
              />
              Services
            </div>
          </Link>
          <Link href="#packages" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faBox}
                className="h-6 w-6 inline-block mr-2"
              />
              Packages
            </div>
          </Link>
          <Link href="#pricing" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faDollarSign}
                className="h-6 w-6 inline-block mr-2"
              />
              Pricing
            </div>
          </Link>
          <Link href="mailto:contact@florasweddings.com" passHref>
            <div className="nav-link mb-2" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="h-6 w-6 inline-block mr-2"
              />
              Contact Us
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-row justify-center space-x-4 flex-wrap">
          <Link href="#main" passHref>
            <div className="nav-link" onClick={toggleNavbar}>
              <FontAwesomeIcon
                icon={faHome}
                className="h-6 w-6 inline-block mr-2"
              />
              Home
            </div>
          </Link>
          <Link href="#gallery" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faImages}
                className="h-6 w-6 inline-block mr-2"
              />
              Gallery
            </div>
          </Link>
          <Link href="#services" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faTaxi}
                className="h-6 w-6 inline-block mr-2"
              />
              Services
            </div>
          </Link>
          <Link href="#packages" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faBox}
                className="h-6 w-6 inline-block mr-2"
              />
              Packages
            </div>
          </Link>
          <Link href="#pricing" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="h-6 w-6 inline-block mr-2"
              />
              Pricing
            </div>
          </Link>
          <Link href="mailto:contact@florasweddings.com" passHref>
            <div className="nav-link">
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="h-6 w-6 inline-block mr-2"
              />
              Contact Us
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
