export default function PricingGuide() {
  return (
    <>
      <div className="pricing-container mx-auto">
        <div className="title-container">
          <h1 className="title-alt">Full Service Floral Guide</h1>
          <img
            src="./img/flower-PhotoRoom.webp"
            width={200}
            height={100}
            loading="lazy"
            alt="Flower"
            className="-mt-20"
          />
        </div>

        <p className="body-text mb-4 font-bold">
          Here are some initial prices to consider while planning your wedding
          florals
        </p>

        <div className="grid1">
          <div className="pricing-column">
            <h2 className="subtitle">Ceremony</h2>
            <hr className="mb-4 horizontal-line" />
            <ul className="pricing-list">
              <li>Statement Piece - $175</li>
              <li>Pew Decor - $25</li>
              <li>Arch/Arbour - $250</li>
              <li>Garland (per foot) - $15/ft</li>
            </ul>
          </div>
          <div className="pricing-column">
            <h2 className="subtitle">Reception</h2>
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
            <h2 className="subtitle">Bridal Party</h2>
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
    </>
  );
}
