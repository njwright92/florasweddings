"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function GalleryLinks() {
  const pathname = usePathname();
  const collageRef = useRef(null);

  useEffect(() => {
    collageRef.current = document.getElementById("collage");

    if (pathname === "/" && window.location.hash === "#collage") {
      collageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  const navigateToCollage = () => {
    if (pathname === "/") {
      collageRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#collage";
    }
  };

  const galleries = [
    {
      href: "/gallery/lumen",
      src: "/img/lumen/lumen7.webp",
      alt: "Lumen hall cda wedding flower",
      title: "Damschen Wedding at Lumen Hall CDA",
    },
    {
      href: "/gallery/butterfield",
      src: "/img/butterfield/butterfield5.webp",
      alt: "Butterfield Wedding Flowers",
      title: "Butterfield Wedding at the Willows CDA",
    },
    {
      href: "/gallery/hauser",
      src: "/img/hauser/hauser6.webp",
      alt: "Hauser Wedding Flowers",
      title: "Lee Wedding in Hauser, ID",
    },
    {
      href: "/gallery/homestead",
      src: "/img/homestead/homestead12.webp",
      alt: "Homestead Barn Wedding Flowers",
      title: "Homestead Barn Wedding Dover, ID",
    },
    {
      href: "/gallery/hoyer",
      src: "/img/hoyer/hoyer3.webp",
      alt: "Hoyer Wedding Flowers",
      title: "Hoyer Wedding in Mica, WA",
    },
    {
      href: "/gallery/cataldo",
      src: "/img/cataldo/cataldo2.webp",
      alt: "Cataldo Wedding Flowers",
      title: "Weddings at Country barn bed and breakfast Cataldo ID",
    },
    {
      href: "/gallery/ditrich",
      src: "/img/ditrich/ditrich6.webp",
      alt: "Ditrich Wedding Flowers",
      title: "Ditrich Wedding in Athol, ID",
    },
    {
      href: "/gallery/dretke",
      src: "/img/dretke/dretke4.webp",
      alt: "Dretke Wedding Flowers",
      title: "Dretke Wedding at The Elkins Resort",
    },
    {
      href: "/gallery/flores",
      src: "/img/flores/flores14.webp",
      alt: "Flores Wedding Flowers",
      title: "Flores Wedding on a Cruise Boat CDA",
    },
    {
      href: "/gallery/hirschel",
      src: "/img/hirschel/hirschel3.webp",
      alt: "Hirschel Wedding Flowers",
      title: "Hirschel Wedding at the Hagadone Event Center",
    },
    {
      href: "/gallery/jewett",
      src: "/img/jewett/jewett9.webp",
      alt: "Jewett Wedding Flowers",
      title: "Ross wedding at The Jewett House",
    },
    {
      href: "/gallery/justin",
      src: "/img/justin/justin8.webp",
      alt: "Justin Wedding Flowers",
      title: "A Wright wedding in Rathdrum, ID",
    },
    {
      href: "/gallery/knox",
      src: "/img/knox/knox10.webp",
      alt: "Knox Wedding Flowers",
      title: "Knox Wedding at the CDA Casino",
    },
    {
      href: "/gallery/koho",
      src: "/img/koho/koho5.webp",
      alt: "Koho Wedding Flowers",
      title: "Koho Wedding Firebrand Cocallala",
    },
    {
      href: "/gallery/suko",
      src: "/img/suko/suko5.webp",
      alt: "Suko Wedding Flowers",
      title: "Suko Wedding Firebrand Cocallala",
    },
    {
      href: "/gallery/trezzi",
      src: "/img/trezzi/trezzi4.webp",
      alt: "Trezzi Wedding Flowers",
      title: "Knox Wedding at Trezzi Farm Winery WA",
    },
    {
      href: "/gallery/wabs",
      src: "/img/wabs/wabs3.webp",
      alt: "Wabs Wedding Flowers",
      title: "The Wabs Wedding Idaho",
    },
    {
      href: "/gallery/webster",
      src: "/img/webster/webster12.webp",
      alt: "Webster Wedding Flowers",
      title: "Webster Wedding at the mountain sky guest ranch, MO",
    },
    {
      href: "/gallery/wright",
      src: "/img/wright/wright7.webp",
      alt: "Wright Wedding Flowers",
      title: "Another Wright Wedding at Idaho Shakespeare Festival park, Boise",
    },
    {
      href: "/gallery/misc",
      src: "/img/misc/misc17.webp",
      alt: "Miscellaneous Wedding Flowers",
      title: "Miscellaneous Small Weddings",
    },
  ];

  return (
    <>
      <h1 className="title">Captivating Wedding Moments</h1>
      <p className="subtitle">
        Discover the Art of Floral Elegance: Diverse and Beautiful Weddings from
        Montana to North Idaho. Each celebration, a unique story of love and
        design.
      </p>
      <p className="body-text text-center">
        Venture into each gallery to witness the distinct charm and bespoke
        floral artistry that made every wedding unforgettable. Select an image
        to see the full gallery of that event.
      </p>
      <div className="grid">
        {galleries.map((gallery, index) => (
          <Link href={gallery.href} key={index}>
            <div className="image">
              <Image
                src={gallery.src}
                alt={gallery.alt}
                width={400}
                height={300}
                className="image-placeholder"
              />
              <div className="image-title">{gallery.title}</div>
            </div>
          </Link>
        ))}

        <div className="image" onClick={navigateToCollage}>
          <Image
            src="/img/collage/collage4.webp"
            alt="collage of custom florals Flowers"
            width={400}
            height={300}
            className="image-placeholder"
          />
          <div className="image-title">Collage of custom florals</div>
        </div>
      </div>
    </>
  );
}
