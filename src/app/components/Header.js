"use client";

import { useState } from "react";
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
      <button className="home-button">
        <HomeIcon className="h-6 w-6" />
        Home
      </button>
      <button className="navbar-toggler" onClick={toggleNavbar}>
        <Bars4Icon className="h-6 w-6" />
      </button>
      <nav className={`navbar ${isNavbarOpen ? "navbar-open" : ""}`}>
        <button className="navbar-close" onClick={toggleNavbar}>
          <XMarkIcon className="h-6 w-6" />
        </button>
        <a href="/gallery" className="nav-link">
          <PhotoIcon className="h-5 w-5 inline-block nav-link" />
          Gallery
        </a>
        <a href="/services" className="nav-link">
          <CogIcon className="h-5 w-5 inline-block nav-link" />
          Services
        </a>
        <a href="/packages" className="nav-link">
          <TagIcon className="h-5 w-5 inline-block nav-link" />
          Packages
        </a>
        <a href="/pricing" className="nav-link">
          <CurrencyDollarIcon className="h-5 w-5 inline-block nav-link" />
          Pricing
        </a>
        <a href="mailto:contact@florasweddings.com" className="nav-link">
          <EnvelopeIcon className="h-5 w-5 inline-block nav-link" />
          Contact Us
        </a>
      </nav>
    </header>
  );
}
