import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "hoyer";
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
    "Ellen & Kenny Hoyer Wedding | Farm Wedding Mica WA | Flora's Weddings",
  description:
    "Country charm at a farm wedding in Mica, Washington. View the rustic wedding floral gallery of Ellen and Kenny Hoyer.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">
          Country Charm: Farm Wedding in Mica, Washington
        </h1>

        <h2 className="subtitle text-center">
          Ellen and Kenny Hoyer: Love in a Rustic Setting
        </h2>

        <p className="body-text mb-4 text-center">
          Ellen and Kenny Hoyer&#39;s wedding at a charming farm in Mica,
          Washington, was the epitome of country elegance. Set against a
          backdrop of rolling fields and rustic scenery, their special day
          combined natural beauty with sophisticated floral details. Though the
          photographer remains unknown, the memories of their joyous celebration
          are vivid and enduring.
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
