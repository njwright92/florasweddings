"use client";

import { useEffect } from "react";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Collage from "./components/collage";
import ReviewsCarousel from "./components/carousel";
import GalleryLinks from "./components/galleryLinks";
import PricingGuide from "./components/pricingGuide";
import ConsultationForm from "./components/consultationForm";
import AboutUs from "./components/aboutUs";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Florist",
    name: "Flora's Weddings",
    description:
      "Local florist specializing in beautiful, unique wedding florals. Catering to all your wedding flower needs.",
    telephone: "208-755-9409",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rathdrum",
      addressRegion: "ID",
      postalCode: "83858",
      addressCountry: "USA",
    },

    areaServed: [
      {
        "@type": "Place",
        name: "Kootenai County",
      },
      {
        "@type": "Place",
        name: "Surrounding areas",
      },
    ],
  };

  return (
    <main className="main" id="main">
      <script
        key="businessJsonLd"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Header />
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src="./img/banner2.webp"
          alt="Floras Weddings Banner"
          className="banner-img"
          load="eager"
        />
        <div className="image-overlay">
          <h4 className="img-title">
            Seeking a signature style? Let me create your exclusive look.
          </h4>
          <Link href="/contact" passHref>
            <button className="button" aria-label="Contact Us">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <>
        <section className="section" id="gallery" data-aos="fade-up">
          <div className="title-container">
            <h2 className="title">Weddings</h2>
            <img
              src="./img/flower-PhotoRoom.webp"
              width={200}
              height={100}
              loading="lazy"
              alt="Flower"
              className="-mt-20"
            />
          </div>
          <GalleryLinks />
        </section>

        <section className="section" id="pricing" data-aos="fade-up">
          <PricingGuide />
        </section>

        <section className="section" id="about" data-aos="fade-up">
          <AboutUs />
        </section>

        <section className="section" id="contact" data-aos="fade-up">
          <ConsultationForm />
        </section>

        <section className="section" id="Reviews" data-aos="fade-up">
          <div className="title-container">
            <h2 className="title">Reviews</h2>
            <img
              src="./img/flower-PhotoRoom.webp"
              width={200}
              height={100}
              loading="lazy"
              alt="Flower"
              className="-mt-20"
            />
          </div>
          <p className="subtitle">
            My clients have left positive reviews on yelp and google!
          </p>
          <ReviewsCarousel />
        </section>
        <section className="section" id="collage" data-aos="fade-up">
          <Collage />
        </section>
        <Footer />
      </>
    </main>
  );
}
