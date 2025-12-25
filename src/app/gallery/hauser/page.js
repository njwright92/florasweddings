import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "hauser";
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
  title: "Kelsie & Quinton Lee Wedding | Hauser Lake ID | Flora's Weddings",
  description:
    "Intimate lakeside matrimony at a private residence in Hauser Lake, Idaho. View the wedding floral gallery of Kelsie and Quinton Lee.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">
          Hauser Lake Serenity: A Private Affair
        </h1>

        <h2 className="subtitle text-center">
          Kelsie and Quinton Lee: Intimate Lakeside Matrimony, Hauser, ID
        </h2>

        <p className="body-text mb-4 text-center">
          Kelsie and Quinton Lee&#39;s wedding at their Hauser Lake private
          residence was a picturesque embodiment of intimate elegance. Against
          the serene backdrop of the lake, the day featured personal touches and
          floral arrangements that harmonized with the natural setting, creating
          an intimately unique celebration of their love.
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
