import fs from "fs";
import path from "path";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Gallery() {
  // Read the image filenames from the directory
  const imagesDirectory = path.join(process.cwd(), "public", "img", "wabs");
  const imageFilenames = fs.readdirSync(imagesDirectory);

  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="subtitle gallery">
        The Wabs Wedding. Yasmina Rose Photography White Barn Ranch
      </h1>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/wabs/${filename}`;
          const imageExists = fs.existsSync(
            path.join(imagesDirectory, filename)
          );

          if (imageExists) {
            // Use the filename without the extension as alt text
            const altText = filename.replace(/\.[^/.]+$/, "");

            // Increment the current index for the next image
            currentIndex++;

            return (
              <div key={index} className="image">
                <div className="image-overlay">
                  <img
                    src={imagePath}
                    alt={altText}
                    className="image-placeholder"
                    loading="lazy"
                  />
                  <p className="image-title">The Wabs Wedding</p>
                </div>
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