import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Pricing() {
  return (
    <>
      <Header />
      <div className="pricing-container">
        <h1 className="title">Full Service Floral Guide</h1>

        <h2 className="subtitle">No idea how much wedding flowers cost?</h2>
        <p className="body-text mb-4">
          Here are some starting costs to give you an idea of what our prices
          are.
        </p>
        <div className="grid1">
          <div className="pricing-column">
            <h3 className="subtitle">Ceremony</h3>
            <hr className="mb-4 horizontal-line" />
            <ul className="pricing-list">
              <li>Statement Piece - $175</li>
              <li>Pew Decor - $25</li>
              <li>Arch/Arbour - $250</li>
              <li>Garland (per foot) - $15/ft</li>
            </ul>
          </div>
          <div className="pricing-column">
            <h3 className="subtitle">Reception</h3>
            <hr className="mb-4 horizontal-line" />
            <ul className="pricing-list">
              <li>Centerpiece - $55</li>
              <li>Full Table Design - $125</li>
              <li>Cocktail Florals - $25</li>
              <li>Pillar Arrangements - $175</li>
              <li>Floor Head Table - $250</li>
            </ul>
          </div>
          <div className="pricing-column">
            <h3 className="subtitle">Bridal Party</h3>
            <hr className="mb-4 horizontal-line" />
            <ul className="pricing-list">
              <li>Bridal Bouquet - $155</li>
              <li>Bridesmaid Bouquet - $75</li>
              <li>Boutonniere - $20</li>
              <li>Corsage - $25</li>
              <li>Flower Girl Petals - $20</li>
              <li>Hair Combs - $35</li>
              <li>Floral Crowns - $55</li>
            </ul>
          </div>
        </div>
        <p className="body-text mt-4">
          Note: Prices will vary due to your final designs and types of blooms.
        </p>
      </div>
      <Footer />
    </>
  );
}
