import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "justin";
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
    "Justin & Kaylee Wright Wedding | Rustic Rathdrum ID | Flora's Weddings",
  description:
    "Rustic charm and natural beauty in Rathdrum, Idaho. View the wedding floral gallery of Justin and Kaylee Wright, captured by kaitlynanne.photography.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Rustic Charm</h1>

        <h2 className="subtitle text-center">
          Justin and Kaylee Wright: Celebrating Love Amidst Nature, Rathdrum,
          ID.
        </h2>

        <p className="body-text mb-4 text-center">
          Justin and Kaylee Wright&#39;s wedding in Rathdrum, Idaho, was a
          delightful showcase of rustic charm and natural beauty. The outdoor
          setting provided a picturesque canvas for their love, complemented by
          elegant floral arrangements. Captured beautifully by
          kaitlynanne.photography, each photo resonates with the joy and warmth
          of their special day.
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
