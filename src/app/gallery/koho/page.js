import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "koho";
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
    "Stanley & Sydney Koho Wedding | Firebrand Venue Cocolalla ID | Flora's Weddings",
  description:
    "An enchanted evening at the Firebrand Venue in Cocolalla, Idaho. View the rustic wedding floral gallery of Stanley and Sydney Koho, captured by Ethan Leibrant Photography.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Enchanted Evening at Firebrand Venue</h1>

        <h2 className="subtitle text-center">
          Stanley and Sydney Koho: A Rustic Romance in Cocolalla, Idaho.
        </h2>

        <p className="body-text mb-4 text-center">
          Stanley and Sydney Koho&#39;s wedding at the Firebrand Venue was a
          captivating blend of rustic elegance and personal flair. Set in the
          scenic town of Cocolalla, Idaho, their special day was beautifully
          captured by Ethan Leibrant Photography, showcasing the unique charm
          and heartfelt moments that made their celebration truly unforgettable.
        </p>

        <div className="grid">
          {imageFilenames.map((filename, index) => {
            const imagePath = `/img/${galleryFolder}/${filename}`;
            const altText = `${filename.replace(/\.[^/.]+$/, "")} Wedding florist`;

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
