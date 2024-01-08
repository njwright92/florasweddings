"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GalleryLinks() {
  const pathname = usePathname();

  const scrollToCollage = useCallback(() => {
    const collageElement = document.getElementById("collage");
    if (collageElement) {
      collageElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const navigateToCollage = useCallback(() => {
    if (pathname === "/") {
      scrollToCollage();
    } else {
      window.location.href = "/#collage";
    }
  }, [pathname, scrollToCollage]);

  useEffect(() => {
    if (pathname === "/" && window.location.hash === "#collage") {
      scrollToCollage();
    }
  }, [pathname, scrollToCollage]);

  return (
    <>
      <h1 className="title">Captivating Wedding Moments</h1>
      <p className="subtitle">
        {" "}
        Discover the Art of Floral Elegance: Diverse and Beautiful Weddings from
        Montana to North Idaho. Each celebration, a unique story of love and
        design.{" "}
      </p>
      <p className="body-text text-center">
        {" "}
        Venture into each gallery to witness the distinct charm and bespoke
        floral artistry that made every wedding unforgettable. Select an image
        to see the full gallery of that event.{" "}
      </p>
      <div className="grid">
        <Link href="/gallery/lumen">
          <div className="image">
            <img
              src="/img/lumen/lumen7.webp"
              alt="Lumen hall cda wedding flowe"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">
              Damschen Wedding at Lumen Hall CDA
            </div>
          </div>
        </Link>

        <Link href="/gallery/butterfield">
          <div className="image">
            <img
              src="/img/butterfield/butterfield5.webp"
              alt="Butterfield Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">
              Butterfield Wedding at the Willows CDA
            </div>
          </div>
        </Link>

        <Link href="/gallery/hauser">
          <div className="image">
            <img
              src="/img/hauser/hauser6.webp"
              alt="Hauser Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">Lee Wedding in Hauser, ID</div>
          </div>
        </Link>

        <Link href="/gallery/homestead">
          <div className="image">
            <img
              src="/img/homestead/homestead12.webp"
              alt="Homestead Barn Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">Homestead Barn Wedding Dover, ID</div>
          </div>
        </Link>

        <Link href="/gallery/hoyer">
          <div className="image">
            <img
              src="/img/hoyer/hoyer3.webp"
              alt="Hoyer Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">Hoyer Wedding in Mica, WA</div>
          </div>
        </Link>

        <Link href="/gallery/cataldo">
          <div className="image">
            <img
              src="/img/cataldo/cataldo2.webp"
              alt="Cataldo Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">
              Weddings at Country barn bed and breakfast Cataldo ID
            </div>
          </div>
        </Link>

        <Link href="/gallery/ditrich">
          <div className="image">
            <img
              src="/img/ditrich/ditrich6.webp"
              alt="Ditrich Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">Ditrich Wedding in Athol, ID</div>
          </div>
        </Link>

        <Link href="/gallery/dretke">
          <div className="image">
            <img
              src="/img/dretke/dretke4.webp"
              alt="Dretke Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">
              Dretke Wedding at The Elkins Resort
            </div>
          </div>
        </Link>

        <Link href="/gallery/flores">
          <div className="image">
            <img
              src="/img/flores/flores14.webp"
              alt="Flores Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">
              Flores Wedding on a Cruise Boat CDA
            </div>
          </div>
        </Link>

        <Link href="/gallery/hirschel">
          <div className="image">
            <img
              src="/img/hirschel/hirschel3.webp"
              alt="Hirschel Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">
              Hirschel Wedding at the Hagadone Event Center
            </div>
          </div>
        </Link>

        <Link href="/gallery/jewett">
          <div className="image">
            <img
              src="/img/jewett/jewett9.webp"
              alt="Jewett Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">Ross wedding at The Jewett House</div>
          </div>
        </Link>

        <Link href="/gallery/justin">
          <div className="image">
            <img
              src="/img/justin/justin8.webp"
              alt="Justin Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">A Wright wedding in Rathdrum, ID</div>
          </div>
        </Link>

        <Link href="/gallery/knox">
          <div className="image">
            <img
              src="/img/knox/knox10.webp"
              alt="Knox Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">Knox Wedding at the CDA Casino</div>
          </div>
        </Link>

        <Link href="/gallery/koho">
          <div className="image">
            <img
              src="/img/koho/koho5.webp"
              alt="Koho Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">Koho Wedding Firebrand Cocallala</div>
          </div>
        </Link>

        <Link href="/gallery/suko">
          <div className="image">
            <img
              src="/img/suko/suko5.webp"
              alt="Suko Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">Suko Wedding Firebrand Cocallala</div>
          </div>
        </Link>

        <Link href="/gallery/trezzi">
          <div className="image">
            <img
              src="/img/trezzi/trezzi4.webp"
              alt="Trezzi Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">
              Knox Wedding at Trezzi Farm Winery WA
            </div>
          </div>
        </Link>

        <Link href="/gallery/wabs">
          <div className="image">
            <img
              src="/img/wabs/wabs3.webp"
              alt="Wabs Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">The Wabs Wedding Idaho</div>
          </div>
        </Link>

        <Link href="/gallery/webster">
          <div className="image">
            <img
              src="/img/webster/webster12.webp"
              alt="Webster Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">
              Webster Wedding at the mountain sky guest ranch, MO
            </div>
          </div>
        </Link>

        <Link href="/gallery/wright">
          <div className="image">
            <img
              src="/img/wright/wright7.webp"
              alt="Wright Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">
              Another Wright Wedding at Idaho Shakespeare Festival park, Boise
            </div>
          </div>
        </Link>
        <Link href="/gallery/misc">
          <div className="image">
            <img
              src="/img/misc/misc17.webp"
              alt="Miscellaneous Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />

            <div className="image-title">Miscellaneous Small Weddings</div>
          </div>
        </Link>
        <div className="image" onClick={navigateToCollage}>
          <img
            src="/img/collage/collage4.webp"
            alt="collage of custom florals Flowers"
            className="image-placeholder"
            loading="lazy"
          />

          <div className="image-title">Collage of custom florals</div>
        </div>
      </div>
    </>
  );
}
