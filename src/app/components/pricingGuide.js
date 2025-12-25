import Image from "next/image";

const PRICING_DATA = [
  {
    title: "Ceremony",
    items: [
      "Statement Piece - $175",
      "Pew Decor - $25",
      "Arch/Arbour - $250",
      "Garland (per foot) - $15/ft",
    ],
  },
  {
    title: "Reception",
    items: [
      "Centerpiece - $55",
      "Full Table Design - $125",
      "Cocktail Florals - $25",
      "Pillar Arrangements - $175",
      "Floor Head Table - $250",
    ],
  },
  {
    title: "Bridal Party",
    items: [
      "Bridal Bouquet - $155",
      "Bridesmaid Bouquet - $75",
      "Boutonniere - $20",
      "Corsage - $25",
      "Flower Girl Petals - $20",
      "Hair Combs - $35",
      "Floral Crowns - $55",
    ],
  },
];

export default function PricingGuide({ headingLevel = "h2" }) {
  const Heading = headingLevel;

  return (
    <div className="pricing-container mx-auto">
      <div className="title-container">
        <Heading className="title-alt">Full Service Floral Guide</Heading>
        <Image
          src="/img/flower-PhotoRoom.webp"
          width={200}
          height={100}
          alt="Decorative flower"
          className="-mt-20"
        />
      </div>

      <p className="body-text mb-4 font-bold">
        Here are some initial prices to consider while planning your wedding
        florals
      </p>

      <div className="grid1">
        {PRICING_DATA.map(({ title, items }) => (
          <div key={title} className="pricing-column md:mr-2">
            <h3 className="subtitle">{title}</h3>
            <hr className="horizontal-line mb-4" />
            <ul className="pricing-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="body-text mt-4">
        Note: Prices will vary due to your final designs and types of blooms.
      </p>
    </div>
  );
}
