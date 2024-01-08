"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ReviewsCarousel from "../components/carousel";
import AboutUs from "../components/aboutUs";

export default function About() {
  return (
    <>
      <Header />
      <AboutUs />
      <div className="title-container">
        <h1 className="title">Reviews</h1>
        <img
          src="/img/flower-PhotoRoom.webp"
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
      <Footer />
    </>
  );
}
