"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Collage from "./components/collage";
import ReviewsCarousel from "./components/carousel";
import GalleryLinks from "./components/galleryLinks";
import PricingGuide from "./components/pricingGuide";
import ConsultationForm from "./components/consultationForm";
import AboutUs from "./components/aboutUs";

const BUSINESS_DATA = {
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

const Section = ({ id, children }) => (
  <section className="section" id={id} data-aos="fade-up">
    {children}
  </section>
);

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main className="main" id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_DATA) }}
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

      <Section id="gallery">
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
      </Section>

      <Section id="pricing">
        <PricingGuide />
      </Section>

      <Section id="about">
        <AboutUs />
      </Section>

      <Section id="contact">
        <ConsultationForm />
      </Section>

      <Section id="reviews">
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
      </Section>

      <Section id="collage">
        <Collage />
      </Section>

      <Footer />
    </main>
  );
}
