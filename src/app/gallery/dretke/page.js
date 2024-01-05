import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Gallery() {
  // Read the image filenames from the directory
  const imagesDirectory = path.join(process.cwd(), "public", "img", "dretke");
  const imageFilenames = fs.readdirSync(imagesDirectory);

  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery">Elkins Resort Elegance</h1>
   
      <p className="subtitle text-center">
        Jessica and Ian Dretke: Lakeside Romance Unfolds, Priest Lake ID.
      </p>
    
      <p className="body-text text-center">
        Jessica and Ian Dretke&#39;s wedding at Elkins Resort embodied the
        perfect lakeside romance. Surrounded by Priest Lake&#39;s pristine
        beauty, their celebration featured elegant floral designs, enhancing the
        natural scenery. TSutton Photography captured their love&#39;s essence
        and the picturesque setting, creating lasting memories.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/dretke/${filename}`;
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
