import { getSiteContent } from "../../lib/site-content.js";

export const metadata = {
  title: "Clinic Timings | Dr. Prabhu Orthopaedic & ENT Centre",
  description: "View orthopaedic clinic hours and contact the centre for ENT appointment timings.",
};
export const dynamic = "force-dynamic";

function ClinicLogo({ src }) {
  return <a className="brand" href="/" aria-label="Dr Prabhu Centre home"><img className="clinic-logo" src={src} alt="Dr Prabhu Orthopaedic & ENT Centre"/></a>;
}

export default async function ClinicTimingsPage() {
  const { contact, home } = await getSiteContent();
  const consultationLink = `https://wa.me/${contact.whatsappLink}?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20an%20online%20consultation.`;
  return <main className="contact-page timings-page">
    <header className="profile-header shell"><ClinicLogo src={home.brandLogo}/><a className="profile-back" href="/">← Back to home</a></header>
    <nav className="nav profile-nav"><div className="shell nav-inner"><a href="/">Home</a><a href="/doctors">Doctor Profile</a><a href="/gallery">Gallery</a><a href="/video">Video</a><a href="/home-physio">Home Physio</a><a href="/contact">Contact</a><a className="profile-nav-active" href="/timings">Clinic Timings</a><a href="/fees">Consultation Fees</a><a className="online-consult-link" href={consultationLink} target="_blank" rel="noreferrer">Online Consultation ↗</a></div></nav>
    <section className="contact-hero"><div className="shell contact-hero-inner"><span className="eyebrow">PLAN YOUR VISIT</span><h1>Clinic Timings</h1><p>Check clinic hours and call to confirm availability before your visit.</p></div></section>
    <section className="shell timings-page-content">
      <div className="contact-section-heading"><span>01</span><h2>Orthopaedic clinic hours</h2></div>
      <article className="timing-card"><div className="timing-card-heading"><span className="timing-dot"/><h3>Orthopaedic</h3><span className="today-label">Clinic hours</span></div><div className="timing-hours"><span>Morning</span><strong>{contact.orthopaedicMorning}</strong></div><div className="timing-hours"><span>Evening</span><strong>{contact.orthopaedicEvening}</strong></div><div className="sunday-note"><strong>Sunday · {contact.sundayHours}</strong><p>Urgent cases only; no follow-ups. Please call and confirm Sunday availability before coming. Consultation fees are different on Sundays.</p></div></article>
      <div className="contact-section-heading timings-ent-heading"><span>02</span><h2>ENT appointments</h2></div>
      <article className="timing-card ent-timing-card"><div className="timing-card-heading"><span className="timing-dot"/><h3>ENT</h3></div><p>For Dr. Shilpa’s ENT timings, please call:</p><a href={`tel:${contact.entPhoneLink}`}>{contact.entPhone} ↗</a></article>
      <a className="timings-contact-link" href="/contact">Contact details and directions <span>↗</span></a>
    </section>
    <footer className="profile-footer"><div className="shell"><ClinicLogo src={home.brandLogo}/><a href="/">Return to home page</a><small>© 2026 Dr Prabhu Orthopaedic &amp; ENT Centre</small></div></footer>
  </main>;
}
