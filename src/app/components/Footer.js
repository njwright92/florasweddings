import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faSquareFacebook,
  faYelp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/floras_flowers4u/",
    icon: faSquareInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/happytrailsfloral",
    icon: faSquareFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.yelp.com/biz/floras-flowers-rathdrum",
    icon: faYelp,
    label: "Yelp",
  },
  {
    href: "https://www.google.com/search?q=floras+weddings+rathdrum",
    icon: faGoogle,
    label: "Google",
  },
];

export default function Footer() {
  return (
    <footer className="mt-4 w-full bg-white/90 px-4 py-4">
      <div className="mx-auto max-w-5xl">
        {/* Main Content Row */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/logo.webp"
              alt="Flora's Flowers"
              width={140}
              height={70}
              className="h-auto w-28"
            />
          </Link>

          {/* Center - Social & Contact */}
          <div className="flex flex-col items-center gap-2">
            {/* Social Icons */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow transition-transform hover:scale-110"
                  aria-label={`Visit our ${label} page`}
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="h-5 w-5 text-[rgb(var(--color-green))]"
                  />
                </Link>
              ))}
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
              <a
                href="mailto:Florasproflowers@gmail.com"
                className="flex items-center gap-1 text-[rgb(var(--color-green))] hover:underline"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                Florasproflowers@gmail.com
              </a>
              <a
                href="tel:+12087559409"
                className="flex items-center gap-1 text-[rgb(var(--color-green))] hover:underline"
              >
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
                (208) 755-9409
              </a>
            </div>
          </div>

          {/* Shop Link */}
          <Link
            href="https://www.florasflowers4u.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[rgb(var(--color-green))] px-3 py-1.5 text-sm font-medium text-[rgb(var(--color-green))] transition-all hover:bg-[rgb(var(--color-green))] hover:text-white"
          >
            🌸 Visit Shop
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-3 border-t border-gray-200 pt-2 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Flora&apos;s Weddings • Built by{" "}
          <Link
            href="https://njwright92.github.io/paper-kit-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(var(--color-green))] hover:underline"
          >
            Nathan Wright
          </Link>
        </div>
      </div>
    </footer>
  );
}
