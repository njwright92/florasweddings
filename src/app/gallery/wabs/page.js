import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "wabs";
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
  title: "Wabs Wedding | White Barn Ranch ID | Flora's Weddings",
  description:
    "A timeless celebration at White Barn Ranch in Idaho. View the country elegance wedding floral gallery of the Wabs wedding, captured by Yasmina Rose Photography.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">
          A Timeless Celebration at White Barn Ranch
        </h1>

        <h2 className="subtitle text-center">
          Country Elegance: The Wabs Wedding, ID.
        </h2>

        <p className="body-text mb-4 text-center">
          The Wabs wedding at the White Barn Ranch was a perfect blend of
          country charm and timeless elegance. Each moment, beautifully captured
          by Yasmina Rose Photography, tells a story of love and celebration,
          set against the rustic backdrop of the ranch. Their special day was
          filled with heartfelt memories and picturesque scenes, creating a
          truly unforgettable experience.
        </p>

        <div className="grid">
          {imageFilenames.map((filename, index) => {
            const imagePath = `/img/${galleryFolder}/${filename}`;
            const altText = `${filename.replace(/\.[^/.]+$/, "")} Wedding Florals`;

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
