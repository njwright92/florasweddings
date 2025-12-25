import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "suko";
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
    "Sabre & Spencer Suko Wedding | Firebrand Cocolalla ID | Flora's Weddings",
  description:
    "Rustic charm at the Firebrand venue in Cocolalla, Idaho. View the wedding floral gallery of Sabre and Spencer Suko, captured by Roaming Rose Photography.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Rustic Charm at Firebrand, Cocolalla</h1>

        <h2 className="subtitle text-center">
          Sabre and Spencer Suko: A Heartfelt Celebration in Cocolalla, Idaho
        </h2>

        <p className="body-text mb-4 text-center">
          Sabre and Spencer Suko&#39;s wedding at Firebrand in Cocolalla, Idaho,
          was a heartwarming display of rustic charm and intimate elegance. The
          venue&#39;s natural beauty provided a picturesque setting, perfectly
          captured by Roaming Rose Photography. Every moment reflected the
          couple&#39;s love and the joyous spirit of their special day.
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
