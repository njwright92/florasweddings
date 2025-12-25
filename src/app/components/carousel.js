"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const IMAGES = [
  "/img/reviews/reviews1.webp",
  "/img/reviews/reviews2.webp",
  "/img/reviews/reviews3.webp",
  "/img/reviews/reviews4.webp",
  "/img/reviews/reviews5.webp",
  "/img/reviews/reviews6.webp",
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fixed aspect ratio container - prevents height jumping */}
      <div className="relative aspect-[4/3]">
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {IMAGES.map((src, index) => (
            <div key={src} className="relative h-full w-full flex-shrink-0">
              <Image
                src={src}
                alt={`Customer review ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full bg-green-800 p-2 shadow-lg transition-colors hover:bg-green-700"
          aria-label="Previous review"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full bg-green-800 p-2 shadow-lg transition-colors hover:bg-green-700"
          aria-label="Next review"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Status */}
        <div className="absolute top-3 right-3 z-10 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
          {currentIndex + 1} / {IMAGES.length}
        </div>
      </div>
    </div>
  );
}
