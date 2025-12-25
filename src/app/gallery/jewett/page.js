import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "jewett";
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
  title: "Ross Wedding | Historic Jewett House CDA | Flora's Weddings",
  description:
    "Historic elegance at the Jewett House in Coeur d'Alene. View the wedding floral gallery of the Ross wedding, captured by Amy Lynn Photography.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Historic Elegance at Jewett House</h1>

        <h2 className="subtitle text-center">
          The Ross Wedding: A Blend of Tradition and Modern Grace, Coeur
          d&#39;Alene, ID
        </h2>

        <p className="body-text mb-4 text-center">
          The Ross Wedding at the historic Jewett House in Coeur d&#39;Alene was
          a beautiful fusion of traditional elegance and contemporary style. The
          venue&#39;s classic charm provided a stunning backdrop, while the
          thoughtful floral arrangements added a modern touch. Amy Lynn&#39;s
          photography skillfully captured the essence of their special day,
          reflecting the couple&#39;s unique love story.
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
