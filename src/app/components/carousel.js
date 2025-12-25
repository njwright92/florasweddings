import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMemo } from "react";
import Image from "next/image";
export default function ReviewsCarousel() {
  const images = useMemo(
    () => [
      "/img/reviews/reviews1.webp",
      "/img/reviews/reviews2.webp",
      "/img/reviews/reviews3.webp",
      "/img/reviews/reviews4.webp",
      "/img/reviews/reviews5.webp",
      "/img/reviews/reviews6.webp",
    ],
    []
  );

  return (
    <div className="carousel-wrapper">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        dynamicHeight={true}
        showStatus={true}
        showThumbs={false}
        emulateTouch={true}
      >
        {images.map((src, index) => (
          <div key={index} style={{ borderRadius: "var(--soft-radius)" }}>
            <Image
              width={400}
              height={300}
              src={src}
              alt={`Review ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
