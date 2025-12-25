import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";

const imagesDirectory = path.join(process.cwd(), "public", "img", "cataldo");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  return (
    <div>
      <Header />
      <h1 className="title gallery">Country Barn Bed and Breakfast</h1>

      <p className="subtitle text-center">
        Booth Family Weddings: Rustic Charm Meets Elegance, Cataldo, Idaho
      </p>

      <p className="body-text text-center">
        Celebrating love at Cataldo&#39;s Country Barn Bed and Breakfast, the
        Booth families embraced the blend of rustic beauty and elegant florals.
        Each wedding showcased unique, heartfelt details, echoing the barn&#39;s
        rustic allure. Unphotographed, yet vivid in memory, these days remain a
        testament to joy and elegance.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          if (filename === ".DS_Store") {
            return null;
          }

          const imagePath = `/img/cataldo/${filename}`;
          const imageExists = fs.existsSync(
            path.join(imagesDirectory, filename)
          );

          if (imageExists) {
            const altText =
              filename.replace(/\.[^/.]+$/, "") + " Wedding Flowers";

            return (
              <div key={index} className="image">
                <Image
                  width={400}
                  height={300}
                  src={imagePath}
                  alt={altText}
                  className="image-placeholder"
                />
              </div>
            );
          }
          return null;
        })}
      </div>
      <Footer />
    </div>
  );
}
