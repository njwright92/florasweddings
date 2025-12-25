import Image from "next/image";

const COLLAGE_IMAGES = [
  "collage2.webp",
  "collage9.webp",
  "collage4.webp",
  "collage10.webp",
  "collage6.webp",
  "collage7.webp",
  "collage8.webp",
  "banner2.webp",
];

export default function Collage() {
  return (
    <>
      <div className="title-container">
        <h2 className="title">Custom Florals</h2>
        <Image
          src="/img/flower-PhotoRoom.webp"
          width={200}
          height={100}
          alt="Decorative flower"
          className="-mt-20"
        />
      </div>
      <p className="subtitle">
        A collection of our beautiful custom floral arrangements
      </p>

      <div className="grid">
        {COLLAGE_IMAGES.map((filename) => (
          <div
            key={filename}
            className="relative aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={`/img/collage/${filename}`}
              alt={`Custom wedding florals - ${filename.replace(/\d*\.webp$/, "").replace(/^\w/, (c) => c.toUpperCase())}`}
              fill
              sizes="(max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
