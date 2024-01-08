import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

// Read the image filenames from the directory
const imagesDirectory = path.join(process.cwd(), "public", "img", "webster");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  let currentIndex = 0;

  return (
    <div>
      <Header />
      <h1 className="title gallery"> Mountain Sky Guest Ranch</h1>

      <p className="subtitle text-center">
        Joe and Kassidy Webster: Love Peaks at Emigrant, Montana
      </p>

      <p className="body-text text-center">
        Joe and Kassidy Webster&#39;s wedding at Mountain Sky Guest Ranch
        unfolded amidst the breathtaking landscapes of Emigrant, Montana. Their
        celebration, a harmonious blend of nature&#39;s grandeur and rustic
        elegance, was exquisitely captured by Evelina Cole Photography. Each
        photograph tells a story of love, adventure, and the majestic beauty of
        Montana&#39;s mountains.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/webster/${filename}`;
          const imageExists = fs.existsSync(
            path.join(imagesDirectory, filename)
          );

          if (imageExists) {
            // Use the filename without the extension as alt text
            const altText =
              filename.replace(/\.[^/.]+$/, "") + " Wedding Boquettes";

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
