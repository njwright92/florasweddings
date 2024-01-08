import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

// Read the image filenames from the directory
const imagesDirectory = path.join(process.cwd(), "public", "img", "wabs");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery">
        A Timeless Celebration at White Barn Ranch
      </h1>

      <p className="subtitle text-center">
        Country Elegance: The Wabs Wedding, ID.
      </p>

      <p className="body-text text-center">
        The Wabs wedding at the White Barn Ranch was a perfect blend of country
        charm and timeless elegance. Each moment, beautifully captured by
        Yasmina Rose Photography, tells a story of love and celebration, set
        against the rustic backdrop of the ranch. Their special day was filled
        with heartfelt memories and picturesque scenes, creating a truly
        unforgettable experience.
      </p>
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
            const altText =
              filename.replace(/\.[^/.]+$/, "") + " Wedding Florals";

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
