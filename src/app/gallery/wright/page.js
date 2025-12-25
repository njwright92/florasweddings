import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "wright";
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
    "Seth & Michaelene Wright Wedding | Shakespeare Festival Boise | Flora's Weddings",
  description:
    "A theatrical romance at Idaho Shakespeare Festival Park in Boise. View the wedding floral gallery of Seth and Michaelene Wright.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Idaho Shakespeare Festival Park</h1>

        <h2 className="subtitle text-center">
          Seth and Michaelene Wright: A Theatrical Romance in Boise, ID.
        </h2>

        <p className="body-text mb-4 text-center">
          Seth and Michaelene Wright&#39;s wedding at the Idaho Shakespeare
          Festival Park in Boise was a captivating blend of drama and elegance.
          The unique setting lent a theatrical backdrop to their special day,
          enhanced by lovingly captured phone pictures from family, which added
          a personal and intimate touch to their memorable celebration.
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
