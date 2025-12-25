import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";

// Read the image filenames from the directory
const imagesDirectory = path.join(process.cwd(), "public", "img", "lumen");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  return (
    <div>
      <Header />
      <h1 className="title gallery">Modern Elegance at Lumen Hall</h1>

      <p className="subtitle text-center">
        Sammy and Hunter Damschen: Chic Urban Celebration in Coeur d&#39;Alene,
        Idaho
      </p>
      <p className="body-text text-center">
        Sammy and Hunter Damschen&#39;s wedding at Lumen Hall showcased modern
        elegance in the heart of Coeur d&#39;Alene. The venue&#39;s chic urban
        atmosphere provided the perfect backdrop for their vibrant and stylish
        celebration. Captured with artistic flair by Jesy Lee Photography, each
        photo radiates the joy and sophistication of their special day.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/lumen/${filename}`;
          const imageExists = fs.existsSync(
            path.join(imagesDirectory, filename)
          );

          if (imageExists) {
            // Use the filename without the extension as alt text
            const altText =
              filename.replace(/\.[^/.]+$/, "") + " Wedding Flowers";

            // Increment the current index for the next image

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
