import { motion } from "framer-motion";
import { Calendar, FileText, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Calendar,
    title: "Missed deadlines",
    description: "Bureaus have 30 days to investigate. Miss the escalation window and you restart from scratch.",
  },
  {
    icon: FileText,
    title: "Wrong letters",
    description: "Generic templates don't account for dispute type, round, or escalation status — and bureaus know the difference.",
  },
  {
    icon: HelpCircle,
    title: "No clear next step",
    description: "After you send a letter, what do you do when they verify anyway? Most people have no idea. ScoreVera does.",
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-cream-dark py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-gold">
            The Problem
          </span>
          <h2 className="mb-4 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            DIY credit repair is <span className="text-gradient">hard</span> — unless you have the right system.
          </h2>
          <p className="mb-12 max-w-lg text-muted-foreground">
            Most people either give up halfway through, miss deadlines, or send the wrong letter.
            Credit repair agencies charge $100+/month for work you can do yourself.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <problem.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
