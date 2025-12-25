import Footer from "../components/Footer";
import Header from "../components/Header";
import Collage from "../components/collage";
import ConsultationForm from "../components/consultationForm";

export const metadata = {
  title: "Contact Us - Flora's Weddings | Rathdrum & Coeur d'Alene Florist",
  description:
    "Schedule a wedding flower consultation with Flora's Weddings. Serving Rathdrum, Coeur d'Alene, Spokane, and surrounding areas. Let's discuss your dream wedding florals.",
  openGraph: {
    title: "Contact Flora's Weddings - Wedding Consultation",
    description:
      "Ready to start planning your wedding flowers? Fill out our consultation form to get started.",
    url: "https://florasweddings.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      <ConsultationForm headingLevel="h1" />
      <Collage />
      <Footer />
    </>
  );
}
