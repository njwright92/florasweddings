import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Events() {
  return (
    <div>
      <Header />
      <h1 className="subtitle gallery">Events</h1>
      <ul>
        <li className="text-center">Weddings!</li>
        <li className="text-center">Private Parties!</li>
        <li className="text-center">Business Parties!</li>
        <li className="text-center">Funerals!</li>
      </ul>
      <Footer />
    </div>
  );
}
