import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define gallery path once to avoid typos
const galleryFolder = "cataldo";
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
  title: "Booth Family Weddings | Country Barn B&B Cataldo | Flora's Weddings",
  description:
    "Rustic charm meets elegance at the Country Barn Bed and Breakfast in Cataldo, Idaho. View the wedding floral gallery for the Booth family weddings.",
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title gallery">Country Barn Bed and Breakfast</h1>

        <h2 className="subtitle text-center">
          Booth Family Weddings: Rustic Charm Meets Elegance, Cataldo, Idaho
        </h2>

        <p className="body-text mb-4 text-center">
          Celebrating love at Cataldo&#39;s Country Barn Bed and Breakfast, the
          Booth families embraced the blend of rustic beauty and elegant
          florals. Each wedding showcased unique, heartfelt details, echoing the
          barn&#39;s rustic allure. Unphotographed, yet vivid in memory, these
          days remain a testament to joy and elegance.
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
