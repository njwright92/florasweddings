import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "homestead";
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
    "Lexi & Colton Gundlach Wedding | Homestead Barn Dover ID | Flora's Weddings",
  description:
    "Rustic romance at the Homestead Barn in Dover, Idaho. View the wedding floral gallery of Lexi and Colton Gundlach, captured by Jamie Lund Photography.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Rustic Romance at Homestead Barn</h1>

        <h2 className="subtitle text-center">
          Lexi and Colton Gundlach: A Day of Country Elegance, Dover, ID
        </h2>

        <p className="body-text mb-4 text-center">
          Lexi and Colton Gundlach&#39;s wedding at the Homestead Barn in Dover
          was a beautiful blend of rustic charm and chic elegance. The idyllic
          barn setting provided a perfect backdrop for their heartfelt
          celebration, enhanced by unique floral arrangements. Jamie Lund
          Photography captured each moment, showcasing the love and joy of their
          special day.
        </p>

        <div className="grid">
          {imageFilenames.map((filename, index) => {
            const imagePath = `/img/${galleryFolder}/${filename}`;
            const altText = `${filename.replace(/\.[^/.]+$/, "")} Wedding Florist`;

            // Special case: Rotate this specific image if needed
            const isRotateImage = filename === "homestead3.webp";

            return (
              <div key={filename} className="image">
                <Image
                  src={imagePath}
                  alt={altText}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className={`image-placeholder object-cover ${
                    isRotateImage ? "rotate-90" : ""
                  }`}
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
