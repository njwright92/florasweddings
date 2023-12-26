"use client";

import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="main" id="main">
      <Header />
      <h1 className="title mb-8">Floras Weddings</h1>
      <p className="subtitle mb-12">
        Elegant Floral Designs for Your Special Day
      </p>
      <section className="section" id="gallery" data-aos="fade-up">
        <h2 className="subtitle">Gallery</h2>
        <p className="body-text">
          Discover our collection of elegant floral designs.
        </p>
        {/* Placeholder image */}
        <div className="image-placeholder"></div>
      </section>

      <section className="section" id="services" data-aos="fade-up">
        <h2 className="subtitle">Services</h2>
        <p className="body-text">
          Tailored floral arrangements for all your special occasions.
        </p>
        {/* Placeholder image */}
        <div className="image-placeholder"></div>
      </section>

      <section className="section" id="packages" data-aos="fade-up">
        <h2 className="subtitle">Packages</h2>
        <p className="body-text">
          Explore our variety of wedding and event floral packages.
        </p>
        {/* Placeholder image */}
        <div className="image-placeholder"></div>
      </section>

      <section className="section" id="pricing" data-aos="fade-up">
        <h2 className="subtitle">Pricing</h2>
        <p className="body-text">
          Find the perfect floral arrangement within your budget.
        </p>
        {/* Placeholder image */}
        <div className="image-placeholder"></div>
      </section>

      <section className="section" id="contact" data-aos="fade-up">
        <h2 className="subtitle">Contact Us</h2>
        <p className="body-text">
          Get in touch for bespoke floral designs and consultations.
        </p>
        {/* Placeholder image */}
        <div className="image-placeholder"></div>
      </section>

      <Footer />
    </main>
  );
}
