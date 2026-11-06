"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

export default function PatientCounter() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });
  const [count, setCount] = useState(19_989);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setCount(20_000);
      return;
    }

    const controls = animate(19_989, 20_000, {
      duration: 1.8,
      ease: "linear",
      onUpdate: (value) => setCount(Math.floor(value)),
    });

    return () => controls.stop();
  }, [isInView, reduceMotion]);

  return <section className="patient-proof" aria-label="Patients cared for" ref={sectionRef}>
    <div className="patient-proof-inner">
      <div className="patient-orbit">
        <svg className="patient-orbit-svg" viewBox="0 0 280 280" aria-hidden="true">
          <circle cx="140" cy="140" r="130" fill="none" stroke="rgba(20, 85, 119, .10)" strokeWidth="1" />
          <motion.circle cx="140" cy="140" r="130" fill="none" stroke="url(#patient-ring)" strokeWidth="2" strokeLinecap="round" pathLength="1" initial={reduceMotion ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 1.8, ease: "easeInOut" }} />
          <defs><linearGradient id="patient-ring" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1386b4"/><stop offset=".72" stopColor="#1aa6a3"/><stop offset="1" stopColor="#f47721"/></linearGradient></defs>
        </svg>
        <div className="patient-proof-content">
          <span className="patient-proof-icon" aria-hidden="true">✳</span>
          <span className="patient-proof-copy">THANK YOU FOR YOUR TRUST</span>
          <div className="patient-proof-count" aria-live="polite"><motion.span key={count} initial={reduceMotion ? false : { y: "85%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.13, ease: "easeOut" }}>{count.toLocaleString("en-IN")}</motion.span><b>+</b></div>
          <span className="patient-proof-label">Patients cared for</span>
        </div>
      </div>
      <p className="patient-proof-note">One patient, one thoughtful step at a time.</p>
    </div>
  </section>;
}
