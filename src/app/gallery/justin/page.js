import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

// Read the image filenames from the directory
const imagesDirectory = path.join(process.cwd(), "public", "img", "justin");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery">Rustic Charm</h1>
      <p className="subtitle text-center">
        Justin and Kaylee Wright: Celebrating Love Amidst Nature, Rathdrum, ID.
      </p>

      <p className="body-text text-center">
        Justin and Kaylee Wright&#39;s wedding in Rathdrum, Idaho, was a
        delightful showcase of rustic charm and natural beauty. The outdoor
        setting provided a picturesque canvas for their love, complemented by
        elegant floral arrangements. Captured beautifully by
        kaitlynanne.photography, each photo resonates with the joy and warmth of
        their special day.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/justin/${filename}`;
          const imageExists = fs.existsSync(
            path.join(imagesDirectory, filename)
          );

          if (imageExists) {
            // Use the filename without the extension as alt text
            const altText =
              filename.replace(/\.[^/.]+$/, "") + " Wedding Flowers";

            // Increment the current index for the next image
            currentIndex++;

            return (
              <div key={index} className="image">
                <img
                  src={imagePath}
                  alt={altText}
                  className="image-placeholder"
                  loading="lazy"
                />
              </div>
            );
          }
          currentIndex++;
          return null;
        })}
      </div>
      <Footer />
    </div>
  );
}
