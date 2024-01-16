import { useMemo } from "react";

export default function Collage() {
  const collageImages = useMemo(
    () => [
      "collage2.webp",
      "collage9.webp",
      "collage4.webp",
      "collage10.webp",
      "collage7.webp",
      "collage6.webp",
      "collage8.webp",
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
            <img
              src={imagePath}
              alt={altText}
              className="image-placeholder"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
}
