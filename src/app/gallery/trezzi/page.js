import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "trezzi";
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
  title: "Knox Wedding | Trezzi Farm Winery Colbert WA | Flora's Weddings",
  description:
    "Vineyard vows at Trezzi Farm Winery in Colbert, Washington. View the rustic and elegant wedding floral gallery of the 2022 Knox wedding.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Vineyard Vows at Trezzi Farm Winery</h1>

        <h2 className="subtitle text-center">
          2022 Knox Wedding: Rustic Elegance in Colbert, Washington
        </h2>

        <p className="body-text mb-4 text-center">
          The 2022 Knox wedding at Trezzi Farm Winery in Colbert, Washington,
          was a beautiful blend of rustic charm and vineyard elegance. Set
          amidst rolling vineyards, the celebration was marked by an air of
          romantic sophistication. Though the photographer remains unknown, the
          day&#39;s enchanting moments are vividly remembered for their joy and
          beauty.
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
