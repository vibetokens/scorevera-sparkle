import { motion } from "framer-motion";
import { Upload, Search, FileCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Report",
    description: "Securely upload your credit report PDF. ScoreVera extracts and organizes every negative tradeline automatically.",
  },
  {
    icon: Search,
    title: "Review Identified Items",
    description: "See every negative account flagged — late payments, collections, charge-offs — organized by bureau.",
  },
  {
    icon: FileCheck,
    title: "Get Your Dispute Letters",
    description: "Each account gets its own targeted, FCRA-compliant dispute letter matched to the right strategy.",
  },
  {
    icon: TrendingUp,
    title: "Track & Escalate",
    description: "Mail your letters and log the date. ScoreVera tracks 30-day windows and unlocks Round 2 letters when it's time.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-gold">
            How It Works
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From report to letters in <span className="text-gradient">minutes.</span>
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            ScoreVera handles the heavy lifting. You just upload, review, and mail.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative mx-auto mb-5">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary font-heading text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
