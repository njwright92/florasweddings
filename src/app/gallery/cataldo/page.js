import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Gallery() {
  // Read the image filenames from the directory
  const imagesDirectory = path.join(process.cwd(), "public", "img", "cataldo");
  const imageFilenames = fs.readdirSync(imagesDirectory);

  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title  gallery">Country Barn Bed and Breakfast</h1>

      <p className="subtitle text-center">
        Booth Family Weddings: Rustic Charm Meets Elegance, Cataldo, Idaho
      </p>

      <p className="body-text text-center">
        Celebrating love at Cataldo&#39;s Country Barn Bed and Breakfast, the
        Booth families embraced the blend of rustic beauty and elegant florals.
        Each wedding showcased unique, heartfelt details, echoing the barn&#39;s
        rustic allure. Unphotographed, yet vivid in memory, these days remain a
        testament to joy and elegance.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/cataldo/${filename}`;
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
