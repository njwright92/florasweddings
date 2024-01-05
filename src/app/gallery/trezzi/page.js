import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Gallery() {
  // Read the image filenames from the directory
  const imagesDirectory = path.join(process.cwd(), "public", "img", "trezzi");
  const imageFilenames = fs.readdirSync(imagesDirectory);

  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery">Vineyard Vows at Trezzi Farm Winery</h1>

      <p className="subtitle text-center">
        2022 Knox Wedding: Rustic Elegance in Colbert, Washington
      </p>

      <p className="body-text text-center">
        The 2022 Knox wedding at Trezzi Farm Winery in Colbert, Washington, was
        a beautiful blend of rustic charm and vineyard elegance. Set amidst
        rolling vineyards, the celebration was marked by an air of romantic
        sophistication. Though the photographer remains unknown, the day&#39;s
        enchanting moments are vividly remembered for their joy and beauty.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/trezzi/${filename}`;
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
