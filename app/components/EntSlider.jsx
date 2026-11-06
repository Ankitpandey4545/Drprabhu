"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const topics = [
  ["Ear piercing care", "Expert ENT ear piercing care"],
  ["Hearing aid solutions", "Hearing aid solutions and support"],
  ["ENT infection care", "Treatment for common ear, nose and throat infections"],
  ["Vertigo treatment", "Specialist care for vertigo and balance"],
  ["Allergy treatment", "ENT allergy care and treatment"],
  ["Complete ENT care", "ENT care and specialist services"],
  ["ENT services", "ENT services for the whole family"],
  ["ENT infection care", "Expert ENT infection care"],
  ["ENT consultation", "ENT specialist assessment and care"],
  ["Ear wax removal", "Safe ear wax removal by an ENT specialist"],
].map(([title, alt], index) => ({
  src: `/images/ent/ent-${String(index + 1).padStart(2, "0")}.jpg`,
  alt,
  title,
  number: String(index + 1).padStart(2, "0"),
}));

export default function EntSlider() {
  const trackRef = useRef(null);
  const [activeImage, setActiveImage] = useState(1);
  const reduceMotion = useReducedMotion();

  function move(direction) {
    const track = trackRef.current;
    const card = track?.querySelector(".ortho-slide");
    if (!track) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0");
    track.scrollBy({ left: ((card?.getBoundingClientRect().width ?? 280) + gap) * direction, behavior: reduceMotion ? "auto" : "smooth" });
  }

  function updateActiveImage() {
    const track = trackRef.current;
    const card = track?.querySelector(".ortho-slide");
    if (!track || !card) return;
    const step = card.getBoundingClientRect().width + Number.parseFloat(getComputedStyle(track).columnGap || "0");
    setActiveImage(Math.min(topics.length, Math.max(1, Math.round(track.scrollLeft / step) + 1)));
  }

  return <div className="ortho-gallery">
    <div className="ortho-gallery-top"><div><span className="ortho-kicker">EAR, NOSE &amp; THROAT CARE</span><p>Explore ENT surgery &amp; care</p></div><div className="ortho-gallery-actions"><div className="carousel-controls"><motion.button type="button" disabled={activeImage <= 1} whileTap={{ scale: 0.9 }} onClick={() => move(-1)} aria-label="Previous ENT images">←</motion.button><motion.button type="button" disabled={activeImage >= topics.length} whileTap={{ scale: 0.9 }} onClick={() => move(1)} aria-label="Next ENT images">→</motion.button></div></div></div>
    <div className="ortho-track" ref={trackRef} onScroll={updateActiveImage}>
      {topics.map(({ src, alt, number, title }, index) => <motion.article className="ortho-slide" key={number}
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.45, delay: reduceMotion ? 0 : (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reduceMotion ? undefined : { y: -5 }}>
        <div className="ortho-poster"><img src={`${src}?v=2`} alt={alt} loading={index > 2 ? "lazy" : "eager"} onLoad={(event) => { event.currentTarget.hidden = false; event.currentTarget.nextElementSibling.hidden = true; }} onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.nextElementSibling.hidden = false; }} /><div className="ortho-placeholder" hidden><span>ENT CARE</span></div></div>
        <div className="ortho-slide-caption"><h3>{title}</h3><i>↗</i></div>
      </motion.article>)}
    </div>
    <div className="ortho-gallery-bottom"><p>Drag or swipe to explore all 10 guides</p><div className="ortho-progress" aria-hidden="true"><i style={{ width: `${activeImage * 10}%` }}/></div></div>
  </div>;
}
