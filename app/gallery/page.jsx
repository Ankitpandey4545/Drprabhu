import { readdirSync } from "node:fs";
import path from "node:path";

export const metadata = {
  title: "Gallery | Dr. Prabhu Orthopaedic & ENT Centre",
  description: "Browse orthopaedic, ENT and clinic images from Dr. Prabhu Orthopaedic & ENT Centre.",
};

const categories = [
  {
    id: "orthopaedic-gallery",
    folder: "orthopaedic",
    label: "Orthopaedic",
    eyebrow: "BONES, JOINTS & MOVEMENT",
    titles: {
      "ortho-01.jpg": "Joint replacement",
      "ortho-02.jpg": "Tennis elbow",
      "ortho-03.jpg": "Arthroscopy",
      "ortho-04.jpg": "Flat foot",
      "ortho-05.jpg": "Bone health",
      "ortho-06.jpg": "Neck pain",
      "ortho-07.jpg": "Our expert team",
      "ortho-08.jpg": "Frozen shoulder",
      "ortho-09.jpg": "Plantar fasciitis",
      "ortho-10.jpg": "Cast application",
    },
  },
  {
    id: "ent-gallery",
    folder: "ent",
    label: "ENT",
    eyebrow: "EAR, NOSE & THROAT",
    titles: {
      "ent-01.jpg": "Ear piercing care",
      "ent-02.jpg": "Hearing aid solutions",
      "ent-03.jpg": "ENT infection care",
      "ent-04.jpg": "Vertigo treatment",
      "ent-05.jpg": "Allergy treatment",
      "ent-06.jpg": "Complete ENT care",
      "ent-07.jpg": "ENT services",
      "ent-08.jpg": "ENT infection care",
      "ent-09.jpg": "ENT consultation",
      "ent-10.jpg": "Ear wax removal",
    },
  },
  {
    id: "clinic-gallery",
    folder: "clinic",
    label: "Clinic",
    eyebrow: "OUR CENTRE & DOCTORS",
    titles: {
      "doctor-jagadish.jpeg": "Dr. Jagadish Prabhu",
      "doctor-shilpa.jpg": "Dr. Shilpa Prabhu",
      "clinic-logo.png.jpeg": "Dr. Prabhu Centre logo",
    },
  },
];

function listImages(folder, titles) {
  const directory = path.join(process.cwd(), "public", "images", folder);
  let files = [];
  try {
    files = readdirSync(directory, { withFileTypes: true })
      .filter((entry) => entry.isFile() && /\.(avif|gif|jpe?g|png|webp)$/i.test(entry.name))
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }

  return files.map((file) => {
    const fallbackTitle = path.basename(file, path.extname(file)).replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
    const title = titles[file] || fallbackTitle;
    return { title, src: `/images/${folder}/${encodeURIComponent(file)}`, alt: `${title} — Dr. Prabhu Centre` };
  });
}

function ClinicLogo() {
  return <a className="brand" href="/" aria-label="Dr Prabhu Centre home"><img className="clinic-logo" src="/images/clinic/clinic-logo.png.jpeg" alt="Dr Prabhu Orthopaedic & ENT Centre"/></a>;
}

function GallerySection({ category, images }) {
  return <section className="gallery-section" id={category.id}>
    <div className="gallery-section-heading"><div><span className="eyebrow">{category.eyebrow}</span><h2>{category.label} gallery</h2></div><span>{images.length} images</span></div>
    {images.length ? <div className="gallery-grid">{images.map(({ title, alt, src }) => <figure className="gallery-card" key={src}><div className="gallery-image-wrap"><img src={src} alt={alt} loading="lazy"/></div><figcaption>{title}</figcaption></figure>)}</div> : <p className="gallery-empty">Images added to this folder will appear here.</p>}
  </section>;
}

function FolderCard({ category, images }) {
  return <a className="gallery-folder-card" href={`#${category.id}`}>
    <div className="gallery-folder-preview">{images.slice(0, 4).map((image) => <img key={image.src} src={image.src} alt="" loading="lazy"/>)}{images.length === 0 && <span>+</span>}</div>
    <div className="gallery-folder-meta"><div><span>{category.eyebrow}</span><h2>{category.label}</h2></div><b>{images.length}</b></div>
    <span className="gallery-folder-link">Open folder <i>↗</i></span>
  </a>;
}

export default function GalleryPage() {
  const folders = categories.map((category) => ({ category, images: listImages(category.folder, category.titles) }));

  return <main className="gallery-page">
    <header className="profile-header shell"><ClinicLogo/><a className="profile-back" href="/">← Back to home</a></header>
    <nav className="nav profile-nav"><div className="shell nav-inner"><a href="/">Home</a><a href="/doctors">Doctor Profile</a><a className="profile-nav-active" href="/gallery">Gallery</a><a href="/#video">Video</a><a href="/#home-physio">Home Physio</a><a href="/contact">Contact</a><a className="online-consult-link" href="https://wa.me/917483108995?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20an%20online%20consultation." target="_blank" rel="noreferrer">Online Consultation ↗</a></div></nav>
    <section className="gallery-hero"><div className="shell"><span className="eyebrow">DR. PRABHU ORTHOPAEDIC &amp; ENT CENTRE</span><h1>Explore our gallery</h1><p>Choose a folder to browse related centre, Orthopaedic or ENT images.</p></div></section>
    <section className="shell gallery-folder-section" aria-label="Gallery folders"><div className="gallery-folder-grid">{folders.map(({ category, images }) => <FolderCard key={category.folder} category={category} images={images}/>)}</div></section>
    <div className="shell gallery-content">{folders.map(({ category, images }) => <GallerySection key={category.folder} category={category} images={images}/>)}</div>
    <section className="gallery-contact"><div className="shell gallery-contact-inner"><div><span className="eyebrow">WE’RE HERE TO HELP</span><h2>Need more information?</h2></div><a href="/contact">Contact the centre <span>↗</span></a></div></section>
    <footer className="profile-footer"><div className="shell"><ClinicLogo/><a href="/">Return to home page</a><small>© 2026 Dr Prabhu Orthopaedic &amp; ENT Centre</small></div></footer>
  </main>;
}
