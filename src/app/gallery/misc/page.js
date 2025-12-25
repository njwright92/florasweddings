import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";

// Read the image filenames from the directory
const imagesDirectory = path.join(process.cwd(), "public", "img", "misc");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  return (
    <div>
      <Header />
      <h1 className="title gallery">
        Collage of custom florals from intimate weddings.
      </h1>

      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/misc/${filename}`;
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
