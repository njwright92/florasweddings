import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Gallery() {
  // Read the image filenames from the directory
  const imagesDirectory = path.join(
    process.cwd(),
    "public",
    "img",
    "homestead"
  );
  const imageFilenames = fs.readdirSync(imagesDirectory);

  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery">Rustic Romance at Homestead Barn</h1>
      <p className="subtitle text-center">
        Lexi and Colton Gundlach: A Day of Country Elegance, Dover, ID
      </p>

      <p className="body-text text-center">
        Lexi and Colton Gundlach&#39;s wedding at the Homestead Barn in Dover was a
        beautiful blend of rustic charm and chic elegance. The idyllic barn
        setting provided a perfect backdrop for their heartfelt celebration,
        enhanced by unique floral arrangements. Jamie Lund Photography captured
        each moment, showcasing the love and joy of their special day.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/homestead/${filename}`;
          const imageExists = fs.existsSync(
            path.join(imagesDirectory, filename)
          );

          if (imageExists) {
            // Use the filename without the extension as alt text
            const altText =
              filename.replace(/\.[^/.]+$/, "") + " Wedding Florist";

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
