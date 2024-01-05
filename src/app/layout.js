import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Head from "next/head";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Floras Weddings",
  description:
    "Discover bespoke floral arrangements and bouquets crafted with love and expertise at Floras Weddings. Perfect for weddings, anniversaries, and all your memorable occasions.",
  keywords:
    "Floras Weddings, wedding florist, bridal bouquets, wedding flowers, floral design, marriage bouquets, elegant flowers, beautiful blooms, custom floral arrangements, wedding day flowers, in sickness and health, love bouquets, romantic flowers, special day florals, flower decor, wedding ceremony, reception flowers, wedding florist Rathdrum ID, bridal bouquets Pacific Northwest, wedding flowers Hayden ID, floral design Post Falls ID, marriage bouquets Coeur D'Alene ID, elegant flowers Kootenai County Idaho, beautiful blooms Eastern Washington, custom floral arrangements Spokane WA, wedding day flowers Spokane Valley WA, love bouquets Liberty Lake WA, romantic flowers Otis Orchards WA, special day florals Green Bluff WA, flower decor Trentwood WA, wedding ceremony Deer Park WA, reception flowers Mead WA, florist Montana, local wedding flowers, regional floral designs, event florist Pacific Northwest, local florist services Idaho, flowers for special occasions Washington, bespoke wedding florals, luxury bouquets Montana, handcrafted floral arrangements, Rathdrum ID, Pacific Northwest, Hayden ID, Post Falls ID, Coeur D'Alene ID, Kootenai County Idaho, Eastern Washington, Spokane WA, Spokane Valley WA, Liberty Lake WA, Otis Orchards WA, Green Bluff WA, Trentwood WA, Deer Park WA, Mead WA, Montana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <Head>
        <title>{metadata.title}</title>
        <link
          rel="icon"
          href="/icon.png"
          type="image/png"
          sizes="any"
          className="rounded-xl"
        />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-adsense-account"
          content="ca-pub-6695615601481816"
        ></meta>
      </Head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
