import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import fs from "fs";
import path from "path";

// Read the image filenames from the directory
const imagesDirectory = path.join(process.cwd(), "public", "img", "jewett");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery">Historic Elegance at Jewett House</h1>

      <p className="subtitle text-center">
        The Ross Wedding: A Blend of Tradition and Modern Grace, Coeur
        d&#39;Alene, ID
      </p>

      <p className="body-text text-center">
        The Ross Wedding at the historic Jewett House in Coeur d&#39;Alene was a
        beautiful fusion of traditional elegance and contemporary style. The
        venue&#39;s classic charm provided a stunning backdrop, while the
        thoughtful floral arrangements added a modern touch. Amy Lynn&#39;s
        photography skillfully captured the essence of their special day,
        reflecting the couple&#39;s unique love story.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/jewett/${filename}`;
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
