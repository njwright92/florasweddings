export default function Home() {
  return (
    <main className="main">
      <h1 className="title mb-8">Floras Weddings</h1>
      <p className="subtitle mb-12">
        Elegant Floral Designs for Your Special Day
      </p>

      <section className="gallery mb-24">
        {/* Gallery or featured content can go here */}
        <p className="body-text">
          Explore our bespoke floral arrangements, crafted with passion and
          expertise.
        </p>
      </section>

      <section className="services">
        {/* Services or offerings can be listed here */}
        <div className="service-card">
          <h2 className="heading mb-4">Wedding Bouquets</h2>
          <p className="body-text">
            Beautifully designed bouquets that bring your wedding theme to life.
          </p>
        </div>
        {/* More service cards can be added here */}
      </section>

      <footer className="footer">
        <p className="body-text">
          © {new Date().getFullYear()} Floras Weddings. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
