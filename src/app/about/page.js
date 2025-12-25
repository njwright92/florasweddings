import Footer from "../components/Footer";
import Header from "../components/Header";
import ReviewsCarousel from "../components/carousel";
import AboutUs from "../components/aboutUs";
import Image from "next/image";

export const metadata = {
  title: "About Us - Flora's Weddings | Rathdrum Idaho Florist",
  description:
    "Meet Staci Huffman, the creative force behind Flora's Flowers. With 30 years of floral design experience, serving Rathdrum, Idaho and surrounding areas.",
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        <AboutUs headingLevel="h1" />

        <section className="mt-12">
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
      </main>
      <Footer />
    </>
  );
}
