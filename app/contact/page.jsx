import { getSiteContent } from "../../lib/site-content.js";

export const metadata = {
  title: "Contact | Dr. Prabhu Orthopaedic & ENT Centre",
  description: "Contact Dr. Prabhu Orthopaedic & ENT Centre and find the Bengaluru clinic location.",
};

function ClinicLogo({ src }) {
  return <a className="brand" href="/" aria-label="Dr Prabhu Centre home"><img className="clinic-logo" src={src} alt="Dr Prabhu Orthopaedic & ENT Centre" /></a>;
}

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const { contact, home } = await getSiteContent();
  const mapQuery = encodeURIComponent(contact.mapCoordinates);
  const consultationLink = `https://wa.me/${contact.whatsappLink}?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20an%20online%20consultation.`;
  return <main className="contact-page">
    <header className="profile-header shell"><a className="brand" href="/" aria-label="Dr Prabhu Centre home"><img className="clinic-logo" src={home.brandLogo} alt="Dr Prabhu Orthopaedic &amp; ENT Centre"/></a><a className="profile-back" href="/">← Back to home</a></header>
    <nav className="nav profile-nav"><div className="shell nav-inner"><a href="/">Home</a><a href="/doctors">Doctor Profile</a><a href="/gallery">Gallery</a><a href="/video">Video</a><a href="/home-physio">Home Physio</a><a className="profile-nav-active" href="/contact">Contact</a><a href="/timings">Clinic Timings</a><a href="/fees">Consultation Fees</a><a className="online-consult-link" href={consultationLink} target="_blank" rel="noreferrer">Online Consultation ↗</a></div></nav>

    <section className="contact-hero"><div className="shell contact-hero-inner"><span className="eyebrow">WE’RE HERE TO HELP</span><h1>Contact our centre</h1><p>Call for appointments, send a message or find our clinic.</p></div></section>

    <section className="shell contact-content">
      <div className="contact-info-column">
        <div className="contact-block"><div className="contact-section-heading"><span>01</span><h2>Get in touch</h2></div>
          <a className="contact-detail-card" href={`tel:${contact.appointmentPhoneLink}`}><span className="contact-detail-icon">☎</span><span><small>Clinic enquiries &amp; appointments</small><strong>{contact.appointmentPhone}</strong></span><b>↗</b></a>
          <a className="contact-detail-card" href={`mailto:${contact.email}`}><span className="contact-detail-icon">✉</span><span><small>Email</small><strong>{contact.email}</strong></span><b>↗</b></a>
          <a className="contact-detail-card contact-whatsapp" href={`https://wa.me/${contact.whatsappLink}`} target="_blank" rel="noreferrer"><span className="contact-detail-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.8c0 2.1.5 4.1 1.6 5.9L.1 24l6.4-1.7a12 12 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.1 21.7a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.4.1-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.8 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.3-.7.3-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z"/></svg></span><span><small>Messaging / report sharing</small><strong>{contact.whatsappPhone}</strong></span><b>↗</b></a>
          <a className="contact-detail-card contact-ent-call" href={`tel:${contact.entPhoneLink}`}><span className="contact-detail-icon">☎</span><span><small>Call for ENT doctor timings</small><strong>{contact.entPhone}</strong></span><b>↗</b></a>
        </div>

      </div>

      <div className="contact-location-column"><div className="contact-section-heading"><span>03</span><h2>Find our centre</h2></div><div className="contact-map-card"><iframe title="Dr Prabhu Orthopaedic and ENT Centre location on Google Maps" src={`https://maps.google.com/maps?q=${mapQuery}&z=17&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a className="map-open-link" href={`https://maps.google.com/?q=${mapQuery}`} target="_blank" rel="noreferrer">Open directions in Google Maps ↗</a></div><div className="contact-address"><span className="contact-detail-icon">⌖</span><div><small>Dr. Prabhu Orthopaedic &amp; ENT Centre</small><p style={{ whiteSpace: "pre-line" }}>{contact.address}</p><a href={`https://maps.google.com/?q=${mapQuery}`} target="_blank" rel="noreferrer">{contact.mapCoordinates} ↗</a></div></div><a className="location-qr" href={`https://maps.google.com/?q=${mapQuery}`} target="_blank" rel="noreferrer"><img src={contact.locationQrPath} alt="Clinic location QR code"/><span>Scan for clinic location</span></a></div>
    </section>

    <footer className="profile-footer"><div className="shell"><ClinicLogo src={home.brandLogo}/><a href="/">Return to home page</a><small>© 2026 Dr Prabhu Orthopaedic &amp; ENT Centre</small></div></footer>
  </main>;
}
