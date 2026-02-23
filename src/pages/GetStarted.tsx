import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const steps = ["Welcome", "Upload Report", "Review Items", "Confirmation"];

const mockItems = [
  { id: 1, creditor: "Capital One", type: "Late Payment", date: "Mar 2024", status: "Negative", selected: true },
  { id: 2, creditor: "Midland Credit", type: "Collection", date: "Jan 2023", status: "Collection", selected: true },
  { id: 3, creditor: "Synchrony Bank", type: "Charge-Off", date: "Aug 2023", status: "Negative", selected: false },
  { id: 4, creditor: "Portfolio Recovery", type: "Collection", date: "Nov 2022", status: "Collection", selected: true },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

const GetStarted = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [items, setItems] = useState(mockItems);

  const next = () => { setDirection(1); setStep((s) => Math.min(s + 1, 3)); };
  const back = () => { setDirection(-1); setStep((s) => Math.max(s - 1, 0)); };
  const toggleItem = (id: number) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, selected: !it.selected } : it)));

  const progressValue = ((step + 1) / steps.length) * 100;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="bg-gradient-hero py-10 md:py-14">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">Get Started</h1>
          <p className="mt-2 text-blue-light/60 text-sm">Step {step + 1} of {steps.length} — {steps[step]}</p>
          <Progress value={progressValue} className="mt-4 h-2 bg-navy-light" />
        </div>
      </div>

      <main className="flex-1 py-10 md:py-14">
        <div className="mx-auto max-w-2xl px-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {step === 0 && (
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <Sparkles className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-heading text-xl font-bold text-foreground">Welcome to ScoreVera</h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      In the next few steps, you'll upload your credit report, review any negative or inaccurate items,
                      and let our AI generate dispute letters on your behalf. Here's what you'll need:
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> A recent credit report (from annualcreditreport.com or similar)</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> About 5–10 minutes of your time</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> No credit repair experience necessary</li>
                    </ul>
                  </CardContent>
                </Card>
              )}

              {step === 1 && (
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <Upload className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-heading text-xl font-bold text-foreground">Upload Your Credit Report</h2>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Upload a PDF of your credit report. We'll scan it for negative items you can dispute.
                    </p>
                    <label className="mt-6 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border bg-muted/40 py-14 transition-colors hover:border-primary/40 hover:bg-muted/60">
                      <FileText className="h-10 w-10 text-muted-foreground/50" />
                      <span className="text-sm font-medium text-muted-foreground">
                        Drag & drop or <span className="text-primary underline">browse files</span>
                      </span>
                      <span className="text-xs text-muted-foreground/50">PDF up to 10 MB</span>
                      <input type="file" accept=".pdf" className="hidden" />
                    </label>
                  </CardContent>
                </Card>
              )}

              {step === 2 && (
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h2 className="font-heading text-xl font-bold text-foreground">Review Detected Items</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We found {items.length} negative items. Select the ones you'd like to dispute.
                    </p>
                    <div className="mt-6 space-y-3">
                      {items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => toggleItem(item.id)}
                          className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                            item.selected
                              ? "border-primary/40 bg-primary/5 shadow-sm"
                              : "border-border bg-card hover:border-border/80"
                          }`}
                        >
                          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                            item.selected ? "border-primary bg-primary" : "border-muted-foreground/30"
                          }`}>
                            {item.selected && <CheckCircle2 className="h-3.5 w-3.5 text-primary-foreground" />}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-foreground">{item.creditor}</p>
                            <p className="text-xs text-muted-foreground">{item.type} · {item.date}</p>
                          </div>
                          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            item.status === "Collection"
                              ? "bg-destructive/10 text-destructive"
                              : "bg-gold/10 text-gold"
                          }`}>
                            {item.status}
                          </span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 3 && (
                <Card className="shadow-card">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <CheckCircle2 className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-heading text-xl font-bold text-foreground">You're All Set!</h2>
                    <p className="mt-3 text-muted-foreground">
                      You've selected <span className="font-semibold text-foreground">{items.filter((i) => i.selected).length}</span> items
                      to dispute. Subscribe to start generating AI-powered dispute letters.
                    </p>
                    <Button asChild size="lg" className="mt-8">
                      <a href="https://buy.stripe.com/9B6eV61hraHQ5tg2DA83C00">
                        Subscribe & Start — $29/mo →
                      </a>
                    </Button>
                    <p className="mt-3 text-xs text-muted-foreground">Cancel anytime. No contracts.</p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <Button variant="ghost" onClick={back} disabled={step === 0} className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            {step < 3 && (
              <Button onClick={next} className="gap-2">
                Next <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
