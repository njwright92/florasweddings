import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";

// Read the image filenames from the directory
const imagesDirectory = path.join(process.cwd(), "public", "img", "hoyer");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  return (
    <div>
      <Header />
      <h1 className="title gallery">
        Country Charm: Farm Wedding in Mica, Washington
      </h1>

      <p className="subtitle text-center">
        Ellen and Kenny Hoyer: Love in a Rustic Setting
      </p>
      <p className="body-text text-center">
        Ellen and Kenny Hoyer&#39;s wedding at a charming farm in Mica,
        Washington, was the epitome of country elegance. Set against a backdrop
        of rolling fields and rustic scenery, their special day combined natural
        beauty with sophisticated floral details. Though the photographer
        remains unknown, the memories of their joyous celebration are vivid and
        enduring.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/hoyer/${filename}`;
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
