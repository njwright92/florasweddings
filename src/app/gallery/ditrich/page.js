import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "ditrich";
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
  title: "Chelsey & Tim Ditrich Wedding | Backyard Athol ID | Flora's Weddings",
  description:
    "View the intimate backyard wedding gallery of Chelsey and Tim Ditrich in Athol, Idaho. Personalized floral touches captured by Light Cast Photography.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Intimate Backyard Bliss</h1>

        <h2 className="subtitle text-center">
          Chelsey and Tim Ditrich: A Personal Celebration of Love, Athol, Idaho
        </h2>

        <p className="body-text mb-4 text-center">
          Chelsey and Tim Ditrich&#39;s backyard wedding in Athol was a
          picturesque scene of intimacy and affection. Set against Idaho&#39;s
          natural beauty, their special day featured personalized floral
          touches, enhancing the cozy ambiance. Light Cast Photography
          masterfully captured each moment, reflecting the joy and love present.
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
