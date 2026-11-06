import { getSiteContent } from "../../lib/site-content.js";

export const metadata = {
  title: "Clinic Video | Dr. Prabhu Orthopaedic & ENT Centre",
  description: "Watch videos from Dr. Prabhu Orthopaedic & ENT Centre.",
};
export const dynamic = "force-dynamic";

function ClinicLogo({ src }) {
  return <a className="brand" href="/" aria-label="Dr Prabhu Centre home"><img className="clinic-logo" src={src} alt="Dr Prabhu Orthopaedic & ENT Centre"/></a>;
}

export default async function VideoPage() {
  const { home, contact } = await getSiteContent();
  const consultationLink = `https://wa.me/${contact.whatsappLink}?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20an%20online%20consultation.`;
  return <main className="profile-page video-page">
    <header className="profile-header shell"><ClinicLogo src={home.brandLogo}/><a className="profile-back" href="/">← Back to home</a></header>
    <nav className="nav profile-nav"><div className="shell nav-inner"><a href="/">Home</a><a href="/doctors">Doctor Profile</a><a href="/gallery">Gallery</a><a className="profile-nav-active" href="/video">Video</a><a href="/home-physio">Home Physio</a><a href="/contact">Contact</a><a href="/timings">Clinic Timings</a><a href="/fees">Consultation Fees</a><a className="online-consult-link" href={consultationLink} target="_blank" rel="noreferrer">Online Consultation ↗</a></div></nav>
    <section className="clinic-video-section video-page-content"><div className="shell"><span className="eyebrow">FROM OUR CLINIC</span><h1>{home.video.title}</h1><p>{home.video.description}</p>{home.video.videoPath ? <div className="clinic-video-frame"><video controls preload="metadata" poster={home.video.posterImage || undefined}><source src={home.video.videoPath}/>Your browser does not support HTML video.</video></div> : <div className="clinic-video-empty">Clinic video will appear here when added from the admin panel.</div>}</div></section>
    <footer className="profile-footer"><div className="shell"><ClinicLogo src={home.brandLogo}/><a href="/">Return to home page</a><small>© 2026 Dr Prabhu Orthopaedic &amp; ENT Centre</small></div></footer>
  </main>;
}
