import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import fs from "fs";
import path from "path";

export default function Gallery() {
  // Read the image filenames from the directory
  const imagesDirectory = path.join(process.cwd(), "public", "img", "flores");
  const imageFilenames = fs.readdirSync(imagesDirectory);

  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery">
        Nautical Nuptials: Coeur d&#39;Alene Resort
      </h1>

      <p className="subtitle text-center">
        Flores Wedding: A Voyage of Love on the Mish-an-nock, Coeur d&#39;Alene, ID.
      </p>

      <p className="body-text text-center">
        The Flores wedding aboard the Mish-an-nock cruise boat was a splendid
        fusion of elegance and adventure. Cruising along the waters of Coeur
        d&#39;Alene, the celebration captivated guests with stunning lake views
        and exquisite floral arrangements. Light Cast Photography skillfully
        captured the romance and beauty of this unique lakeside journey.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/flores/${filename}`;
          const imageExists = fs.existsSync(
            path.join(imagesDirectory, filename)
          );

          if (imageExists) {
            // Use the filename without the extension as alt text
            const altText =
              filename.replace(/\.[^/.]+$/, "") + "Wedding Flowers";

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
