"use client";

import { useEffect } from "react";
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

  return (
    <main className="main" id="main">
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
          <button href="/contact" className="button">
            Contact Us
          </button>
        </div>
      </div>
      <>
        <section className="section" id="gallery" data-aos="fade-up">
          <div className="title-container">
            <h2 className="title">Gallery</h2>
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
