"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const images = [
  ["Joint replacement", "Joint replacement surgery and recovery"],
  ["Tennis elbow", "Tennis elbow treatment and rehabilitation"],
  ["Arthroscopy", "Arthroscopy and minimally invasive joint care"],
  ["Flat foot", "Flat foot assessment and treatment"],
  ["Bone health", "Osteoporosis care and bone health"],
  ["Neck pain", "Neck pain assessment and treatment"],
  ["Our expert team", "Meet the orthopaedic care team"],
  ["Frozen shoulder", "Frozen shoulder care and mobility"],
  ["Heel pain", "Plantar fasciitis and heel pain care"],
  ["Cast care", "Cast application and recovery support"],
].map(([title, alt], index) => ({
  src: `/images/orthopaedic/ortho-${String(index + 1).padStart(2, "0")}.jpg`,
  alt,
  title,
  number: String(index + 1).padStart(2, "0"),
}));

export default function OrthopaedicSlider() {
  const trackRef = useRef(null);
  const [activeImage, setActiveImage] = useState(1);
  const reduceMotion = useReducedMotion();

  function move(direction) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".ortho-slide");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0");
    track.scrollBy({ left: ((card?.getBoundingClientRect().width ?? 280) + gap) * direction, behavior: reduceMotion ? "auto" : "smooth" });
  }

  function updateActiveImage() {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".ortho-slide");
    if (!card) return;
    const step = card.getBoundingClientRect().width + Number.parseFloat(getComputedStyle(track).columnGap || "0");
    setActiveImage(Math.min(images.length, Math.max(1, Math.round(track.scrollLeft / step) + 1)));
  }

  return <div className="ortho-gallery">
    <div className="ortho-gallery-top"><div><span className="ortho-kicker">SPECIALIST CARE, MADE CLEAR</span><p>Explore our orthopaedic care</p></div><div className="ortho-gallery-actions"><div className="carousel-controls"><motion.button type="button" disabled={activeImage <= 1} whileTap={{ scale: 0.9 }} onClick={() => move(-1)} aria-label="Previous orthopaedic images">←</motion.button><motion.button type="button" disabled={activeImage >= images.length} whileTap={{ scale: 0.9 }} onClick={() => move(1)} aria-label="Next orthopaedic images">→</motion.button></div></div></div>
    <div className="ortho-track" ref={trackRef} onScroll={updateActiveImage}>
      {images.map(({ src, alt, number, title }, index) => <motion.article className="ortho-slide" key={number}
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.45, delay: reduceMotion ? 0 : (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reduceMotion ? undefined : { y: -5 }}>
        <div className="ortho-poster"><img src={src} alt={alt} loading={index > 2 ? "lazy" : "eager"} onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.nextElementSibling.hidden = false; }} /><div className="ortho-placeholder" hidden><span>ORTHOPAEDIC CARE</span></div></div>
        <div className="ortho-slide-caption"><h3>{title}</h3><i>↗</i></div>
      </motion.article>)}
    </div>
    <div className="ortho-gallery-bottom"><p>Drag or swipe to explore all 10 guides</p><div className="ortho-progress" aria-hidden="true"><i style={{ width: `${activeImage * 10}%` }}/></div></div>
  </div>;
}
