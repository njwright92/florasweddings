import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";

// Read the image filenames from the directory
const imagesDirectory = path.join(process.cwd(), "public", "img", "ditrich");
const imageFilenames = fs.readdirSync(imagesDirectory);

export default function Gallery() {
  return (
    <div>
      <Header />
      <h1 className="title gallery">Intimate Backyard Bliss</h1>

      <p className="subtitle text-center">
        Chelsey and Tim Ditrich: A Personal Celebration of Love, Athol, Idaho
      </p>

      <p className="body-text text-center">
        Chelsey and Tim Ditrich&#39;s backyard wedding in Athol was a
        picturesque scene of intimacy and affection. Set against Idaho&#39;s
        natural beauty, their special day featured personalized floral touches,
        enhancing the cozy ambiance. Light Cast Photography masterfully captured
        each moment, reflecting the joy and love present.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/ditrich/${filename}`;
          const imageExists = fs.existsSync(
            path.join(imagesDirectory, filename)
          );

          if (imageExists) {
            // Use the filename without the extension as alt text
            const altText =
              filename.replace(/\.[^/.]+$/, "") + " Wedding Flowers";

            // Increment the current index for the next image

            return (
              <div key={index} className="image">
                <Image
                  width={400}
                  height={300}
                  src={imagePath}
                  alt={altText}
                  className="image-placeholder"
                />
              </div>
            );
          }
          return null;
        })}
      </div>
      <Footer />
    </div>
  );
}
