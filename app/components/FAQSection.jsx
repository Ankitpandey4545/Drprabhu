"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const questions = [
  {
    question: "What care can I ask about at the centre?",
    answer: "The centre focuses on orthopaedic and ENT care. The doctor can discuss which evaluation or treatment is suitable for your concern during a consultation.",
  },
  {
    question: "How do I book an appointment?",
    answer: "Use the contact details in the footer to call the centre and ask about available appointment times.",
  },
  {
    question: "What should I bring to my first visit?",
    answer: "Bring any previous prescriptions, test results, scans or X-rays related to your concern, along with a list of medicines you currently take.",
  },
  {
    question: "Should I bring previous X-rays or scans?",
    answer: "Yes. Previous imaging and reports can help the doctor understand your history. Bring the original files or clear copies if you have them.",
  },
  {
    question: "How should I prepare for an ENT consultation?",
    answer: "Make a note of your symptoms, when they began, how often they happen, and any treatment you have already tried.",
  },
  {
    question: "Can I ask the doctor about treatment options during the visit?",
    answer: "Yes. You can discuss your concerns, possible options, expected follow-up and any questions you have with the doctor.",
  },
];

export default function FAQSection({ items = questions }) {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return <section className="faq-section" aria-labelledby="faq-title">
    <div className="shell faq-layout">
      <div className="faq-intro">
        <span className="eyebrow">A LITTLE MORE CLARITY</span>
        <h2 id="faq-title">Frequently asked<br />questions</h2>
        <p>Quick answers to help you prepare for your visit.</p>
        <a href="#contact" className="faq-contact">Still have a question? <span>Contact us ↗</span></a>
      </div>
      <div className="faq-list">
        {items.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-answer-${index + 1}`;
          return <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={question}>
            <button className="faq-question" id={`faq-question-${index + 1}`} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
              <span className="faq-number">{String(index + 1).padStart(2, "0")}</span><span className="faq-question-text">{question}</span><motion.i aria-hidden="true" animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>+</motion.i>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && <motion.div className="faq-answer-wrap" id={panelId} role="region" aria-labelledby={`faq-question-${index + 1}`} initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}>
                <p>{answer}</p>
              </motion.div>}
            </AnimatePresence>
          </article>;
        })}
      </div>
    </div>
  </section>;
}
