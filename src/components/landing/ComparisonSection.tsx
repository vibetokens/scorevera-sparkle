import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Auto-identifies negative items", scorevera: true, agency: true, diy: false },
  { feature: "Targeted dispute letters", scorevera: true, agency: true, diy: "Generic only" },
  { feature: "30-day deadline tracking", scorevera: true, agency: true, diy: false },
  { feature: "Multi-round escalation", scorevera: true, agency: true, diy: false },
  { feature: "You stay in control", scorevera: true, agency: false, diy: true },
  { feature: "Monthly cost", scorevera: "$29", agency: "$80–$150", diy: "Free (and chaotic)" },
];

const renderCell = (value: boolean | string) => {
  if (value === true) return <Check className="h-5 w-5 text-primary" />;
  if (value === false) return <X className="h-5 w-5 text-destructive/60" />;
  return <span>{value}</span>;
};

const ComparisonSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-gold">
            ScoreVera vs. The Alternatives
          </span>
          <h2 className="mb-4 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why pay $100+/month for something{" "}
            <span className="text-gradient">you can do yourself?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Feature</th>
                <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wide text-primary">ScoreVera ($29/mo)</th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Credit Repair Agency</th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">DIY Googling</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0">
                  <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      {row.feature === "Monthly cost" ? (
                        <span className="font-bold text-primary">{row.scorevera as string}</span>
                      ) : (
                        renderCell(row.scorevera)
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">{renderCell(row.agency)}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">{renderCell(row.diy)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
