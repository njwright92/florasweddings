import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <Header />
      <h1 className="title">About Flora&apos;s Flowers</h1>
      <h3 className="subtitle text-center">
        Hello there! I&apos;m Staci, the creative force behind Flora&apos;s
        Flowers.
      </h3>

      <div className="flex flex-col md:flex-row items-center">
        <img src="/img/staci.webp" alt="Staci" className="rounded-full m-2" />
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
            Serving Rathdrum, Coeur d&apos;Alene, Post Falls, & Surrounding
            Areas.
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
              <FontAwesomeIcon icon={faEnvelope} className="custom-button" />
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
        With a passion for floral design cultivated at JJ Neville&apos;s School
        of Floral Design in Vancouver, Canada, I&apos;ve embarked on a journey
        to bring the beauty of flowers to Rathdrum, Idaho. Inspired by my
        family&apos;s rich history, I&apos;ve named my shop after my Grandpa
        Flora, a talented artist who left a mark on the world. My mom, Peggy,
        owned a flower shop in Rathdrum and encouraged me to become a florist. I
        started my education in her flower shop at the age of 16 before I
        ventured off to design school.
        <br />
        <br />
        As a stay-at-home mom turned floral artist, I&apos;m thrilled to offer
        you a full-service flower shop experience right from my home studio in
        Rathdrum. Delight in the elegance of locally sourced blooms from Idaho
        growers and Spokane&apos;s wholesale markets. Whether it&apos;s
        weddings, events or any special occasion, let Flora&apos;s Flowers add a
        touch of floral magic.
        <br />
        <br />
        Enjoy the convenience of deliveries to Rathdrum and surrounding areas.
        Your support means the world to me, and I can&apos;t wait to bring a
        burst of beauty into your life.
        <br />
        Thank you for considering Flora&apos;s Flowers for your next floral
        moment!
      </p>
      <br />
      <br />

      <img
        src="/img/map.webp"
        alt="Map"
        className="w-full my-4 h-auto border-white border-2 rounded-xl"
      />
      <Footer />
    </>
  );
}
