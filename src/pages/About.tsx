import { motion } from "framer-motion";
import { Shield, Eye, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import InteriorLayout from "@/components/layout/InteriorLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description: "No hidden fees, no confusing jargon. You see exactly what's happening with your disputes every step of the way.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Your financial data is encrypted end-to-end. We never share or sell your information — ever.",
  },
  {
    icon: Zap,
    title: "Empowerment",
    description: "We give you the tools and knowledge to take control of your own credit, without paying thousands to a third party.",
  },
];

const About = () => {
  return (
    <InteriorLayout
      title="About ScoreVera"
      subtitle="We're on a mission to make credit repair accessible, transparent, and affordable for everyone."
      breadcrumbs={[{ label: "About" }]}
    >
      {/* Mission */}
      <motion.section {...fadeUp} className="mb-16 md:mb-24">
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Our Mission</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Credit repair shouldn't cost thousands of dollars or require handing your financial life over to a stranger.
          ScoreVera is a self-service platform that puts <span className="font-semibold text-foreground">you</span> in
          control — with AI-powered dispute generation, real-time tracking, and step-by-step guidance, all for a
          fraction of what traditional credit repair companies charge.
        </p>
      </motion.section>

      {/* Why We Built This */}
      <motion.section {...fadeUp} className="mb-16 md:mb-24">
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Why We Built This</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            After watching friends and family pay $1,500+ to credit repair companies — often with disappointing results
            — we knew there had to be a better way.
          </p>
          <p>
            The dispute process isn't magic. It's a series of well-documented legal steps that anyone can follow. The
            problem was that no one made it easy enough for regular people to do on their own.
          </p>
          <p>
            So we built ScoreVera: a tool that combines the power of AI letter generation with a simple, guided workflow.
            Upload your credit report, select the items you want to dispute, and let ScoreVera handle the rest — from
            generating FCRA-compliant letters to tracking bureau responses.
          </p>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section {...fadeUp} className="mb-16 md:mb-24">
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">What We Stand For</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full shadow-card transition-shadow hover:shadow-card-hover">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section {...fadeUp} className="text-center">
        <div className="rounded-2xl bg-gradient-hero px-8 py-12 md:py-16">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
            Ready to take control of your credit?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-light/60">
            Join thousands of people who are disputing inaccurate items and improving their credit scores with ScoreVera.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/get-started">Get Started →</Link>
          </Button>
        </div>
      </motion.section>
    </InteriorLayout>
  );
};

export default About;
