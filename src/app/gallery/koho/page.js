import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Gallery() {
  // Read the image filenames from the directory
  const imagesDirectory = path.join(process.cwd(), "public", "img", "koho");
  const imageFilenames = fs.readdirSync(imagesDirectory);

  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery">Enchanted Evening at Firebrand Venue</h1>
      Subtitle:
      <p className="subtitle text-center">
        Stanley and Sydney Koho: A Rustic Romance in Cocolalla, Idaho.
      </p>
      Body Text:
      <p className="body-text text-center">
        Stanley and Sydney Koho&#39;s wedding at the Firebrand Venue was a
        captivating blend of rustic elegance and personal flair. Set in the
        scenic town of Cocolalla, Idaho, their special day was beautifully
        captured by Ethan Leibrant Photography, showcasing the unique charm and
        heartfelt moments that made their celebration truly unforgettable.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/koho/${filename}`;
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
