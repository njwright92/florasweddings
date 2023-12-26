import Link from "next/link";
import {
  PhotoIcon,
  TagIcon,
  CurrencyDollarIcon,
  CogIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { SocialIcon } from "next-social-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-subtitle">Thanks for visiting Floras Weddings!</p>
        <nav className="footer-nav">
          <Link href="#gallery" passHref>
            <PhotoIcon className="h-5 w-5 inline-block footer-link" />
            Gallery
          </Link>
          <Link href="#services" passHref>
            <CogIcon className="h-5 w-5 inline-block footer-link" />
            Services
          </Link>
          <Link href="#packages" passHref>
            <TagIcon className="h-5 w-5 inline-block footer-link" />
            Packages
          </Link>
          <Link href="#pricing" passHref>
            <CurrencyDollarIcon className="h-5 w-5 inline-block footer-link" />
            Pricing
          </Link>
          <Link href="mailto:contact@florasweddings.com" passHref>
            <EnvelopeIcon className="h-5 w-5 inline-block footer-link" />
            Contact Me
          </Link>
        </nav>
        <div className="footer-social">
          <div className="social-media-section">
            <p className="footer-subtitle">Follow me on social media:</p>
            <div className="flex justify-center items-center">
              <a
                href="https://www.instagram.com/florasweddings"
                className="footer-social-link mx-2"
              >
                <SocialIcon size={32} platform="instagram" />
              </a>
              <a
                href="https://www.facebook.com/florasweddings"
                className="footer-social-link mx-2"
              >
                <SocialIcon size={32} platform="facebook" />
              </a>
            </div>
          </div>

          <div className="footer-social">
            <p className="footer-subtitle">Visit my florist site at:</p>
            <div className="flex justify-center items-center">
              <a
                href="https://www.florasflowers.com"
                className="footer-social-link mx-2"
              >
                🌸 Floras Flowers
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="body-text">
          © {new Date().getFullYear()} Floras Weddings. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
