import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  metadataBase: new URL("https://florasweddings.com"),
  title: {
    default: "Floras Weddings - Wedding Florist for North Idaho & Spokane Area",
    template: "%s | Floras Weddings",
  },
  description:
    "Custom bridal bouquets, wedding flowers, and floral designs for North Idaho and Spokane. Floras Weddings specializes in unique floral arrangements for ceremonies and receptions.",
  keywords: [
    "wedding florist",
    "bridal bouquets",
    "wedding flowers",
    "floral design",
    "custom floral arrangements",
    "wedding florist Coeur d'Alene ID",
    "bridal bouquets Spokane WA",
    "wedding flowers Rathdrum ID",
    "floral design Spokane Valley WA",
    "custom floral arrangements Post Falls ID",
    "wedding flowers Hayden ID",
    "wedding florist Kootenai County",
    "luxury wedding flowers Liberty Lake WA",
    "bespoke wedding bouquets Eastern Washington",
    "event florist North Idaho",
    "reception floral decor Spokane",
    "bridal floral arrangements Deer Park WA",
    "local wedding flowers Spokane Valley",
    "Idaho wedding florist",
    "wedding florist Spokane WA",
  ],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Floras Weddings - Wedding Florist for North Idaho & Spokane Area",
    description:
      "Custom bridal bouquets, wedding flowers, and floral designs for North Idaho and Spokane.",
    url: "https://florasweddings.com",
    siteName: "Floras Weddings",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7e7ce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
