import OrthopaedicSlider from "./components/OrthopaedicSlider";
import EntSlider from "./components/EntSlider";
import FAQSection from "./components/FAQSection";
import PatientCounter from "./components/PatientCounter";

function Logo() {
  return <a className="brand" href="#home" aria-label="Dr Prabhu Orthopaedic and ENT Centre home">
    <img className="clinic-logo" src="/clinic-logo.png.jpeg" alt="Dr Prabhu Orthopaedic & ENT Centre" />
  </a>;
}

function Portrait({ initials, tone, large = false, image }) {
  const style = image ? { "--portrait-url": `url("${image}")` } : undefined;
  return <div className={`portrait ${tone} ${large ? "portrait-large" : ""} ${image ? "has-image" : ""}`} style={style} role="img" aria-label={`${initials} doctor portrait`}>
    <div className="portrait-head"/><div className="portrait-body"/><span className="portrait-initials">{initials}</span>
  </div>;
}

export default function Home() {
  return <main id="home">
    <header className="masthead shell">
      <div className="mast-doctor mast-left"><Portrait initials="JP" tone="blue" large image="/images/doctor-prabhu.jpeg"/><div><span className="eyebrow">ORTHOPAEDIC SPECIALIST</span><strong>Dr. Jagadish Prabhu</strong><small>Orthopaedic Surgeon</small></div></div>
      <div className="mast-logo"><Logo/></div>
      <div className="mast-doctor mast-right"><Portrait initials="SP" tone="rose" large image="/images/doctor-ent.jpg"/><div><span className="eyebrow">ENT SPECIALIST</span><strong>Dr. Shilpa Prabhu</strong><small>ENT Surgeon</small></div></div>
    </header>
    <nav className="nav"><div className="shell nav-inner">
      <a className="nav-home" href="#orthopaedic">Home</a>
      <a href="/doctors">Doctor Profile</a><a href="#gallery">Gallery</a><a href="#video">Video</a><a href="#home-physio">Home Physio</a><a href="/contact">Contact</a><a className="online-consult-link" href="https://wa.me/917483108995?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20an%20online%20consultation." target="_blank" rel="noreferrer">Online Consultation ↗</a>
    </div></nav>

    <section className="orthopaedic-section" id="orthopaedic"><div className="shell"><div className="ortho-heading"><div><span className="eyebrow">CARE FOR BONES, JOINTS &amp; MOVEMENT</span><h1>Orthopaedic Section</h1><p>Specialist care to help you move comfortably and confidently.</p></div><span className="ortho-heading-mark">✳</span></div><OrthopaedicSlider/></div></section>

    <section className="ent-section" id="ent"><div className="shell"><div className="ortho-heading"><div><span className="eyebrow">EAR, NOSE &amp; THROAT SPECIALIST CARE</span><h2>ENT Surgery Section</h2><p>Explore common ENT procedures and specialist care.</p></div><span className="ent-heading-mark">✳</span></div><EntSlider/></div></section>

    <section className="shell care-strip" id="gallery"><div><span className="eyebrow">HERE FOR YOUR WELLBEING</span><h2>Good care starts<br/>with a conversation.</h2><a className="appointment" href="#contact">Get in touch <span>↗</span></a></div><p>From your first visit to your recovery, our team is here to make every step feel a little easier.</p><div className="care-stamp">CARE<br/><span>with</span><br/>HEART</div></section>
    <FAQSection />
    <PatientCounter />
    <footer className="site-footer" id="contact">
      <div className="shell footer-main">
        <div className="footer-map-card">
          <iframe title="Dr Prabhu Orthopaedic and ENT Centre location on Google Maps" src="https://maps.google.com/maps?q=12.873400,77.583298&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <a className="map-open-link" href="https://maps.google.com/?q=12.873400,77.583298" target="_blank" rel="noreferrer">Open directions in Google Maps ↗</a>
        </div>
        <div className="footer-details">
          <Logo />
          <h2>Visit our centre</h2>
          <p>77/80, 2nd Main Road, Kothnur Dinne Main Road,<br/>near Keerthi Convention Hall, Rajathadri Layout,<br/>8th Phase, J.P. Nagar, Bengaluru 560078</p>
          <a className="footer-call" href="tel:+917019679451"><span>Call for appointments</span><strong>+91 70196 79451</strong></a>
          <a className="whatsapp-link" href="https://wa.me/917483108995" target="_blank" rel="noreferrer" aria-label="Chat with Dr Prabhu Centre on WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.8c0 2.1.5 4.1 1.6 5.9L.1 24l6.4-1.7a12 12 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.1 21.7a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.4.1-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.8 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.3-.7.3-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z"/></svg>
            <span><small>Chat with us</small><strong>WhatsApp</strong></span><b>↗</b>
          </a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Dr Prabhu Orthopaedic &amp; ENT Centre</span><span>Care for every generation</span></div>
    </footer>
  </main>;
}
