export default function sitemap() {
  const baseUrl = "https://florasweddings.com";

  const galleries = [
    "butterfield",
    "cataldo",
    "ditrich",
    "dretke",
    "flores",
    "hauser",
    "hirschel",
    "homestead",
    "hoyer",
    "jewett",
    "justin",
    "knox",
    "koho",
    "lumen",
    "misc",
    "suko",
    "trezzi",
    "wabs",
    "webster",
    "wright",
  ];

  const staticPages = [
    { url: "", priority: 1.0 },
    { url: "/contact", priority: 0.8 },
    { url: "/about", priority: 0.8 },
    { url: "/gallery", priority: 0.9 },
    { url: "/faqs", priority: 0.7 },
    { url: "/pricing", priority: 0.8 },
  ];

  const galleryPages = galleries.map((gallery) => ({
    url: `${baseUrl}/gallery/${gallery}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const pages = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.priority,
  }));

  return [...pages, ...galleryPages];
}
