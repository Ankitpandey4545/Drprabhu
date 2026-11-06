import OrthopaedicSlider from "./components/OrthopaedicSlider";
import EntSlider from "./components/EntSlider";
import FAQSection from "./components/FAQSection";
import PatientCounter from "./components/PatientCounter";
import { getSiteContent } from "../lib/site-content.js";

function Logo({ src }) {
  return <a className="brand" href="#home" aria-label="Dr Prabhu Orthopaedic and ENT Centre home">
    <img className="clinic-logo" src={src} alt="Dr Prabhu Orthopaedic & ENT Centre" />
  </a>;
}

function Portrait({ initials, tone, large = false, image }) {
  const style = image ? { "--portrait-url": `url("${image}")` } : undefined;
  return <div className={`portrait ${tone} ${large ? "portrait-large" : ""} ${image ? "has-image" : ""}`} style={style} role="img" aria-label={`${initials} doctor portrait`}>
    <div className="portrait-head"/><div className="portrait-body"/><span className="portrait-initials">{initials}</span>
  </div>;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();
  const { home, contact } = content;
  const mapQuery = encodeURIComponent(contact.mapCoordinates);
  const consultationLink = `https://wa.me/${contact.whatsappLink}?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20an%20online%20consultation.`;
  return <main id="home">
    <header className="masthead shell">
      <div className="mast-doctor mast-left"><Portrait initials="JP" tone="blue" large image={home.doctors[0].image}/><div><span className="eyebrow">{home.doctors[0].role}</span><strong>{home.doctors[0].name}</strong><small>{home.doctors[0].specialty}</small></div></div>
      <div className="mast-logo"><Logo src={home.brandLogo}/></div>
      <div className="mast-doctor mast-right"><Portrait initials="SP" tone="rose" large image={home.doctors[1].image}/><div><span className="eyebrow">{home.doctors[1].role}</span><strong>{home.doctors[1].name}</strong><small>{home.doctors[1].specialty}</small></div></div>
    </header>
    <nav className="nav"><div className="shell nav-inner">
      <a className="nav-home" href="#orthopaedic">Home</a>
      <a href="/doctors">Doctor Profile</a><a href="/gallery">Gallery</a><a href="/video">Video</a><a href="/home-physio">Home Physio</a><a href="/contact">Contact</a><a href="/timings">Clinic Timings</a><a href="/fees">Consultation Fees</a><a className="online-consult-link" href={consultationLink} target="_blank" rel="noreferrer">Online Consultation ↗</a>
    </div></nav>

    <section className="orthopaedic-section" id="orthopaedic"><div className="shell"><div className="ortho-heading"><div><span className="eyebrow">{home.orthopaedic.eyebrow}</span><h1>{home.orthopaedic.title}</h1><p>{home.orthopaedic.description}</p></div><span className="ortho-heading-mark">✳</span></div><OrthopaedicSlider section={home.orthopaedic}/></div></section>

    <section className="ent-section" id="ent"><div className="shell"><div className="ortho-heading"><div><span className="eyebrow">{home.ent.eyebrow}</span><h2>{home.ent.title}</h2><p>{home.ent.description}</p></div><span className="ent-heading-mark">✳</span></div><EntSlider section={home.ent}/></div></section>

    <section className="facility-section"><div className="shell facility-grid">
      {home.facilities.map((facility) => <article className="facility-card" key={facility.eyebrow}><img src={facility.image} alt={facility.alt}/><div><span className="eyebrow">{facility.eyebrow}</span><h2>{facility.title}</h2></div></article>)}
    </div></section>
    <FAQSection items={content.faqs} />
    <PatientCounter initialCount={content.patientCount} />
    <footer className="site-footer" id="contact">
      <div className="shell footer-main">
        <div className="footer-map-card">
          <iframe title="Dr Prabhu Orthopaedic and ENT Centre location on Google Maps" src={`https://maps.google.com/maps?q=${mapQuery}&z=17&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <a className="map-open-link" href={`https://maps.google.com/?q=${mapQuery}`} target="_blank" rel="noreferrer">Open directions in Google Maps ↗</a>
        </div>
        <div className="footer-details">
          <Logo src={home.brandLogo}/>
          <h2>Visit our centre</h2>
          <p style={{ whiteSpace: "pre-line" }}>{contact.address}</p>
          <a className="footer-location-qr" href={`https://maps.google.com/?q=${mapQuery}`} target="_blank" rel="noreferrer"><img src={contact.locationQrPath} alt="Clinic location QR code"/><span>Scan for clinic location</span></a>
          <a className="footer-call" href={`tel:${contact.appointmentPhoneLink}`}><span>Call for appointments</span><strong>{contact.appointmentPhone}</strong></a>
          <a className="whatsapp-link" href={`https://wa.me/${contact.whatsappLink}`} target="_blank" rel="noreferrer" aria-label={`Chat with Dr Prabhu Centre on WhatsApp at ${contact.whatsappPhone}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.8c0 2.1.5 4.1 1.6 5.9L.1 24l6.4-1.7a12 12 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.1 21.7a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.4.1-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.8 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.3-.7.3-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z"/></svg>
            <span><small>WhatsApp</small><strong>{contact.whatsappPhone}</strong></span><b>↗</b>
          </a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Dr Prabhu Orthopaedic &amp; ENT Centre</span><span>Care for every generation</span></div>
    </footer>
  </main>;
}
