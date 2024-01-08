export default function AboutUs() {
  return (
    <>
      <div className="title-container">
        <h1 className="title">About Flora&apos;s Flowers</h1>
        <img
          src="/img/flower-PhotoRoom.webp"
          width={200}
          height={100}
          loading="lazy"
          alt="Flower"
          className="-mt-20"
        />
      </div>
      <h2 className="subtitle text-center">
        Hello there! I&apos;m Staci, the creative force behind Flora&apos;s
        Flowers.
      </h2>

      <div className="flex flex-col md:flex-row items-center">
        <img
          src="/img/staci.webp"
          alt="Staci"
          className="rounded-full m-2"
          loading="lazy"
        />
        <h3 className="subtitle">Staci Huffman</h3>
        <p className="body-text">
          I bring three decades of expertise in the floral industry, showcasing
          my skills as a formally trained professional floral designer. Renowned
          for creating unique arrangements with an artistic touch.
        </p>
      </div>
      <br />
      <p className="body-text p-2">
        With a passion for floral design cultivated at JJ Neville&apos;s School
        of Floral Design in Vancouver, Canada, I&apos;ve embarked on a journey
        to bring the beauty of flowers to Rathdrum, Idaho. Inspired by my
        family&apos;s rich history, I&apos;ve named my shop after my Grandpa
        Flora, a talented artist who left a mark on the world. My mom, Peggy,
        owned a flower shop in Rathdrum and encouraged me to become a florist. I
        started my education in her flower shop at the age of 16 before I
        ventured off to design school.
        <br />
        <br />
        As a stay-at-home mom turned floral artist, I&apos;m thrilled to offer
        you a full-service flower shop experience right from my home studio in
        Rathdrum. Delight in the elegance of locally sourced blooms from Idaho
        growers and Spokane&apos;s wholesale markets. Whether it&apos;s
        weddings, events or any special occasion, let Flora&apos;s Flowers add a
        touch of floral magic.
        <br />
        <br />
        Enjoy the convenience of deliveries to Rathdrum and surrounding areas.
        Your support means the world to me, and I can&apos;t wait to bring a
        burst of beauty into your life.
        <br />
        <br />
        Thank you for considering Flora&apos;s Flowers for your next floral
        moment!
      </p>
      <br />
      <img
        src="/img/map.webp"
        alt="Map"
        loading="lazy"
        className="w-full my-4 h-auto border-white border-2 rounded-lg"
      />
    </>
  );
}
