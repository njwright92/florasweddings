import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "webster";
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
    "Joe & Kassidy Webster Wedding | Mountain Sky Guest Ranch MT | Flora's Weddings",
  description:
    "Love peaks at Emigrant, Montana. View the wedding floral gallery of Joe and Kassidy Webster at Mountain Sky Guest Ranch, captured by Evelina Cole Photography.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Mountain Sky Guest Ranch</h1>

        <h2 className="subtitle text-center">
          Joe and Kassidy Webster: Love Peaks at Emigrant, Montana
        </h2>

        <p className="body-text mb-4 text-center">
          Joe and Kassidy Webster&#39;s wedding at Mountain Sky Guest Ranch
          unfolded amidst the breathtaking landscapes of Emigrant, Montana.
          Their celebration, a harmonious blend of nature&#39;s grandeur and
          rustic elegance, was exquisitely captured by Evelina Cole Photography.
          Each photograph tells a story of love, adventure, and the majestic
          beauty of Montana&#39;s mountains.
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
