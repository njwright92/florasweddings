import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "hirschel";
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
    "Chantel & Jason Hirschel Wedding | Hagadone Event Center | Flora's Weddings",
  description:
    "Elegance and romance at the Hagadone Event Center in Coeur d'Alene. View the wedding floral gallery of Chantel and Jason Hirschel.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Elegance at Hadadone Event Center</h1>

        <h2 className="subtitle text-center">
          Chantel and Jason Hirschel: Celebrating Love in Style, Coeur
          d&#39;Alene, ID
        </h2>

        <p className="body-text mb-4 text-center">
          Chantel and Jason Hirschel&#39;s wedding at the Hadadone Event Center
          was a showcase of elegance and romance. In the heart of Coeur
          d&#39;Alene, their special day was adorned with tasteful floral
          arrangements that added to the venue&#39;s sophisticated ambiance.
          Despite the photographer remaining unknown, each moment resonated with
          beauty and joy, vivid in memory.
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
