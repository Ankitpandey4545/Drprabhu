export const metadata = {
  title: "Contact & Clinic Timings | Dr. Prabhu Orthopaedic & ENT Centre",
  description: "Contact Dr. Prabhu Orthopaedic & ENT Centre, view clinic timings and find the Bengaluru location.",
};

function ClinicLogo() {
  return <a className="brand" href="/" aria-label="Dr Prabhu Centre home"><img className="clinic-logo" src="/clinic-logo.png.jpeg" alt="Dr Prabhu Orthopaedic & ENT Centre" /></a>;
}

export default function ContactPage() {
  return <main className="contact-page">
    <header className="profile-header shell"><ClinicLogo/><a className="profile-back" href="/">← Back to home</a></header>
    <nav className="nav profile-nav"><div className="shell nav-inner"><a href="/">Home</a><a href="/doctors">Doctor Profile</a><a href="/#gallery">Gallery</a><a href="/#video">Video</a><a href="/#home-physio">Home Physio</a><a className="profile-nav-active" href="/contact">Contact</a><a className="online-consult-link" href="https://wa.me/917483108995?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20an%20online%20consultation." target="_blank" rel="noreferrer">Online Consultation ↗</a></div></nav>

    <section className="contact-hero"><div className="shell contact-hero-inner"><span className="eyebrow">WE’RE HERE TO HELP</span><h1>Contact &amp; clinic timings</h1><p>Call ahead for appointments, ENT timings and Sunday availability.</p></div></section>

    <section className="shell contact-content">
      <div className="contact-info-column">
        <div className="contact-block"><div className="contact-section-heading"><span>01</span><h2>Get in touch</h2></div>
          <a className="contact-detail-card" href="tel:+917019679451"><span className="contact-detail-icon">☎</span><span><small>Clinic enquiries &amp; appointments</small><strong>+91 70196 79451</strong></span><b>↗</b></a>
          <a className="contact-detail-card" href="mailto:drprabhuclinic@gmail.com"><span className="contact-detail-icon">✉</span><span><small>Email</small><strong>drprabhuclinic@gmail.com</strong></span><b>↗</b></a>
          <a className="contact-detail-card contact-whatsapp" href="https://wa.me/919019764235" target="_blank" rel="noreferrer"><span className="contact-detail-icon">◉</span><span><small>Messaging / report sharing</small><strong>+91 90197 64235</strong></span><b>↗</b></a>
          <a className="contact-detail-card contact-ent-call" href="tel:+917483108995"><span className="contact-detail-icon">☎</span><span><small>Call for ENT doctor timings</small><strong>+91 74831 08995</strong></span><b>↗</b></a>
        </div>

        <div className="contact-block timing-block"><div className="contact-section-heading"><span>02</span><h2>Clinic timings</h2></div>
          <article className="timing-card"><div className="timing-card-heading"><span className="timing-dot"/><h3>Orthopaedic</h3><span className="today-label">Today</span></div><div className="timing-hours"><span>Morning</span><strong>09:45 AM – 1:30 PM</strong></div><div className="timing-hours"><span>Evening</span><strong>4:45 PM – 8:30 PM</strong></div>
            <div className="sunday-note"><strong>Sunday · 10:00 AM – 12:00 PM</strong><p>Urgent cases only; no follow-ups. Please call and confirm Sunday availability before coming. Consultation fees are different on Sundays.</p></div>
          </article>
          <article className="timing-card ent-timing-card"><div className="timing-card-heading"><span className="timing-dot"/><h3>ENT</h3></div><p>For Dr. Shilpa’s ENT timings, please call:</p><a href="tel:+917483108995">+91 74831 08995 ↗</a></article>
        </div>
      </div>

      <div className="contact-location-column"><div className="contact-section-heading"><span>03</span><h2>Find our centre</h2></div><div className="contact-map-card"><iframe title="Dr Prabhu Orthopaedic and ENT Centre location on Google Maps" src="https://maps.google.com/maps?q=12.873400,77.583298&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a className="map-open-link" href="https://maps.google.com/?q=12.873400,77.583298" target="_blank" rel="noreferrer">Open directions in Google Maps ↗</a></div><div className="contact-address"><span className="contact-detail-icon">⌖</span><div><small>Dr. Prabhu Orthopaedic &amp; ENT Centre</small><p>77/80, 2nd Main Road, Kothnur Dinne Main Road,<br/>near Keerthi Convention Hall, Rajathadri Layout,<br/>8th Phase, J.P. Nagar, Bengaluru 560078</p><a href="https://maps.google.com/?q=12.873400,77.583298" target="_blank" rel="noreferrer">12.873400, 77.583298 ↗</a></div></div></div>
    </section>

    <footer className="profile-footer"><div className="shell"><ClinicLogo/><a href="/">Return to home page</a><small>© 2026 Dr Prabhu Orthopaedic &amp; ENT Centre</small></div></footer>
  </main>;
}
