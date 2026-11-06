export const metadata = {
  title: "Our Doctors | Dr. Prabhu Orthopaedic & ENT Centre",
  description: "Meet Dr. Jagadish Prabhu, Senior Consultant Orthopaedic Surgeon, and Dr. Shilpa Prabhu, Senior Consultant ENT Surgeon with 14 years of clinical experience.",
};

const qualifications = ["FRCS (Orth & Tr) (UK)", "MS (Orthopaedics)", "DNB (Orthopaedics)", "D.Ortho", "FHMS", "MBBS"];

function ClinicLogo() {
  return <a className="brand" href="/" aria-label="Dr Prabhu Centre home"><img className="clinic-logo" src="/images/clinic/clinic-logo.png.jpeg" alt="Dr Prabhu Orthopaedic & ENT Centre" /></a>;
}

function FeeCard({ doctor, specialty, firstVisit, followUps }) {
  return <article className="fee-card">
    <div className="fee-card-head"><h3>{doctor}</h3><p>{specialty}</p></div>
    <div className="fee-first-visit"><span>First visit</span><strong>{firstVisit}</strong></div>
    <div className="fee-follow-title">Follow-up consultation</div>
    <dl className="fee-list">{followUps.map(([period, fee]) => <div key={period}><dt>{period}</dt><dd>{fee}</dd></div>)}</dl>
  </article>;
}

export default function JagadishPrabhuProfile() {
  return <main className="profile-page">
    <header className="profile-header shell"><ClinicLogo/><a className="profile-back" href="/">← Back to home</a></header>
    <nav className="nav profile-nav"><div className="shell nav-inner"><a href="/">Home</a><a className="profile-nav-active" href="/doctors">Doctor Profile</a><a href="/gallery">Gallery</a><a href="/#video">Video</a><a href="/#home-physio">Home Physio</a><a href="/contact">Contact</a><a className="online-consult-link" href="https://wa.me/917483108995?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20an%20online%20consultation." target="_blank" rel="noreferrer">Online Consultation ↗</a></div></nav>

    <section className="profile-hero" id="dr-jagadish"><div className="shell profile-hero-grid">
      <div className="profile-photo-wrap"><img className="profile-photo" src="/images/clinic/doctor-jagadish.jpeg" alt="Dr. Jagadish Prabhu, orthopaedic surgeon"/><span className="profile-photo-caption">Dr. Prabhu Orthopaedic &amp; ENT Centre</span></div>
      <div className="profile-hero-copy"><div className="profile-breadcrumb"><a href="/">Home</a><span>/</span><span>Doctor Profile</span></div>
        <span className="eyebrow">SR. CONSULTANT ORTHOPAEDIC SURGEON</span>
        <h1>Dr. Jagadish<br/>Prabhu</h1>
        <p className="profile-credentials">FRCS (Orth &amp; Tr) (UK) <i/> MS (Orthopaedics) <i/> DNB (Orthopaedics) <i/> D.Ortho <i/> FHMS <i/> MBBS</p>
        <div className="profile-highlights"><div><strong>17+</strong><span>Years of clinical experience</span></div><div><strong>FRCS (UK)</strong><span>International professional qualification</span></div><div><strong>ADVANCED</strong><span>Orthopaedic surgical practice</span></div></div>
        <div className="profile-hero-actions"><a className="profile-primary-action" href="/#contact">Book an appointment <span>↗</span></a><a className="profile-secondary-action" href="#about-doctor">About the doctor <span>↓</span></a></div>
      </div>
    </div></section>

    <section className="profile-about shell" id="about-doctor">
      <div className="profile-section-label"><span>01</span><span>ABOUT THE DOCTOR</span></div>
      <div className="profile-about-content"><h2>Advanced orthopaedic care,<br/><em>grounded in experience.</em></h2>
        <div className="profile-bio">
          <p>Dr. Jagadish Prabhu is a highly qualified and experienced Consultant Orthopaedic Surgeon with over 17 years of clinical experience in the field of orthopaedics and musculoskeletal healthcare. He is distinguished by his advanced professional qualifications, extensive clinical experience and unwavering commitment to delivering comprehensive, evidence-based orthopaedic care.</p>
          <p>His academic and professional credentials include FRCS (Orth &amp; Tr) (UK), MS (Orthopaedics), DNB (Orthopaedics), D.Ortho, FHMS and MBBS, reflecting a strong foundation in orthopaedic surgery and advanced specialist training.</p>
          <p>With a patient-centred approach to clinical practice, Dr. Jagadish Prabhu places particular emphasis on accurate diagnosis, individualised treatment planning and optimal functional recovery. He believes that effective orthopaedic care extends beyond treating the condition itself, focusing equally on restoring mobility, relieving pain, preserving joint function and enhancing overall quality of life.</p>
          <p>Through his private practice at Dr. Prabhu Orthopaedic and ENT Centre, J.P. Nagar – 8th Phase, Bengaluru, he is committed to providing personalised, ethical and comprehensive orthopaedic healthcare in a professional and compassionate clinical environment.</p>
          <p>In addition to his private clinical practice, Dr. Jagadish Prabhu performs orthopaedic surgical procedures at reputed, premier corporate hospitals across South Bengaluru, utilising state-of-the-art surgical infrastructure, advanced medical technology and comprehensive multidisciplinary healthcare facilities.</p>
          <p>His practice combines personalised patient care with the clinical expertise and advanced surgical capabilities of leading tertiary-care institutions.</p>
          <p>His philosophy of care is founded on three essential principles: clinical excellence, ethical medical practice and patient satisfaction. He strives to ensure that every patient receives the highest standards of professional attention, clear communication and treatment tailored to their individual needs.</p>
          <p>His ultimate goal is to help patients overcome musculoskeletal challenges, regain mobility and return to an active, independent and fulfilling life.</p>
        </div>
      </div>
    </section>

    <section className="profile-qualifications"><div className="shell">
      <div className="profile-section-label"><span>02</span><span>QUALIFICATIONS &amp; PRACTICE</span></div>
      <div className="qualification-grid"><div className="qualification-intro"><h2>Knowledge built<br/>for better movement.</h2><p>International training and advanced orthopaedic surgical practice, with care shaped around each patient.</p></div>
        <div className="qualification-details"><div className="qualification-block"><span>PROFESSIONAL QUALIFICATIONS</span><div className="qualification-tags">{qualifications.map((qualification) => <span key={qualification}>{qualification}</span>)}</div></div><div className="qualification-block"><span>CLINICAL PRACTICE</span><p>Private practice at Dr. Prabhu Orthopaedic and ENT Centre, J.P. Nagar – 8th Phase, Bengaluru, and orthopaedic surgical practice at leading corporate hospitals across South Bengaluru.</p></div><div className="qualification-block"><span>APPROACH TO CARE</span><p>Accurate diagnosis · Individualised treatment planning · Functional recovery · Ethical, patient-centred care</p></div></div>
      </div>
    </div></section>

    <section className="shilpa-profile" id="dr-shilpa"><div className="shell">
      <div className="shilpa-profile-grid"><div className="shilpa-photo-wrap"><img src="/images/clinic/doctor-shilpa.jpg" alt="Dr. Shilpa Prabhu, Senior Consultant ENT Surgeon"/><span>EAR, NOSE &amp; THROAT CARE</span></div><div className="shilpa-profile-copy"><div className="profile-section-label"><span>03</span><span>ENT SPECIALIST</span></div><span className="eyebrow">SENIOR CONSULTANT ENT SURGEON</span><h2>Dr. Shilpa<br/>Prabhu</h2><p className="shilpa-experience">14 Years of Clinical Experience</p><p className="shilpa-credentials">FRCS (ENT) (UK) <i/> MRCS-ENT <i/> DLO <i/> DNB (ENT) <i/> MBBS</p><a className="profile-secondary-action" href="/#contact">Contact the centre <span>↗</span></a></div></div>
      <div className="shilpa-details"><div className="shilpa-biography"><span className="eyebrow">ABOUT DR. SHILPA PRABHU</span><p>Dr. Shilpa Prabhu is a highly experienced Senior Consultant ENT Surgeon with 14 years of clinical experience in the comprehensive diagnosis and management of Ear, Nose and Throat conditions.</p><p>With extensive clinical expertise and a patient-centred approach, she is committed to delivering high-quality, ethical and evidence-based ENT care. She believes in providing accurate diagnosis, effective treatment and personalised attention to every patient, ensuring comfort and confidence throughout their treatment journey.</p><p>She practises at Dr. Prabhu Orthopaedic and ENT Centre, J.P. Nagar 8th Phase, Bengaluru, and is also involved in providing specialised ENT care and procedures.</p></div>
        <div className="shilpa-expertise"><div className="shilpa-details-heading"><span className="eyebrow">AREAS OF SPECIAL INTEREST AND EXPERTISE</span><h3>Specialist ENT care</h3></div><div className="shilpa-expertise-grid">
          <article><h4>Ear, Nose and Throat Infections</h4><p>Diagnosis and comprehensive management of common and complex ENT infections.</p></article>
          <article><h4>Ear Wax Removal</h4><p>Safe and professional ear wax removal procedures.</p></article>
          <article><h4>Ear Piercing</h4><p>Professional ear piercing services.</p></article>
          <article><h4>Ear Lobe Repair</h4><p>Management and repair of torn or split ear lobes.</p></article>
          <article><h4>Vertigo and Balance Disorders</h4><p>Evaluation and management of dizziness, vertigo and balance-related problems.</p></article>
          <article><h4>Tinnitus Management</h4><p>Assessment and treatment guidance for ringing or buzzing sensations in the ears.</p></article>
          <article><h4>Snoring Disorders</h4><p>Evaluation and management of snoring-related ENT conditions.</p></article>
          <article><h4>Foreign Body Removal</h4><p>Safe removal of foreign bodies from the ear, nose and throat.</p></article>
        </div></div>
        <div className="shilpa-philosophy"><span className="eyebrow">PHILOSOPHY OF CARE</span><p>Dr. Shilpa Prabhu strongly believes in combining clinical expertise with compassionate, individualised patient care. Her focus is on providing appropriate treatment, patient education and long-term ENT health through ethical and evidence-based medical practice.</p><strong>Expertise in ENT Care. Compassion in Every Consultation.</strong></div>
      </div>
    </div></section>

    <section className="profile-fees shell"><div className="profile-section-label"><span>04</span><span>CONSULTATION INFORMATION</span></div><div className="fees-heading"><div><h2>Consultation fees</h2><p>Clinic consultation and follow-up schedule</p></div><span>DR. PRABHU CENTRE</span></div>
      <div className="fee-grid"><FeeCard doctor="Dr. Jagadish Prabhu" specialty="Orthopaedic Surgeon" firstVisit="₹550" followUps={[["1–4 days", "Nil"], ["5–9 days", "₹400"], ["After 9 days", "₹550"]]} /><FeeCard doctor="Dr. Shilpa Prabhu" specialty="ENT Surgeon" firstVisit="₹400" followUps={[["1–4 days", "Nil"], ["5–9 days", "₹300"], ["After 9 days", "₹400"]]} /></div>
      <p className="fee-note">For current availability or fee confirmation, please contact the centre before your visit.</p>
    </section>

    <section className="profile-cta"><div className="shell profile-cta-inner"><div><span className="eyebrow">DR. PRABHU ORTHOPAEDIC &amp; ENT CENTRE</span><h2>Ready to plan your visit?</h2><p>Contact the centre for appointment availability and consultation details.</p></div><a href="/#contact">Contact the centre <span>↗</span></a></div></section>
    <footer className="profile-footer"><div className="shell"><ClinicLogo/><a href="/">Return to home page</a><small>© 2026 Dr Prabhu Orthopaedic &amp; ENT Centre</small></div></footer>
  </main>;
}
