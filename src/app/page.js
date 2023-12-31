"use client";

import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
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
          <h4 className="img-title">
            Seeking a signature style? Let me create your exclusive look.
          </h4>
          <button href="/contact" className="button">
            Contact Us
          </button>
        </div>
      </div>

      <div className="title-container">
        <h1 className="title">Floras Flowers</h1>
        <img
          src="./img/flower-PhotoRoom.webp"
          width={200}
          height={100}
          loading="lazy"
          alt="Flower"
          className="-mt-20"
        />
      </div>
      <h3 className="subtitle">Welcome to my weddings site</h3>

      <>
        <section className="section" id="gallery" data-aos="fade-up">
          <div className="title-container">
            <h2 className="subtitle">Gallery</h2>
            <img
              src="./img/flower-PhotoRoom.webp"
              width={200}
              height={100}
              loading="lazy"
              alt="Flower"
              className="-mt-20"
            />
          </div>
          <p className="body-text">
            Discover our collection of elegant floral designs.
          </p>
          {/* Placeholder image */}
          <div className="image-placeholder"></div>
        </section>

        <section className="section" id="pricing" data-aos="fade-up">
          <div className="pricing-container">
            <div className="title-container">
              <h3 className="title">Full Service Floral Guide</h3>
              <img
                src="./img/flower-PhotoRoom.webp"
                width={200}
                height={100}
                loading="lazy"
                alt="Flower"
                className="-mt-20"
              />
            </div>
            <p className="body-text mb-4">
              Here are some initial prices to consider while planning your
              wedding florals
            </p>
            <div className="grid1">
              <div className="pricing-column">
                <h4 className="subtitle">Ceremony</h4>
                <hr className="mb-4 horizontal-line" />
                <ul className="pricing-list">
                  <li>Statement Piece - $175</li>
                  <li>Pew Decor - $25</li>
                  <li>Arch/Arbour - $250</li>
                  <li>Garland (per foot) - $15/ft</li>
                </ul>
              </div>
              <div className="pricing-column">
                <h4 className="subtitle">Reception</h4>
                <hr className="mb-4 horizontal-line" />
                <ul className="pricing-list">
                  <li>Centerpiece - $55</li>
                  <li>Full Table Design - $125</li>
                  <li>Cocktail Florals - $25</li>
                  <li>Pillar Arrangements - $175</li>
                  <li>Floor Head Table - $250</li>
                </ul>
              </div>
              <div className="pricing-column">
                <h4 className="subtitle">Bridal Party</h4>
                <hr className="mb-4 horizontal-line" />
                <ul className="pricing-list">
                  <li>Bridal Bouquet - $155</li>
                  <li>Bridesmaid Bouquet - $75</li>
                  <li>Boutonniere - $20</li>
                  <li>Corsage - $25</li>
                  <li>Flower Girl Petals - $20</li>
                  <li>Hair Combs - $35</li>
                  <li>Floral Crowns - $55</li>
                </ul>
              </div>
            </div>
            <p className="body-text mt-4">
              Note: Prices will vary due to your final designs and types of
              blooms.
            </p>
          </div>
        </section>

        <section className="section" id="about" data-aos="fade-up">
          <>
            <div className="title-container">
              <h1 className="title">About Flora&apos;s Flowers</h1>
              <img
                src="./img/flower-PhotoRoom.webp"
                width={200}
                height={100}
                loading="lazy"
                alt="Flower"
                className="-mt-20"
              />
            </div>
            <h3 className="subtitle text-center">
              Hello there! I&apos;m Staci, the creative force behind
              Flora&apos;s Flowers.
            </h3>

            <div className="flex flex-col md:flex-row items-center">
              <img
                src="/img/staci.webp"
                alt="Staci"
                className="rounded-full m-2"
              />
              <h4 className="subtitle">Staci Huffman</h4>
              <p className="body-text">
                With 30 years of experience in the floral industry, I&apos;m a
                formally trained professional floral designer known for crafting
                original arrangements with an artistic flair!
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="body-text ml-2">
                  Serving Rathdrum, Coeur d&apos;Alene, Post Falls, &
                  Surrounding Areas.
                </h3>
                <p className="text-black m-2 p-2 text-left">
                  <span className="icon-text">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="custom-button"
                    />
                    <span>Rathdrum, ID</span>
                  </span>
                  <br />
                  <span className="icon-text">
                    <FontAwesomeIcon icon={faPhone} className="custom-button" />
                    <span>(208) 755-9409</span>
                  </span>
                  <br />
                  <span className="icon-text">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="custom-button"
                    />
                    <span>stacimw@yahoo.com</span>
                  </span>
                </p>
              </div>
              <div>
                <h3 className="body-text text-right">Hours of Operation</h3>
                <p className="text-black text-right m-2 p-2">
                  Monday: 9 AM - 5 PM
                  <br />
                  Tuesday: 9 AM - 5 PM
                  <br />
                  Wednesday: 9 AM - 5 PM
                  <br />
                  Thursday: 9 AM - 5 PM
                  <br />
                  Friday: 9 AM - 4 PM
                  <br />
                  Saturday: 9 AM - 12 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <br />
            <br />
            <p className="body-text p-2">
              {" "}
              With a passion for floral design cultivated at JJ Neville&apos;s
              School of Floral Design in Vancouver, Canada, I&apos;ve embarked
              on a journey to bring the beauty of flowers to Rathdrum, Idaho.
              Inspired by my family&apos;s rich history, I&apos;ve named my shop
              after my Grandpa Flora, a talented artist who left a mark on the
              world. My mom, Peggy, owned a flower shop in Rathdrum and
              encouraged me to become a florist. I started my education in her
              flower shop at the age of 16 before I ventured off to design
              school.
              <br />
              <br />
              As a stay-at-home mom turned floral artist, I&apos;m thrilled to
              offer you a full-service flower shop experience right from my home
              studio in Rathdrum. Delight in the elegance of locally sourced
              blooms from Idaho growers and Spokane&apos;s wholesale markets.
              Whether it&apos;s weddings, events or any special occasion, let
              Flora&apos;s Flowers add a touch of floral magic.
              <br />
              <br />
              Enjoy the convenience of deliveries to Rathdrum and surrounding
              areas. Your support means the world to me, and I can&apos;t wait
              to bring a burst of beauty into your life.
              <br />
              Thank you for considering Flora&apos;s Flowers for your next
              floral moment!
            </p>
            <br />
            <br />

            <img
              src="/img/map.webp"
              alt="Map"
              className="w-full my-4 h-auto border-white border-2 rounded-xl"
            />
          </>
        </section>

        <section className="section" id="contact" data-aos="fade-up">
          <>
            <div className="title-container">
              <h1 className="title">Contact Us for a Consultation</h1>
              <img
                src="./img/flower-PhotoRoom.webp"
                width={200}
                height={100}
                loading="lazy"
                alt="Flower"
                className="-mt-20"
              />
            </div>
            <p className="body-text p-2">
              At Flora&#39;s, we specialize in personalizing your wedding
              flowers. We believe the flowers for your wedding should be as
              unique as each individual. I like to personally go over each
              detail of your wedding and create a realistic and individualized
              quote for every budget. Between your inspiration board, our
              creativity, and our knowledge of flowers, you&#39;ll have the
              wedding flowers of your dreams!
            </p>
            <div className="md:flex md:flex-row md:justify-between horizontal-line">
              <form className="form p-8 mb-6 md:w-1/2">
                <h3 className="subtitle mb-2">
                  Create Your Dream Wedding with Custom Floral Designs!
                </h3>
                <hr className="mb-4" />
                <div className="mb-4 md:flex">
                  <div className="md:mr-2 mb-4 md:mb-0">
                    <label className="label" htmlFor="firstName">
                      Bride's Name
                    </label>
                    <input
                      className="shadow border rounded py-2 px-3 text-gray-700"
                      id="firstName"
                      type="text"
                      placeholder="Bride"
                      required
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="label" htmlFor="groomName">
                      Groom's Name
                    </label>
                    <input
                      className="shadow border rounded py-2 px-3 text-gray-700"
                      id="groomName"
                      type="text"
                      placeholder="Groom"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="label" htmlFor="plannerName">
                    Planner's Name
                  </label>
                  <input
                    className="shadow border rounded py-2 px-3 text-gray-700"
                    id="plannerName"
                    type="text"
                    placeholder="Planner"
                  />
                </div>

                <div className="mb-4 md:flex">
                  <div className="md:mr-2 mb-4 md:mb-0">
                    <label className="label" htmlFor="email">
                      Bride's Email
                    </label>
                    <input
                      className="shadow border rounded w-full py-2 px-3 text-gray-700"
                      id="email"
                      type="email"
                      placeholder="email@.com"
                      required
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="label" htmlFor="email1">
                      Planner Email
                    </label>
                    <input
                      className="shadow border rounded w-full py-2 px-3 text-gray-700"
                      id="email1"
                      type="email"
                      placeholder="email@.com"
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex">
                  <div className="md:mr-2 mb-4 md:mb-0">
                    <label className="label" htmlFor="phone">
                      Bride's Phone
                    </label>
                    <input
                      className="shadow border rounded w-full py-2 px-3 text-gray-700"
                      id="phone"
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="###-###-####"
                      required
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="label" htmlFor="phone1">
                      Planner Phone
                    </label>
                    <input
                      className="shadow border rounded w-full py-2 px-3 text-gray-700"
                      id="phone1"
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="###-###-####"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="label" htmlFor="venue">
                    Venue
                  </label>
                  <input
                    className="shadow border rounded max-w-md py-2 px-3 text-gray-700"
                    id="venue"
                    type="text"
                    placeholder="Venue Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="label" htmlFor="venue1">
                    Reception Venue (if different)
                  </label>
                  <input
                    className="shadow border rounded max-w-md py-2 px-3 text-gray-700"
                    id="venue1"
                    type="text"
                    placeholder="Venue Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="label" htmlFor="date">
                    Date of Event
                  </label>
                  <input
                    className="shadow border rounded max-w-md py-2 px-3 text-gray-700"
                    id="date"
                    type="date"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="label" htmlFor="Budget">
                    What is your floral budget?
                  </label>
                  <textarea
                    className="shadow border rounded md:w-full py-3 px-3 text-gray-700"
                    id="Budget"
                    type="number"
                    required
                    placeholder="2500"
                    rows={2}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="label" htmlFor="preferredStyle">
                    Which best describes your preferred style?
                  </label>
                  <div className="flex flex-col max-w-md">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="style"
                        value="modern"
                        id="modern"
                      />
                      <span className="ml-2 text-gray-700">Modern</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="style"
                        value="garden"
                        id="garden"
                      />
                      <span className="ml-2 text-gray-700">Garden</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="style"
                        value="classic"
                        id="classic"
                      />
                      <span className="ml-2 text-gray-700">Classic</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="style"
                        value="fairytale"
                        id="fairytale"
                      />
                      <span className="ml-2 text-gray-700">Fairytale</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="style"
                        value="wildflower"
                        id="wildflower"
                      />
                      <span className="ml-2 text-gray-700">Wildflower</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="style"
                        value="sophisticated"
                        id="sophisticated"
                      />
                      <span className="ml-2 text-gray-700">Sophisticated</span>
                    </label>
                  </div>
                  <p className="secondary-label text-gray-700">
                    Please check all that apply.
                  </p>
                </div>

                <div className="mb-4">
                  <label className="label" htmlFor="additionalInfo">
                    Additional Information
                  </label>
                  <textarea
                    className="shadow border rounded md:w-full py-3 px-3 text-gray-700"
                    id="additionalInfo"
                    required
                    placeholder="Any addition details you want me to know!"
                    rows={4}
                  ></textarea>
                </div>

                <div className="flex justify-end ">
                  <button className="button" type="submit">
                    Submit
                  </button>
                </div>
              </form>
              <div className="form-container md:w-1/2">
                <form className="form p-8 mb-6">
                  <h3 className="subtitle text-center mb-2">
                    Tell Us What You Need
                  </h3>
                  <hr className="mb-4" />
                  <div className="mb-4">
                    <label className="label" htmlFor="bridal_bouquets">
                      Bridal Bouquets
                    </label>
                    <input
                      className="shadow border rounded py-2 px-3 text-gray-700"
                      id="bridal_bouquets"
                      type="text"
                      placeholder="Bridal Bouquets"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="label" htmlFor="bridesmaids_bouquets">
                      Bridesmaids Bouquets
                    </label>
                    <input
                      className="shadow border rounded py-2 px-3 text-gray-700"
                      id="bridesmaids_bouquets"
                      type="text"
                      placeholder="Bridesmaids Bouquets"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="label" htmlFor="boutonnieres">
                      Boutonnieres
                    </label>
                    <input
                      className="shadow border rounded py-2 px-3 text-gray-700"
                      id="boutonnieres"
                      type="text"
                      placeholder="Boutonnieres"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="label" htmlFor="centerpiecesNeeded">
                      Centerpieces Needed
                    </label>
                    <input
                      className="shadow border rounded w-full py-2 px-3 text-gray-700"
                      id="centerpiecesNeeded"
                      type="number"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="label" htmlFor="colorPalette">
                      Color Palette
                    </label>
                    <input
                      className="shadow border rounded w-full py-2 px-3 text-gray-700"
                      id="colorPalette"
                      type="text"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="label" htmlFor="additionalNeeds">
                      Additional Needs
                    </label>
                    <textarea
                      className="shadow border rounded w-full py-3 px-3 text-gray-700"
                      id="additionalNeeds"
                      rows="4"
                      placeholder="Installations, Design Concepts, or anything else we need to know!"
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button className="button" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        </section>

        <section className="section" id="Reviews" data-aos="fade-up">
          <div className="title-container">
            <h2 className="subtitle">Reviews</h2>
            <img
              src="./img/flower-PhotoRoom.webp"
              width={200}
              height={100}
              loading="lazy"
              alt="Flower"
              className="-mt-20"
            />
          </div>
          <p className="body-text">
            My clients have left positive reviews on google!
          </p>
          {/* Placeholder image */}
          <div className="image-placeholder"></div>
        </section>
      </>

      <Footer />
    </main>
  );
}
