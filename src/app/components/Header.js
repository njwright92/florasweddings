"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  PhotoIcon,
  TagIcon,
  CurrencyDollarIcon,
  Bars4Icon,
  CogIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="header">
      <Link href="#main" passHref>
        <button className="home-button">
          <HomeIcon className="h-6 w-6 inline-block mr-2" />
          Home
        </button>
      </Link>
      <button className="navbar-toggler" onClick={toggleNavbar}>
        <Bars4Icon className="h-6 w-6" />
      </button>
      <nav className={`navbar ${isNavbarOpen ? "navbar-open" : ""}`}>
        <button className="navbar-close" onClick={toggleNavbar}>
          <XMarkIcon className="h-6 w-6" />
        </button>
        <Link href="#gallery" passHref>
          <div className="nav-link" onClick={toggleNavbar}>
            <PhotoIcon className="h-6 w-6 inline-block mr-2" />
            Gallery
          </div>
        </Link>
        <Link href="#services" passHref>
          <div className="nav-link" onClick={toggleNavbar}>
            <CogIcon className="h-6 w-6 inline-block mr-2" />
            Services
          </div>
        </Link>
        <Link href="#packages" passHref>
          <div className="nav-link" onClick={toggleNavbar}>
            <TagIcon className="h-6 w-6 inline-block mr-2" />
            Packages
          </div>
        </Link>
        <Link href="#pricing" passHref>
          <div className="nav-link" onClick={toggleNavbar}>
            <CurrencyDollarIcon className="h-6 w-6 inline-block mr-2" />
            Pricing
          </div>
        </Link>
        <Link href="#contact" passHref>
          <div className="nav-link" onClick={toggleNavbar}>
            <EnvelopeIcon className="h-6 w-6 inline-block mr-2" />
            Contact Us
          </div>
        </Link>
      </nav>
    </header>
  );
}
