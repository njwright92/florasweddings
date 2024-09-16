import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Floras Weddings - Wedding Florist for North Idaho & Spokane Area",
  description:
    "Custom bridal bouquets, wedding flowers, and floral designs for North Idaho and Spokane. Floras Weddings specializes in unique floral arrangements for ceremonies and receptions.",
  keywords:
    "wedding florist, bridal bouquets, wedding flowers, floral design, custom floral arrangements, wedding florist Coeur d'Alene ID, bridal bouquets Spokane WA, wedding flowers Rathdrum ID, floral design Spokane Valley WA, custom floral arrangements Post Falls ID, wedding flowers Hayden ID, wedding florist Kootenai County, luxury wedding flowers Liberty Lake WA, bespoke wedding bouquets Eastern Washington, event florist North Idaho, reception floral decor Spokane, bridal floral arrangements Deer Park WA, local wedding flowers Spokane Valley, Idaho wedding florist, wedding florist Spokane WA",
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
      </Head>
      <body>{children}</body>
    </html>
  );
}
