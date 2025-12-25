import Footer from "../components/Footer";
import Header from "../components/Header";
import PricingGuide from "../components/pricingGuide";

export const metadata = {
  title: "Wedding Flower Pricing - Flora's Weddings | North Idaho Florist",
  description:
    "Transparent pricing guide for wedding flowers including bouquets, ceremony decor, and reception arrangements. Custom floral design for every budget.",
  openGraph: {
    title: "Wedding Flower Pricing Guide - Flora's Weddings",
    description:
      "View our starting prices for bridal bouquets, centerpieces, and full-service wedding floral design.",
    url: "https://florasweddings.com/pricing",
  },
};

export default function Pricing() {
  return (
    <>
      <Header />
      <PricingGuide headingLevel="h1" />
      <Footer />
    </>
  );
}
