import { getSiteContent } from "../../lib/site-content.js";

export const metadata = {
  title: "Consultation Fees | Dr. Prabhu Orthopaedic & ENT Centre",
  description: "View first visit and follow-up consultation fees at Dr. Prabhu Orthopaedic & ENT Centre.",
};
export const dynamic = "force-dynamic";

function ClinicLogo({ src }) {
  return <a className="brand" href="/" aria-label="Dr Prabhu Centre home"><img className="clinic-logo" src={src} alt="Dr Prabhu Orthopaedic & ENT Centre"/></a>;
}

function FeeCard({ doctor, specialty, firstVisit, followUps }) {
  return <article className="fee-card"><div className="fee-card-head"><h3>{doctor}</h3><p>{specialty}</p></div><div className="fee-first-visit"><span>First visit</span><strong>{firstVisit}</strong></div><div className="fee-follow-title">Follow-up consultation</div><dl className="fee-list">{followUps.map(([period, fee]) => <div key={period}><dt>{period}</dt><dd>{fee}</dd></div>)}</dl></article>;
}

export default async function ConsultationFeesPage() {
  const content = await getSiteContent();
  const consultationLink = `https://wa.me/${content.contact.whatsappLink}?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20an%20online%20consultation.`;
  return <main className="profile-page fees-page">
    <header className="profile-header shell"><ClinicLogo src={content.home.brandLogo}/><a className="profile-back" href="/">← Back to home</a></header>
    <nav className="nav profile-nav"><div className="shell nav-inner"><a href="/">Home</a><a href="/doctors">Doctor Profile</a><a href="/gallery">Gallery</a><a href="/video">Video</a><a href="/home-physio">Home Physio</a><a href="/contact">Contact</a><a href="/timings">Clinic Timings</a><a className="profile-nav-active" href="/fees">Consultation Fees</a><a className="online-consult-link" href={consultationLink} target="_blank" rel="noreferrer">Online Consultation ↗</a></div></nav>
    <section className="profile-fees shell fees-page-content"><div className="profile-section-label"><span>04</span><span>CONSULTATION INFORMATION</span></div><div className="fees-heading"><div><h2>Consultation fees</h2><p>Clinic consultation and follow-up schedule</p></div><span>DR. PRABHU CENTRE</span></div><div className="fee-grid">{content.fees.map((fee) => <FeeCard key={fee.doctor} {...fee}/>)}</div><p className="fee-note">For current availability or fee confirmation, please contact the centre before your visit.</p></section>
    <footer className="profile-footer"><div className="shell"><ClinicLogo src={content.home.brandLogo}/><a href="/">Return to home page</a><small>© 2026 Dr Prabhu Orthopaedic &amp; ENT Centre</small></div></footer>
  </main>;
}
