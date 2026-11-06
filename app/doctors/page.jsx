import { getSiteContent } from "../../lib/site-content.js";

export const metadata = {
  title: "Our Doctors | Dr. Prabhu Orthopaedic & ENT Centre",
  description: "Meet Dr. Jagadish Prabhu, Senior Consultant Orthopaedic Surgeon, and Dr. Shilpa Prabhu, Senior Consultant ENT Surgeon with 14 years of clinical experience.",
};

function ClinicLogo({ src }) {
  return <a className="brand" href="/" aria-label="Dr Prabhu Centre home"><img className="clinic-logo" src={src} alt="Dr Prabhu Orthopaedic & ENT Centre" /></a>;
}

export const dynamic = "force-dynamic";

export default async function JagadishPrabhuProfile() {
  const content = await getSiteContent();
  const { jagadish, shilpa } = content.doctors;
  const consultationLink = `https://wa.me/${content.contact.whatsappLink}?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20an%20online%20consultation.`;
  return <main className="profile-page">
    <header className="profile-header shell"><ClinicLogo src={content.home.brandLogo}/><a className="profile-back" href="/">← Back to home</a></header>
    <nav className="nav profile-nav"><div className="shell nav-inner"><a href="/">Home</a><a className="profile-nav-active" href="/doctors">Doctor Profile</a><a href="/gallery">Gallery</a><a href="/video">Video</a><a href="/home-physio">Home Physio</a><a href="/contact">Contact</a><a href="/timings">Clinic Timings</a><a href="/fees">Consultation Fees</a><a className="online-consult-link" href={consultationLink} target="_blank" rel="noreferrer">Online Consultation ↗</a></div></nav>

    <section className="profile-hero" id="dr-jagadish"><div className="shell profile-hero-grid">
      <div className="profile-photo-wrap"><img className="profile-photo" src={jagadish.image} alt={`${jagadish.name}, orthopaedic surgeon`}/><span className="profile-photo-caption">Dr. Prabhu Orthopaedic &amp; ENT Centre</span></div>
      <div className="profile-hero-copy"><div className="profile-breadcrumb"><a href="/">Home</a><span>/</span><span>Doctor Profile</span></div>
        <span className="eyebrow">{jagadish.fullTitle.toUpperCase()}</span>
        <h1>{jagadish.name}</h1>
        <p className="profile-credentials">{jagadish.qualifications.map((qualification, index) => <span key={qualification}>{index > 0 && <> <i/> </>}{qualification}</span>)}</p>
        <div className="profile-highlights">{jagadish.highlights.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div>
        <div className="profile-hero-actions"><a className="profile-primary-action" href="/#contact">Book an appointment <span>↗</span></a><a className="profile-secondary-action" href="#about-doctor">About the doctor <span>↓</span></a></div>
      </div>
    </div></section>

    <section className="profile-about shell" id="about-doctor">
      <div className="profile-section-label"><span>01</span><span>ABOUT THE DOCTOR</span></div>
      <div className="profile-about-content"><h2>{jagadish.aboutHeading}</h2>
        <div className="profile-bio">
          {jagadish.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>

    <section className="profile-qualifications"><div className="shell">
      <div className="profile-section-label"><span>02</span><span>QUALIFICATIONS &amp; PRACTICE</span></div>
      <div className="qualification-grid"><div className="qualification-intro"><h2>Knowledge built<br/>for better movement.</h2><p>{jagadish.qualificationIntro}</p></div>
        <div className="qualification-details"><div className="qualification-block"><span>PROFESSIONAL QUALIFICATIONS</span><div className="qualification-tags">{jagadish.qualifications.map((qualification) => <span key={qualification}>{qualification}</span>)}</div></div><div className="qualification-block"><span>CLINICAL PRACTICE</span><p>{jagadish.practice}</p></div><div className="qualification-block"><span>APPROACH TO CARE</span><p>{jagadish.approach}</p></div></div>
      </div>
    </div></section>

    <section className="shilpa-profile" id="dr-shilpa"><div className="shell">
      <div className="shilpa-profile-grid"><div className="shilpa-photo-wrap"><img src={shilpa.image} alt={`${shilpa.name}, ${shilpa.title}`}/><span>EAR, NOSE &amp; THROAT CARE</span></div><div className="shilpa-profile-copy"><div className="profile-section-label"><span>03</span><span>ENT SPECIALIST</span></div><span className="eyebrow">{shilpa.title.toUpperCase()}</span><h2>{shilpa.name}</h2><p className="shilpa-experience">{shilpa.experience}</p><p className="shilpa-credentials">{shilpa.qualifications.map((qualification, index) => <span key={qualification}>{index > 0 && <> <i/> </>}{qualification}</span>)}</p><a className="profile-secondary-action" href="/#contact">Contact the centre <span>↗</span></a></div></div>
      <div className="shilpa-details"><div className="shilpa-biography"><span className="eyebrow">ABOUT {shilpa.name.toUpperCase()}</span>{shilpa.biography.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="shilpa-expertise"><div className="shilpa-details-heading"><span className="eyebrow">AREAS OF SPECIAL INTEREST AND EXPERTISE</span><h3>Specialist ENT care</h3></div><div className="shilpa-expertise-grid">
          {shilpa.expertise.map(({ title, description }) => <article key={title}><h4>{title}</h4><p>{description}</p></article>)}
        </div></div>
        <div className="shilpa-philosophy"><span className="eyebrow">PHILOSOPHY OF CARE</span><p>{shilpa.philosophy}</p><strong>{shilpa.tagline}</strong></div>
      </div>
    </div></section>

    <section className="profile-cta"><div className="shell profile-cta-inner"><div><span className="eyebrow">DR. PRABHU ORTHOPAEDIC &amp; ENT CENTRE</span><h2>Ready to plan your visit?</h2><p>Contact the centre for appointment availability and consultation details.</p></div><a href="/#contact">Contact the centre <span>↗</span></a></div></section>
    <footer className="profile-footer"><div className="shell"><ClinicLogo src={content.home.brandLogo}/><a href="/">Return to home page</a><small>© 2026 Dr Prabhu Orthopaedic &amp; ENT Centre</small></div></footer>
  </main>;
}
