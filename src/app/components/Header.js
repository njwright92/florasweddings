"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareInstagram,
  faSquareFacebook,
  faYelp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

// Move static data outside component to prevent recreation on each render
const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/floras_flowers4u/",
    icon: faSquareInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/happytrailsfloral",
    icon: faSquareFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.yelp.com/biz/floras-flowers-rathdrum?osq=floras+flowers",
    icon: faYelp,
    label: "Yelp",
  },
  {
    href: "https://www.google.com/search?q=floras+weddings",
    icon: faGoogle,
    label: "Google",
  },
];

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faqs", label: "Q&A" },
];

const GALLERY_ITEMS = [
  {
    href: "/gallery/butterfield",
    label: "Butterfield Wedding at The Willows CDA",
  },
  {
    href: "/gallery/cataldo",
    label: "Country Barn Bed and Breakfast, Cataldo ID",
  },
  { href: "/gallery/ditrich", label: "Ditrich Wedding in Athol, ID" },
  { href: "/gallery/dretke", label: "The Dretke Wedding at Elkins Resort" },
  { href: "/gallery/flores", label: "Flores Wedding on a Cruise Boat CDA" },
  {
    href: "/gallery/hauser",
    label: "The Lee Wedding Private resdience Hauser, ID",
  },
  {
    href: "/gallery/hirschel",
    label: "Hirschel Wedding at The Hagadone Event Center",
  },
  {
    href: "/gallery/homestead",
    label: "Gundland Wedding at Homestead barn, Dover, ID",
  },
  {
    href: "/gallery/hoyer",
    label: "Hoyer Wedding at Farm in Mica, Washington",
  },
  { href: "/gallery/jewett", label: "Ross wedding at The Jewett House" },
  { href: "/gallery/justin", label: "A Wright wedding in Rathdrum, ID" },
  { href: "/gallery/knox", label: "Knox/Farley Wedding at the CDA Casino" },
  { href: "/gallery/koho", label: "Koho Wedding at Firebrand Cocallala" },
  { href: "/gallery/lumen", label: "Damschen Wedding at The Lumen Hall CDA" },
  { href: "/gallery/suko", label: "Suko Wedding at Firebrand cocalala" },
  { href: "/gallery/trezzi", label: "Knox wedding at Trezzi Farm Winery, WA" },
  { href: "/gallery/wabs", label: "The Wabs Wedding Idaho" },
  {
    href: "/gallery/webster",
    label: "Webster wedding at The Mountain Sky Guest Ranch, MO",
  },
  {
    href: "/gallery/wright",
    label: "Wright wedding at Idaho Shakespeare Festival Park, Boise",
  },
  { href: "/gallery/misc", label: "Miscellaneous smaller weddings" },
];

// Memoized social link component
const SocialLink = memo(function SocialLink({ href, icon, label }) {
  return (
    <Link
      href={href}
      className="footer-link custom-button flex h-8 w-8 items-center justify-center"
      aria-label={`Visit our ${label} page`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={icon} className="h-8 w-8" />
      <span className="sr-only">{label}</span>
    </Link>
  );
});

// Memoized nav link component
const NavLink = memo(function NavLink({ href, label, onClick }) {
  return (
    <Link href={href} className="nav-link mt-2 mb-2 block" onClick={onClick}>
      {label}
    </Link>
  );
});

// Memoized desktop nav link
const DesktopNavLink = memo(function DesktopNavLink({ href, label, isActive }) {
  return (
    <Link href={href}>
      <div className={`nav-link ${isActive ? "active-link" : ""}`}>{label}</div>
    </Link>
  );
});

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const toggleNavbar = useCallback(() => {
    setIsNavbarOpen((prev) => !prev);
  }, []);

  const closeNavbar = useCallback(() => {
    setIsNavbarOpen(false);
  }, []);

  const openDropdown = useCallback(() => {
    setShowGalleryDropdown(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setShowGalleryDropdown(false);
  }, []);

  useEffect(() => {
    if (!showGalleryDropdown) return;

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowGalleryDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showGalleryDropdown]);

  useEffect(() => {
    setIsNavbarOpen(false);
    setShowGalleryDropdown(false);
  }, [pathname]);

  const isGalleryActive = pathname.includes("/gallery");

  return (
    <header className="header flex-col">
      <div className="flex flex-col items-center md:flex-row">
        {/* Logo and Socials Container */}
        <div className="flex flex-row items-center gap-1">
          <Link href="/" className="relative block">
            <div className="relative -mt-4 -mb-4 h-25 w-50 md:mt-0 md:mb-0 xl:-ml-10">
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
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <SocialLink key={label} href={href} icon={icon} label={label} />
            ))}
          </div>
        </div>

        <div className="mt-2 flex flex-col text-center md:mt-0 lg:pl-10">
          <a
            href="mailto:Florasproflowers@gmail.com"
            className="nav-link mb-2 text-center text-sm md:text-base"
          >
            Florasproflowers@gmail.com
          </a>
          <a
            href="tel:+12087559409"
            className="nav-link text-center text-sm md:text-base"
          >
            (208)-755-9409
          </a>
        </div>
      </div>

      <nav className="relative mt-2 w-full">
        {/* Mobile Menu Button */}
        <button
          aria-label={isNavbarOpen ? "Close Menu" : "Open Menu"}
          className={`navbar-toggler ${isNavbarOpen ? "hidden" : "flex"} mx-auto items-center md:hidden`}
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon icon={faBars} className="mr-1 h-8 w-8" />
          <span className="justify-center">Menu</span>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 right-0 z-50 h-screen w-3/4 max-w-sm transform ${
            isNavbarOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col p-4 shadow-xl transition-transform duration-300 ease-in-out md:hidden`}
          style={{ backgroundColor: "rgb(var(--color-primary))" }}
        >
          <button
            className="navbar-close mb-4 text-right"
            aria-label="Close Menu"
            onClick={closeNavbar}
          >
            <FontAwesomeIcon icon={faTimes} className="h-8 w-8" />
          </button>

          <NavLink href="/" label="Home" onClick={closeNavbar} />
          <NavLink href="/gallery" label="Weddings" onClick={closeNavbar} />
          {NAV_ITEMS.slice(1).map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              onClick={closeNavbar}
            />
          ))}
        </div>

        {/* Desktop Menu */}
        <div className="hidden flex-row flex-wrap justify-center space-x-4 md:flex">
          <DesktopNavLink href="/" label="Home" isActive={pathname === "/"} />

          <div
            className="group relative"
            ref={dropdownRef}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link href="/gallery">
              <div
                className={`nav-link ${isGalleryActive ? "active-link" : ""}`}
              >
                Weddings
              </div>
            </Link>

            {showGalleryDropdown && (
              <div className="dropdown-menu gallery-dropdown-menu">
                {GALLERY_ITEMS.map(({ href, label }) => (
                  <Link key={href} href={href}>
                    <span className="dropdown-items">{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_ITEMS.slice(1).map(({ href, label }) => (
            <DesktopNavLink
              key={href}
              href={href}
              label={label}
              isActive={pathname === href}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}
