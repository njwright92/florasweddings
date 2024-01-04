import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <div>
      <Header />
      <h1 className="title">Captivating Wedding Moments</h1>
      <img
        src="./img/flower-PhotoRoom.webp"
        width={200}
        height={100}
        loading="lazy"
        alt="Flower"
        className="-mt-20"
      />
      <p className="subtitle">
        Explore a curated selection of weddings across Montana, Washington, and
        North Idaho, showcasing unique floral designs and memorable
        celebrations.
      </p>
      <div className="grid">
        {/* Alter Wedding */}
        <Link href="/gallery/wabs">
          <div className="image">
            <img
              src="/img/gallery/alter.webp"
              alt="Wabs Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Wabs Wedding</span>
            </div>
          </div>
        </Link>

        {/* Butterfield17 Wedding */}
        <Link href="/gallery/butterfield">
          <div className="image">
            <img
              src="/img/gallery/butterfield17.webp"
              alt="Butterfield Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Butterfield Wedding</span>
            </div>
          </div>
        </Link>

        {/* Cataldo5 Wedding */}
        <Link href="/gallery/cataldo">
          <div className="image">
            <img
              src="/img/gallery/cataldo5.webp"
              alt="Cataldo Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Cataldo Weddings</span>
            </div>
          </div>
        </Link>
        {/* Ditrich9 Wedding */}
        <Link href="/gallery/ditrich">
          <div className="image">
            <img
              src="/img/gallery/ditrich9.webp"
              alt="Ditrich Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Ditrich Wedding</span>
            </div>
          </div>
        </Link>

        {/* Dretke7 Wedding */}
        <Link href="/gallery/dretke">
          <div className="image">
            <img
              src="/img/gallery/dretke7.webp"
              alt="Dretke Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Dretke Wedding</span>
            </div>
          </div>
        </Link>

        {/* Flores2 Wedding */}
        <Link href="/gallery/flores">
          <div className="image">
            <img
              src="/img/gallery/flores2.webp"
              alt="Flores Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Flores Wedding</span>
            </div>
          </div>
        </Link>

        {/* Hirschel4 Wedding */}
        <Link href="/gallery/hirschel">
          <div className="image">
            <img
              src="/img/gallery/hirschel4.webp"
              alt="Hirschel Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Hirschel Wedding</span>
            </div>
          </div>
        </Link>

        {/* Jewett5 Wedding */}
        <Link href="/gallery/jewett">
          <div className="image">
            <img
              src="/img/gallery/jewett5.webp"
              alt="Jewett Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Jewett Wedding</span>
            </div>
          </div>
        </Link>

        {/* Justin6 Wedding */}
        <Link href="/gallery/justin">
          <div className="image">
            <img
              src="/img/gallery/justin6.webp"
              alt="Justin Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Justin and Kaylee Wedding</span>
            </div>
          </div>
        </Link>

        {/* Knox7 Wedding */}
        <Link href="/gallery/knox">
          <div className="image">
            <img
              src="/img/gallery/knox7.webp"
              alt="Knox Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Knox Wedding</span>
            </div>
          </div>
        </Link>

        {/* Koho6 Wedding */}
        <Link href="/gallery/koho">
          <div className="image">
            <img
              src="/img/gallery/koho6.webp"
              alt="Koho Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Koho Wedding</span>
            </div>
          </div>
        </Link>

        {/* Misc15 Wedding */}
        <Link href="/gallery/misc">
          <div className="image">
            <img
              src="/img/gallery/misc15.webp"
              alt="Miscellaneous Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">Miscellaneous Wedding</span>
            </div>
          </div>
        </Link>

        {/* Suko6 Wedding */}
        <Link href="/gallery/suko">
          <div className="image">
            <img
              src="/img/gallery/suko6.webp"
              alt="Suko Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Suko Wedding</span>
            </div>
          </div>
        </Link>

        {/* Trezzi1 Wedding */}
        <Link href="/gallery/trezzi">
          <div className="image">
            <img
              src="/img/gallery/trezzi1.webp"
              alt="Trezzi Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Trezzi Wedding</span>
            </div>
          </div>
        </Link>

        {/* Webster2 Wedding */}
        <Link href="/gallery/webster">
          <div className="image">
            <img
              src="/img/gallery/webster2.webp"
              alt="Webster Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Webster Wedding</span>
            </div>
          </div>
        </Link>

        {/* Wright3 Wedding */}
        <Link href="/gallery/wright">
          <div className="image">
            <img
              src="/img/gallery/wright3.webp"
              alt="Wright Wedding Flowers"
              className="image-placeholder"
              loading="lazy"
            />
            <div className="image-overlay1">
              <span className="image-title">The Wright Wedding</span>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
