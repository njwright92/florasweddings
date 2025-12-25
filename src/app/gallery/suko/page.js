import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Read the image filenames from the directory
const imagesDirectory = path.join(process.cwd(), "public", "img", "suko");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  return (
    <div>
      <Header />
      <h1 className="title gallery">Rustic Charm at Firebrand, Cocolalla</h1>

      <p className="subtitle text-center">
        Sabre and Spencer Suko: A Heartfelt Celebration in Cocolalla, Idaho
      </p>

      <p className="body-text text-center">
        Sabre and Spencer Suko&#39;s wedding at Firebrand in Cocolalla, Idaho,
        was a heartwarming display of rustic charm and intimate elegance. The
        venue&#39;s natural beauty provided a picturesque setting, perfectly
        captured by Roaming Rose Photography. Every moment reflected the
        couple&#39;s love and the joyous spirit of their special day.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/suko/${filename}`;
          const imageExists = fs.existsSync(
            path.join(imagesDirectory, filename)
          );

          if (imageExists) {
            // Use the filename without the extension as alt text
            const altText =
              filename.replace(/\.[^/.]+$/, "") + "Wedding Flowers";

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
