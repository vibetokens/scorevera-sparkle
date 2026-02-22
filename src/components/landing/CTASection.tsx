import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-cta py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-foreground/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Your credit report has errors.
            <br />
            Time to fight back.
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-lg text-primary-foreground/70">
            Stop letting inaccurate items drag down your score. ScoreVera gives you the system to dispute them — strategically, compliantly, and without paying $100/month.
          </p>
          <a
            href="https://buy.stripe.com/9B6eV61hraHQ5tg2DA83C00"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Start for $29/month
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
