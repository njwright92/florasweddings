import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import fs from "fs";
import path from "path";

export default function Gallery() {
  // Read the image filenames from the directory
  const imagesDirectory = path.join(process.cwd(), "public", "img", "knox");
  const imageFilenames = fs.readdirSync(imagesDirectory);

  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery">
        Glamorous Celebration at Coeur d&#39;Alene Casino
      </h1>

      <p className="subtitle text-center">
        Knox/Farley Wedding: Elegance in Worley, Idaho
      </p>

      <p className="body-text text-center">
        The Knox/Farley wedding at the Coeur d&#39;Alene Casino in Worley,
        Idaho, was a splendid event of glamour and sophistication. The
        casino&#39;s exquisite setting enhanced the celebration&#39;s allure,
        with each floral arrangement adding to its elegance. Meagan Mylan
        Photography captured the essence of this grand affair, showcasing the
        couple&#39;s joyous moments.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/knox/${filename}`;
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
