"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      delay: 50,
      easing: "ease-out-cubic",
    });
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
      { "@type": "Place", name: "Kootenai County" },
      { "@type": "Place", name: "Surrounding areas" },
    ],
  };

  return (
    <main className="main" id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Header />

      {/* Hero Banner */}
      <div className="relative w-full">
        <Image
          src="/img/justin/justin4.webp"
          alt="Floras Weddings Banner"
          className="banner-img"
          priority
          width={1920}
          height={1080}
          sizes="100vw"
          quality={85}
        />
        <div className="image-overlay">
          <h1 className="img-title">
            Seeking a signature style? Let me create your exclusive look.
          </h1>
          <Link href="/contact">
            <button className="button" aria-label="Contact Us">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="section" id="gallery" data-aos="fade-up">
        <div className="title-container">
          <h2 className="title">Weddings</h2>
          <Image
            src="/img/flower-PhotoRoom.webp"
            width={200}
            height={100}
            priority
            alt="Decorative flower"
            className="-mt-20"
          />
        </div>
        <GalleryLinks />
      </section>

      {/* Pricing Section */}
      <section className="section" id="pricing" data-aos="fade-up">
        <PricingGuide />
      </section>

      {/* About Section */}
      <section className="section" id="about" data-aos="fade-up">
        <AboutUs />
      </section>

      {/* Contact Section */}
      <section className="section" id="contact" data-aos="fade-up">
        <ConsultationForm />
      </section>

      {/* Reviews Section */}
      <section className="section" id="reviews" data-aos="fade-up">
        <div className="title-container">
          <h2 className="title">Reviews</h2>
          <Image
            src="/img/flower-PhotoRoom.webp"
            width={200}
            height={100}
            alt="Decorative flower"
            className="-mt-20"
          />
        </div>
        <p className="subtitle">
          My clients have left positive reviews on Yelp and Google!
        </p>
        <ReviewsCarousel />
      </section>

      {/* Collage Section */}
      <section className="section" id="collage" data-aos="fade-up">
        <Collage />
      </section>

      <Footer />
    </main>
  );
}
