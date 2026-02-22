import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this a credit repair agency?",
    answer: "No. ScoreVera is a self-service tool that helps you generate and manage your own dispute letters. You handle all communication with the bureaus directly. We're a software system, not a credit repair organization — which means no CROA fees, no shady contracts, and no one acting on your behalf without you knowing.",
  },
  {
    question: "Which credit bureaus does this support?",
    answer: "ScoreVera supports disputes to all three major bureaus — Equifax, Experian, and TransUnion. You can manage disputes across all three from a single dashboard.",
  },
  {
    question: "Do you guarantee results?",
    answer: "No — and be wary of anyone who does. Credit bureau outcomes depend on your individual credit history and how they investigate. ScoreVera gives you the best possible structured process. Results are up to the bureaus.",
  },
  {
    question: "What file types are accepted for my credit report?",
    answer: "ScoreVera accepts PDF credit reports from AnnualCreditReport.com and most bureau-generated reports. We recommend downloading your full report directly from each bureau's website for best results.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. Reports are encrypted using AES-256-GCM and automatically purged after analysis. Full account numbers are never stored — only the structured tradeline data needed to generate your letters.",
  },
  {
    question: "Do I have to mail the letters myself?",
    answer: "Yes. You download your generated letters, print them, and mail them via certified mail. ScoreVera then tracks the deadlines from the date you log. This keeps you in full control of the process.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream-dark py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-gold">
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Common questions.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="pr-4 font-medium text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
