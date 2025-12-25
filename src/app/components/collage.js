import Image from "next/image";
import { useMemo } from "react";

export default function Collage() {
  const collageImages = useMemo(
    () => [
      "collage2.webp",
      "collage9.webp",
      "collage4.webp",
      "collage10.webp",
      "collage6.webp",
      "collage7.webp",
      "collage8.webp",
      "banner2.webp",
    ],
    []
  );

  return (
    <div className="grid">
      {collageImages.map((filename, index) => {
        const imagePath = `/img/collage/${filename}`;
        const altText = filename.replace(/\.[^/.]+$/, "") + " Wedding Florals";
        return (
          <div key={index} className="image1">
            <Image
              width={400}
              height={300}
              src={imagePath}
              alt={altText}
              className="image-placeholder"
            />
          </div>
        );
      })}
    </div>
  );
}
