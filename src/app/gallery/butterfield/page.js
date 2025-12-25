import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

const galleryFolder = "butterfield";
const imagesDirectory = path.join(
  process.cwd(),
  "public",
  "img",
  galleryFolder
);

const imageFilenames = fs
  .readdirSync(imagesDirectory)
  .filter((file) => file !== ".DS_Store");

export const metadata = {
  title: "Zoe & Joey Butterfield Wedding | The Willows CDA | Flora's Weddings",
  description:
    "View the wedding gallery of Zoe and Joey Butterfield at The Willows in Coeur d'Alene. Custom floral arrangements and bridal bouquets by Flora's Weddings.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">The Willows</h1>
        <h2 className="subtitle text-center">
          Zoe and Joey Butterfield: A Celebration of Love and Nature, Coeur
          d&#39;Alene, ID
        </h2>
        <p className="body-text mb-4 text-center">
          At The Willows, Zoe and Joey&#39;s wedding was a harmonious blend of
          natural beauty and elegant florals. Each arrangement complemented the
          couple&#39;s vision, creating a uniquely romantic atmosphere. Captured
          with artistry by Shaena Sullivan Photography, these moments are a
          testament to love&#39;s timeless elegance.
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
