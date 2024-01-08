import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

// Read the image filenames from the directory
const imagesDirectory = path.join(process.cwd(), "public", "img", "hirschel");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery">Elegance at Hadadone Event Center</h1>

      <p className="subtitle text-center">
        Chantel and Jason Hirschel: Celebrating Love in Style, Coeur
        d&#39;Alene, ID
      </p>

      <p className="body-text text-center">
        Chantel and Jason Hirschel&#39;s wedding at the Hadadone Event Center
        was a showcase of elegance and romance. In the heart of Coeur
        d&#39;Alene, their special day was adorned with tasteful floral
        arrangements that added to the venue&#39;s sophisticated ambiance.
        Despite the photographer remaining unknown, each moment resonated with
        beauty and joy, vivid in memory.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/hirschel/${filename}`;
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
