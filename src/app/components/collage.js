export default function Collage() {
  const collageImages = [
    "collage10.webp",
    "collage6.webp",
    "collage7.webp",
    "collage2.webp",
    "collage4.webp",
    "collage9.webp",
    "collage8.webp",
    "collage1.webp",
  ];

  return (
    <div className="grid">
      {collageImages.map((filename, index) => {
        const imagePath = `/img/collage/${filename}`;
        const altText = `Collage Image ${index + 1}`;
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
