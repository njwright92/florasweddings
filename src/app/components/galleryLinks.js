"use client";

import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const GALLERIES = [
  { slug: "lumen", img: "lumen7", title: "Damschen Wedding at Lumen Hall CDA" },
  {
    slug: "butterfield",
    img: "butterfield5",
    title: "Butterfield Wedding at the Willows CDA",
  },
  { slug: "hauser", img: "hauser6", title: "Lee Wedding in Hauser, ID" },
  {
    slug: "homestead",
    img: "homestead12",
    title: "Homestead Barn Wedding Dover, ID",
  },
  { slug: "hoyer", img: "hoyer3", title: "Hoyer Wedding in Mica, WA" },
  { slug: "cataldo", img: "cataldo2", title: "Country Barn B&B Cataldo, ID" },
  { slug: "ditrich", img: "ditrich6", title: "Ditrich Wedding in Athol, ID" },
  { slug: "dretke", img: "dretke4", title: "Dretke Wedding at Elkins Resort" },
  {
    slug: "flores",
    img: "flores14",
    title: "Flores Wedding on a Cruise Boat CDA",
  },
  {
    slug: "hirschel",
    img: "hirschel3",
    title: "Hirschel Wedding at Hagadone Event Center",
  },
  { slug: "jewett", img: "jewett9", title: "Ross Wedding at The Jewett House" },
  { slug: "justin", img: "justin8", title: "Wright Wedding in Rathdrum, ID" },
  { slug: "knox", img: "knox10", title: "Knox Wedding at the CDA Casino" },
  { slug: "koho", img: "koho5", title: "Koho Wedding at Firebrand Cocolalla" },
  { slug: "suko", img: "suko5", title: "Suko Wedding at Firebrand Cocolalla" },
  {
    slug: "trezzi",
    img: "trezzi4",
    title: "Knox Wedding at Trezzi Farm Winery, WA",
  },
  { slug: "wabs", img: "wabs3", title: "The Wabs Wedding, Idaho" },
  {
    slug: "webster",
    img: "webster12",
    title: "Webster Wedding at Mountain Sky Ranch, MT",
  },
  {
    slug: "wright",
    img: "wright7",
    title: "Wright Wedding at Idaho Shakespeare Festival, Boise",
  },
  { slug: "misc", img: "misc17", title: "Miscellaneous Small Weddings" },
];

function GalleryCard({ href, src, alt, title, onClick }) {
  const content = (
    <div className="group relative aspect-square overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-white/80 px-2 py-1.5 text-center text-sm text-gray-700">
        <span className="line-clamp-1">{title}</span>
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="w-full cursor-pointer text-left">
        {content}
      </button>
    );
  }

  return <Link href={href}>{content}</Link>;
}

export default function GalleryLinks({ headingLevel = "h2" }) {
  const Heading = headingLevel;
  const router = useRouter();
  const pathname = usePathname();

  const navigateToCollage = useCallback(() => {
    if (pathname === "/") {
      document
        .getElementById("collage")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#collage");
    }
  }, [pathname, router]);

  return (
    <section className="px-4">
      <Heading className="title">Captivating Wedding Moments</Heading>
      <p className="subtitle">
        Discover the Art of Floral Elegance: Beautiful weddings from Montana to
        North Idaho.
      </p>
      <p className="body-text mx-auto mb-6 max-w-3xl text-center">
        Select an image to view the full gallery of that event.
      </p>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {GALLERIES.map(({ slug, img, title }) => (
          <GalleryCard
            key={slug}
            href={`/gallery/${slug}`}
            src={`/img/${slug}/${img}.webp`}
            alt={`${title} - Wedding Flowers`}
            title={title}
          />
        ))}

        <GalleryCard
          src="/img/collage/collage4.webp"
          alt="Collage of custom floral arrangements"
          title="Custom Florals Collage"
          onClick={navigateToCollage}
        />
      </div>
    </section>
  );
}
