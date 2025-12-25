"use client";

import { useState, useEffect, useRef } from "react";
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
import Image from "next/image";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowGalleryDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsNavbarOpen(false);
    setShowGalleryDropdown(false);
  }, [pathname]);

  return (
    <header className="header flex-col">
      <div className="flex flex-col items-center md:flex-row">
        {/* Logo and Socials Container */}
        <div className="flex flex-row items-center gap-1">
          <Link href="/" className="relative block">
            {/* Added explicit container styling to prevent jump */}
            <div className="relative -mb-4 -mt-4 h-[100px] w-[200px] md:-mb-0 md:-mt-0 xl:-ml-10">
              <Image
                width={200}
                height={100}
                src="/img/logo.webp"
                alt="Floras Flowers"
                className="logo cursor-pointer object-contain"
                sizes="(max-width: 768px) 150px, 200px"
                priority
              />
            </div>
          </Link>

          <div className="flex gap-1 lg:ml-10">
            <Link
              href="https://www.instagram.com/floras_flowers4u/"
              className="footer-link custom-button flex h-8 w-8 items-center justify-center"
              aria-label="Visit our Instagram page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSquareInstagram} className="h-8 w-8" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.facebook.com/happytrailsfloral"
              className="footer-link custom-button flex h-8 w-8 items-center justify-center"
              aria-label="Visit our Facebook page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSquareFacebook} className="h-8 w-8" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.yelp.com/biz/floras-flowers-rathdrum?osq=floras+flowers"
              className="footer-link custom-button flex h-8 w-8 items-center justify-center"
              aria-label="Check out our reviews on Yelp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYelp} className="h-8 w-8" />
              <span className="sr-only">Yelp</span>
            </Link>
            <Link
              href="https://www.google.com/search?q=floras+weddings"
              className="footer-link custom-button flex h-8 w-8 items-center justify-center"
              aria-label="Find us on Google"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGoogle} className="h-8 w-8" />
              <span className="sr-only">Google</span>
            </Link>
          </div>
        </div>

        <div className="mt-2 flex flex-col text-center md:mt-0 lg:pl-10">
          <Link
            href="mailto:Florasproflowers@gmail.com"
            className="nav-link mb-2 text-center text-sm md:text-base"
          >
            Florasproflowers@gmail.com
          </Link>
          <Link
            href="tel:+12087559409"
            className="nav-link text-center text-sm md:text-base"
          >
            (208)-755-9409
          </Link>
        </div>
      </div>

      <nav className="relative mt-2 w-full">
        {/* Mobile Menu Button */}
        <button
          aria-label={isNavbarOpen ? "Close Menu" : "Open Menu"}
          className={`navbar-toggler ${
            isNavbarOpen ? "hidden" : "flex"
          } mx-auto items-center md:hidden`}
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon icon={faBars} className="mr-1 h-8 w-8" />
          <span className="justify-center pt-1">Menu</span>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed right-0 top-0 z-50 h-screen w-3/4 max-w-sm transform ${
            isNavbarOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col p-4 shadow-xl transition-transform duration-300 ease-in-out md:hidden`}
          style={{ backgroundColor: `rgba(var(--color-primary))` }}
        >
          <button
            className="navbar-close mb-4 text-right"
            aria-label="Close Menu"
            onClick={toggleNavbar}
          >
            <FontAwesomeIcon icon={faTimes} className="h-8 w-8" />
          </button>

          <Link
            href="/"
            className="nav-link mb-2 mt-2 block"
            onClick={toggleNavbar}
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className="nav-link mb-2 mt-2 block"
            onClick={toggleNavbar}
          >
            Weddings
          </Link>
          <Link
            href="/pricing"
            className="nav-link mb-2 mt-2 block"
            onClick={toggleNavbar}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="nav-link mb-2 mt-2 block"
            onClick={toggleNavbar}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="nav-link mb-2 mt-2 block"
            onClick={toggleNavbar}
          >
            Contact Us
          </Link>
          <Link
            href="/faqs"
            className="nav-link mb-2 mt-2 block"
            onClick={toggleNavbar}
          >
            Q&A
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden flex-row flex-wrap justify-center space-x-4 md:flex">
          <Link href="/">
            <div
              className={`nav-link ${pathname === "/" ? "active-link" : ""}`}
            >
              Home
            </div>
          </Link>

          <div
            className="group relative"
            ref={dropdownRef}
            onMouseEnter={() => setShowGalleryDropdown(true)}
            onMouseLeave={() => setShowGalleryDropdown(false)}
          >
            <Link href="/gallery">
              <div
                className={`nav-link ${
                  pathname.includes("/gallery") ? "active-link" : ""
                }`}
              >
                Weddings
              </div>
            </Link>

            {showGalleryDropdown && (
              <div className="dropdown-menu gallery-dropdown-menu">
                {/* List items remain the same... */}
                <Link href="/gallery/lumen">
                  <span className="dropdown-items">
                    Damschen Wedding at The Lumen Hall CDA
                  </span>
                </Link>
                <Link href="/gallery/butterfield">
                  <span className="dropdown-items">
                    Butterfield Wedding at The Willows CDA
                  </span>
                </Link>
                <Link href="/gallery/cataldo">
                  <span className="dropdown-items">
                    Country Barn Bed and Breakfast, Cataldo ID
                  </span>
                </Link>
                <Link href="/gallery/ditrich">
                  <span className="dropdown-items">
                    Ditrich Wedding in Athol, ID
                  </span>
                </Link>
                <Link href="/gallery/dretke">
                  <span className="dropdown-items">
                    The Dretke Wedding at Elkins Resort
                  </span>
                </Link>
                <Link href="/gallery/flores">
                  <span className="dropdown-items">
                    Flores Wedding on a Cruise Boat CDA
                  </span>
                </Link>
                <Link href="/gallery/hauser">
                  <span className="dropdown-items">
                    The Lee Wedding Private resdience Hauser, ID
                  </span>
                </Link>
                <Link href="/gallery/hirschel">
                  <span className="dropdown-items">
                    Hirschel Wedding at The Hagadone Event Center
                  </span>
                </Link>
                <Link href="/gallery/homestead">
                  <span className="dropdown-items">
                    Gundland Wedding at Homestead barn, Dover, ID
                  </span>
                </Link>
                <Link href="/gallery/hoyer">
                  <span className="dropdown-items">
                    Hoyer Wedding at Farm in Mica, Washington
                  </span>
                </Link>
                <Link href="/gallery/jewett">
                  <span className="dropdown-items">
                    Ross wedding at The Jewett House
                  </span>
                </Link>
                <Link href="/gallery/justin">
                  <span className="dropdown-items">
                    A Wright wedding in Rathdrum, ID
                  </span>
                </Link>
                <Link href="/gallery/knox">
                  <span className="dropdown-items">
                    Knox/Farley Wedding at the CDA Casino
                  </span>
                </Link>
                <Link href="/gallery/koho">
                  <span className="dropdown-items">
                    Koho Wedding at Firebrand Cocallala
                  </span>
                </Link>
                <Link href="/gallery/suko">
                  <span className="dropdown-items">
                    Suko Wedding at Firebrand cocalala
                  </span>
                </Link>
                <Link href="/gallery/trezzi">
                  <span className="dropdown-items">
                    Knox wedding at Trezzi Farm Winery, WA
                  </span>
                </Link>
                <Link href="/gallery/wabs">
                  <span className="dropdown-items">The Wabs Wedding Idaho</span>
                </Link>
                <Link href="/gallery/webster">
                  <span className="dropdown-items">
                    Webster wedding at The Mountain Sky Guest Ranch, MO
                  </span>
                </Link>
                <Link href="/gallery/wright">
                  <span className="dropdown-items">
                    Wright wedding at Idaho Shakespeare Festival Park, Boise
                  </span>
                </Link>
                <Link href="/gallery/misc">
                  <span className="dropdown-items">
                    Miscellaneous smaller weddings
                  </span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/pricing">
            <div
              className={`nav-link ${
                pathname === "/pricing" ? "active-link" : ""
              }`}
            >
              Pricing
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`nav-link ${
                pathname === "/about" ? "active-link" : ""
              }`}
            >
              About Us
            </div>
          </Link>
          <Link href="/contact">
            <div
              className={`nav-link ${
                pathname === "/contact" ? "active-link" : ""
              }`}
            >
              Contact Us
            </div>
          </Link>
          <Link href="/faqs">
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
