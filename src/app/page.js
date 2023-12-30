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
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src="/img/banner.webp"
          alt="Floras Weddings Banner"
          className="banner-img"
        />
        <div className="image-overlay">
          <h4 className="title">
            Seeking a signature style? Let me create your exclusive look.
          </h4>
          <button href="/contact" className="button">
            Contact Us
          </button>
        </div>
      </div>

      <h1 className="title">Floras Flowers</h1>
      <h3 className="subtitle">Welcome to my weddings site</h3>

      <section className="section" id="gallery" data-aos="fade-up">
        <h2 className="subtitle">Gallery</h2>
        <p className="body-text">
          Discover our collection of elegant floral designs.
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

      <section className="section" id="Reviews" data-aos="fade-up">
        <h2 className="subtitle">Reviews</h2>
        <p className="body-text">
          My clients have left positive reviews on google!
        </p>
        {/* Placeholder image */}
        <div className="image-placeholder"></div>
      </section>

      <Footer />
    </main>
  );
}
