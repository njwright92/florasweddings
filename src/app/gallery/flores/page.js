import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "flores";
const imagesDirectory = path.join(
  process.cwd(),
  "public",
  "img",
  galleryFolder
);

// Filter out system files immediately
const imageFilenames = fs
  .readdirSync(imagesDirectory)
  .filter((file) => file !== ".DS_Store");

// Add SEO Metadata
export const metadata = {
  title: "Flores Wedding | Mish-an-nock Cruise Boat CDA | Flora's Weddings",
  description:
    "A voyage of love aboard the Mish-an-nock cruise boat in Coeur d'Alene. View the nautical wedding floral gallery of the Flores wedding.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">
          Nautical Nuptials: Coeur d&#39;Alene Resort
        </h1>

        <h2 className="subtitle text-center">
          Flores Wedding: A Voyage of Love on the Mish-an-nock, Coeur
          d&#39;Alene, ID.
        </h2>

        <p className="body-text mb-4 text-center">
          The Flores wedding aboard the Mish-an-nock cruise boat was a splendid
          fusion of elegance and adventure. Cruising along the waters of Coeur
          d&#39;Alene, the celebration captivated guests with stunning lake
          views and exquisite floral arrangements. Light Cast Photography
          skillfully captured the romance and beauty of this unique lakeside
          journey.
        </p>

        <div className="grid">
          {imageFilenames.map((filename, index) => {
            const imagePath = `/img/${galleryFolder}/${filename}`;
            const altText = `${filename.replace(/\.[^/.]+$/, "")} Wedding flowers`;

            return (
              <div key={filename} className="image">
                <Image
                  src={imagePath}
                  alt={altText}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="image-placeholder object-cover"
                  priority={index < 4}
                />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
