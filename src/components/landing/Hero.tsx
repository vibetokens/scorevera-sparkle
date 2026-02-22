import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-brand/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-brand/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full border border-blue-brand/30 bg-blue-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-light">
              DIY Credit Repair System
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl"
          >
            Stop Googling.
            <br />
            Start{" "}
            <span className="text-gradient">Disputing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 max-w-lg text-lg leading-relaxed text-blue-light/70"
          >
            Upload your credit report. ScoreVera identifies every negative item, generates
            FCRA-compliant dispute letters, and tracks your 30-day deadlines — automatically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="https://buy.stripe.com/9B6eV61hraHQ5tg2DA83C00"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              Start for $29/month
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-light/60 transition-colors hover:text-blue-light"
            >
              See how it works ↓
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex items-center gap-2 text-sm text-blue-light/40"
          >
            <Shield className="h-4 w-4" />
            AES-256 encrypted · No contracts · Cancel anytime
          </motion.p>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="shadow-glow overflow-hidden rounded-2xl border border-blue-brand/10">
            <img
              src={heroDashboard}
              alt="ScoreVera Dashboard showing credit dispute tracking"
              className="w-full"
            />
          </div>
          {/* Floating stat card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 rounded-xl border border-border/50 bg-card p-4 shadow-card"
          >
            <div className="text-xs font-medium text-muted-foreground">Score Increase</div>
            <div className="font-heading text-2xl font-bold text-foreground">+142 pts</div>
            <div className="text-xs text-primary">▲ Average user result</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
