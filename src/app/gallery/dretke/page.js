import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "dretke";
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
  title:
    "Jessica & Ian Dretke Wedding | Elkins Resort Priest Lake | Flora's Weddings",
  description:
    "Lakeside romance at Elkins Resort, Priest Lake. View the wedding floral gallery of Jessica and Ian Dretke, captured by TSutton Photography.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Elkins Resort Elegance</h1>

        <h2 className="subtitle text-center">
          Jessica and Ian Dretke: Lakeside Romance Unfolds, Priest Lake ID.
        </h2>

        <p className="body-text mb-4 text-center">
          Jessica and Ian Dretke&#39;s wedding at Elkins Resort embodied the
          perfect lakeside romance. Surrounded by Priest Lake&#39;s pristine
          beauty, their celebration featured elegant floral designs, enhancing
          the natural scenery. TSutton Photography captured their love&#39;s
          essence and the picturesque setting, creating lasting memories.
        </p>

        <div className="grid">
          {imageFilenames.map((filename, index) => {
            const imagePath = `/img/${galleryFolder}/${filename}`;
            const altText = `${filename.replace(/\.[^/.]+$/, "")} Wedding bouquets`;

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
