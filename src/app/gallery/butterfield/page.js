import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import fs from "fs";
import path from "path";

const imagesDirectory = path.join(
  process.cwd(),
  "public",
  "img",
  "butterfield"
);
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery">The Willows</h1>
      <h2 className="subtitle text-center">
        Zoe and Joey Butterfield: A Celebration of Love and Nature, Coeur
        d&#39;Alene, ID
      </h2>
      <p className="body-text text-center">
        At The Willows, Zoe and Joey&#39;s wedding was a harmonious blend of
        natural beauty and elegant florals. Each arrangement complemented the
        couple&#39;s vision, creating a uniquely romantic atmosphere. Captured
        with artistry by Shaena Sullivan Photography, these moments are a
        testament to love&#39;s timeless elegance.{" "}
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          if (filename === ".DS_Store") {
            return null;
          }

          const imagePath = `/img/butterfield/${filename}`;
          const imageExists = fs.existsSync(
            path.join(imagesDirectory, filename)
          );

          if (imageExists) {
            const altText =
              filename.replace(/\.[^/.]+$/, "") + " Wedding boquettes";

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
