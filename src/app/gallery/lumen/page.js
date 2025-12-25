import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "lumen";
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
  title: "Sammy & Hunter Damschen Wedding | Lumen Hall CDA | Flora's Weddings",
  description:
    "Modern elegance at Lumen Hall in Coeur d'Alene. View the wedding floral gallery of Sammy and Hunter Damschen, captured by Jesy Lee Photography.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Modern Elegance at Lumen Hall</h1>

        <h2 className="subtitle text-center">
          Sammy and Hunter Damschen: Chic Urban Celebration in Coeur
          d&#39;Alene, Idaho
        </h2>

        <p className="body-text mb-4 text-center">
          Sammy and Hunter Damschen&#39;s wedding at Lumen Hall showcased modern
          elegance in the heart of Coeur d&#39;Alene. The venue&#39;s chic urban
          atmosphere provided the perfect backdrop for their vibrant and stylish
          celebration. Captured with artistic flair by Jesy Lee Photography,
          each photo radiates the joy and sophistication of their special day.
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
