import fs from "fs";
import path from "path";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";

export default function Gallery() {
  // Read the image filenames from the directory
  const imagesDirectory = path.join(process.cwd(), "public", "img", "wright");
  const imageFilenames = fs.readdirSync(imagesDirectory);

  return (
    <div>
      <Header />
      <h1 className="title gallery">Idaho Shakespeare Festival Park</h1>

      <p className="subtitle text-center">
        Dramatic Elegance Seth and Michaelene Wright: A Theatrical Romance in
        Boise, ID.
      </p>

      <p className="body-text text-center">
        Seth and Michaelene Wright&#39;s wedding at the Idaho Shakespeare
        Festival Park in Boise was a captivating blend of drama and elegance.
        The unique setting lent a theatrical backdrop to their special day,
        enhanced by lovingly captured phone pictures from family, which added a
        personal and intimate touch to their memorable celebration.
      </p>
      <div className="grid">
        {imageFilenames.map((filename, index) => {
          // Exclude the .DS_Store file
          if (filename === ".DS_Store") {
            return null;
          }

          // Check if the image file exists
          const imagePath = `/img/wright/${filename}`;
          const imageExists = fs.existsSync(
            path.join(imagesDirectory, filename)
          );

          if (imageExists) {
            // Use the filename without the extension as alt text
            const altText =
              filename.replace(/\.[^/.]+$/, "") + " Wedding boquets";

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
