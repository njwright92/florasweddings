import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "knox";
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
  title: "Knox/Farley Wedding | CDA Casino Worley ID | Flora's Weddings",
  description:
    "A glamorous celebration at the Coeur d'Alene Casino in Worley, Idaho. View the elegant wedding floral gallery of the Knox/Farley wedding, captured by Meagan Mylan Photography.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">
          Glamorous Celebration at Coeur d&#39;Alene Casino
        </h1>

        <h2 className="subtitle text-center">
          Knox/Farley Wedding: Elegance in Worley, Idaho
        </h2>

        <p className="body-text mb-4 text-center">
          The Knox/Farley wedding at the Coeur d&#39;Alene Casino in Worley,
          Idaho, was a splendid event of glamour and sophistication. The
          casino&#39;s exquisite setting enhanced the celebration&#39;s allure,
          with each floral arrangement adding to its elegance. Meagan Mylan
          Photography captured the essence of this grand affair, showcasing the
          couple&#39;s joyous moments.
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
