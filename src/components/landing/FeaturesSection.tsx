import { motion } from "framer-motion";
import { Bot, ClipboardList, Timer, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Report Analysis",
    description: "Upload your PDF and the system identifies every disputable negative item — late payments, collections, charge-offs — without you combing through it manually.",
    highlight: true,
  },
  {
    icon: ClipboardList,
    title: "FCRA-Compliant Dispute Letters",
    description: "Every letter is structured around the Fair Credit Reporting Act. A targeted letter matched to your specific account and dispute strategy.",
    highlight: false,
  },
  {
    icon: Timer,
    title: "30-Day Deadline Tracking",
    description: "Log your mail date. ScoreVera counts down the investigation window and alerts you when it's time to follow up or escalate.",
    highlight: false,
  },
  {
    icon: RefreshCw,
    title: "Multi-Round Escalation Logic",
    description: "If a bureau verifies an account you know is wrong, ScoreVera unlocks Round 2 letters and procedural escalation requests.",
    highlight: true,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-cream-dark py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-gold">
            What You Get
          </span>
          <h2 className="mb-4 max-w-lg text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything a credit repair agency does.{" "}
            <span className="text-gradient">For yourself.</span>
          </h2>
          <p className="max-w-lg text-muted-foreground">
            No middleman. No $100+/month retainer. Just a system that keeps you organized and on offense.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`group rounded-2xl border p-7 transition-all ${
                feature.highlight
                  ? "border-transparent bg-navy text-primary-foreground"
                  : "border-border bg-card shadow-card hover:shadow-card-hover"
              }`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                  feature.highlight ? "bg-blue-brand/15" : "bg-primary/10"
                }`}
              >
                <feature.icon className={`h-6 w-6 ${feature.highlight ? "text-blue-light" : "text-primary"}`} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold">{feature.title}</h3>
              <p className={`text-sm leading-relaxed ${feature.highlight ? "text-blue-light/60" : "text-muted-foreground"}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
