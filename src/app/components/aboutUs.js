import Image from "next/image";

export default function AboutUs({ headingLevel = "h2" }) {
  const Heading = headingLevel;

  return (
    <section className="px-4">
      <div className="title-container">
        <Heading className="title">About Flora&apos;s Flowers</Heading>
        <Image
          src="/img/flower-PhotoRoom.webp"
          width={200}
          height={100}
          alt="Decorative flower"
          className="-mt-20"
        />
      </div>

      <p className="subtitle text-center">
        Hello there! I&apos;m Staci, the creative force behind Flora&apos;s
        Flowers.
      </p>

      {/* Staci Section */}
      <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-4 md:flex-row md:items-start md:gap-8">
        <div className="flex flex-shrink-0 flex-col items-center">
          <Image
            src="/img/staci.webp"
            alt="Staci Huffman - Owner of Flora's Flowers"
            width={200}
            height={200}
            className="rounded-full shadow-md"
          />
          <h3 className="subtitle mt-3">Staci Huffman</h3>
        </div>
        <p className="body-text md:text-left">
          I bring three decades of expertise in the floral industry, showcasing
          my skills as a formally trained professional floral designer. Renowned
          for creating unique arrangements with an artistic touch.
        </p>
      </div>

      {/* Story Paragraphs */}
      <div className="mx-auto mt-8 max-w-4xl space-y-6">
        <p className="body-text">
          With a passion for floral design cultivated at JJ Neville&apos;s
          School of Floral Design in Vancouver, Canada, I&apos;ve embarked on a
          journey to bring the beauty of flowers to Rathdrum, Idaho. Inspired by
          my family&apos;s rich history, I&apos;ve named my shop after my
          Grandpa Flora, a talented artist who left a mark on the world. My mom,
          Peggy, owned a flower shop in Rathdrum and encouraged me to become a
          florist. I started my education in her flower shop at the age of 16
          before I ventured off to design school.
        </p>

        <p className="body-text">
          As a stay-at-home mom turned floral artist, I&apos;m thrilled to offer
          you a full-service flower shop experience right from my home studio in
          Rathdrum. Delight in the elegance of locally sourced blooms from Idaho
          growers and Spokane&apos;s wholesale markets. Whether it&apos;s
          weddings, events or any special occasion, let Flora&apos;s Flowers add
          a touch of floral magic.
        </p>

        <p className="body-text">
          Enjoy the convenience of deliveries to Rathdrum and surrounding areas.
          Your support means the world to me, and I can&apos;t wait to bring a
          burst of beauty into your life.
        </p>

        <p className="body-text font-medium">
          Thank you for considering Flora&apos;s Flowers for your next floral
          moment!
        </p>
      </div>

      {/* Map */}
      <div className="relative mx-auto mt-10 aspect-video max-w-4xl overflow-hidden rounded-lg shadow-md">
        <Image
          src="/img/map.webp"
          alt="Service area map - Rathdrum and surrounding areas in North Idaho"
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
