import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";

// Read the image filenames from the directory
const imagesDirectory = path.join(process.cwd(), "public", "img", "hauser");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  return (
    <div>
      <Header />
      <h1 className="title gallery">Hauser Lake Serenity: A Private Affair</h1>

      <p className="subtitle text-center">
        Kelsie and Quinton Lee: Intimate Lakeside Matrimony, Hauser, ID
      </p>

      <p className="body-text text-center">
        Kelsie and Quinton Lee&#39;s wedding at their Hauser Lake private
        residence was a picturesque embodiment of intimate elegance. Against the
        serene backdrop of the lake, the day featured personal touches and
        floral arrangements that harmonized with the natural setting, creating
        an intimately unique celebration of their love.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/hauser/${filename}`;
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
