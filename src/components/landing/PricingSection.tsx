import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";

const features = [
  "Unlimited credit report uploads",
  "AI-powered negative item identification",
  "FCRA-compliant dispute letters generated",
  "30-day investigation timeline tracking",
  "Multi-round escalation letters",
  "Secure AES-256 encrypted report handling",
  "Reports auto-purged after analysis",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-gold">
            Pricing
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One plan. <span className="text-gradient">Everything included.</span>
          </h2>
          <p className="mx-auto mb-12 max-w-md text-muted-foreground">
            No tiers, no upsells, no surprises. $29/month and you get the full system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-gradient-hero p-px"
        >
          {/* Gradient border */}
          <div className="relative rounded-3xl bg-navy p-10">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-brand/20 via-transparent to-transparent" />

            <div className="relative">
              <div className="mb-1 flex items-baseline justify-center gap-1">
                <span className="font-heading text-lg font-semibold text-blue-light/50">$</span>
                <span className="font-heading text-7xl font-extrabold tracking-tight text-primary-foreground">29</span>
              </div>
              <p className="mb-8 text-sm text-blue-light/40">per month · cancel anytime</p>

              <ul className="mb-10 space-y-4 text-left">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-blue-light/70">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/9B6eV61hraHQ5tg2DA83C00"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Start for $29/month
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>

              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-blue-light/30">
                <Shield className="h-3.5 w-3.5" />
                Secure checkout via Stripe · No long-term contracts
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
