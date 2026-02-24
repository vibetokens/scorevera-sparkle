import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useNavigate } from "react-router-dom";

interface DisputeItem {
  id: number;
  creditor: string;
  type: string;
  date: string;
  amount?: string;
  bureau: string;
  status: "Negative" | "Collection" | "Charge-Off" | "Late Payment";
  selected: boolean;
}

const rounds: { label: string; items: DisputeItem[] }[] = [
  {
    label: "Round 1",
    items: [
      { id: 1, creditor: "Capital One", type: "Late Payment", date: "Mar 2024", amount: "$450", bureau: "Equifax", status: "Late Payment", selected: true },
      { id: 2, creditor: "Midland Credit", type: "Collection", date: "Jan 2023", amount: "$1,200", bureau: "TransUnion", status: "Collection", selected: true },
      { id: 3, creditor: "Synchrony Bank", type: "Charge-Off", date: "Aug 2023", amount: "$890", bureau: "Experian", status: "Charge-Off", selected: false },
      { id: 4, creditor: "Portfolio Recovery", type: "Collection", date: "Nov 2022", amount: "$340", bureau: "Equifax", status: "Collection", selected: true },
    ],
  },
  {
    label: "Round 2",
    items: [
      { id: 5, creditor: "LVNV Funding", type: "Collection", date: "May 2022", amount: "$660", bureau: "TransUnion", status: "Collection", selected: false },
      { id: 6, creditor: "Wells Fargo", type: "Late Payment", date: "Dec 2023", bureau: "Experian", status: "Late Payment", selected: false },
    ],
  },
];

const statusStyle: Record<string, string> = {
  Collection: "bg-destructive/10 text-destructive",
  "Charge-Off": "bg-destructive/10 text-destructive",
  "Late Payment": "bg-gold/10 text-gold",
  Negative: "bg-gold/10 text-gold",
};

const Disputes = () => {
  const navigate = useNavigate();
  const [roundData, setRoundData] = useState(rounds);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (roundLabel: string, id: number) => {
    setRoundData((prev) =>
      prev.map((r) =>
        r.label === roundLabel
          ? { ...r, items: r.items.map((it) => (it.id === id ? { ...it, selected: !it.selected } : it)) }
          : r
      )
    );
  };

  const selectAll = (roundLabel: string) => {
    setRoundData((prev) =>
      prev.map((r) =>
        r.label === roundLabel ? { ...r, items: r.items.map((it) => ({ ...it, selected: true })) } : r
      )
    );
  };

  const clearAll = (roundLabel: string) => {
    setRoundData((prev) =>
      prev.map((r) =>
        r.label === roundLabel ? { ...r, items: r.items.map((it) => ({ ...it, selected: false })) } : r
      )
    );
  };

  const totalSelected = roundData.flatMap((r) => r.items).filter((it) => it.selected).length;

  return (
    <DashboardLayout>
      <div className="p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Select Disputes
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose which negative items to challenge, organized by round.
            </p>
          </div>
          <Button
            disabled={totalSelected === 0}
            onClick={() => navigate("/letters")}
            className="gap-2 shrink-0"
          >
            Generate {totalSelected > 0 ? `${totalSelected} ` : ""}Letter{totalSelected !== 1 ? "s" : ""}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <div className="space-y-6">
          {roundData.map((round, ri) => {
            const isCollapsed = collapsed[round.label];
            const selectedCount = round.items.filter((i) => i.selected).length;

            return (
              <motion.div
                key={round.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: ri * 0.08 }}
              >
                <Card className="shadow-card">
                  <CardContent className="p-0">
                    {/* Round header */}
                    <div className="flex items-center justify-between border-b border-border px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setCollapsed((c) => ({ ...c, [round.label]: !c[round.label] }))}
                          className="flex items-center gap-2 font-heading text-base font-semibold text-foreground"
                        >
                          {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                          {round.label}
                        </button>
                        <Badge variant="secondary" className="text-xs">
                          {selectedCount}/{round.items.length} selected
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => selectAll(round.label)}
                          className="text-xs font-medium text-primary hover:underline"
                        >
                          Select all
                        </button>
                        <span className="text-muted-foreground">·</span>
                        <button
                          onClick={() => clearAll(round.label)}
                          className="text-xs font-medium text-muted-foreground hover:text-foreground"
                        >
                          Clear
                        </button>
                      </div>
                    </div>

                    {/* Items */}
                    {!isCollapsed && (
                      <div className="divide-y divide-border">
                        {round.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => toggle(round.label, item.id)}
                            className={`flex w-full items-center gap-4 px-6 py-4 text-left transition-colors ${
                              item.selected ? "bg-primary/4 hover:bg-primary/6" : "hover:bg-muted/40"
                            }`}
                          >
                            {/* Checkbox */}
                            <div
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                                item.selected
                                  ? "border-primary bg-primary"
                                  : "border-muted-foreground/30 bg-background"
                              }`}
                            >
                              {item.selected && (
                                <CheckCircle2 className="h-3.5 w-3.5 text-primary-foreground" />
                              )}
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-foreground">{item.creditor}</p>
                              <p className="text-xs text-muted-foreground">
                                {item.type} · {item.date}
                                {item.amount && ` · ${item.amount}`}
                              </p>
                            </div>

                            {/* Bureau */}
                            <span className="hidden text-xs text-muted-foreground sm:block shrink-0">
                              {item.bureau}
                            </span>

                            {/* Status badge */}
                            <span
                              className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle[item.status] ?? ""}`}
                            >
                              {item.status}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Sticky footer */}
        {totalSelected > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30"
          >
            <div className="flex items-center gap-4 rounded-2xl bg-foreground px-6 py-3.5 shadow-glow">
              <p className="text-sm font-medium text-background">
                {totalSelected} item{totalSelected !== 1 ? "s" : ""} selected
              </p>
              <Button size="sm" onClick={() => navigate("/letters")} className="gap-1.5">
                Generate Letters <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Disputes;
