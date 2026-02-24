import { motion } from "framer-motion";
import { Clock, CheckCircle2, AlertCircle, Circle, CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface Round {
  label: string;
  sentDate: string | null;
  deadline: string | null;
  daysLeft: number | null;
  daysTotal: number;
  status: "active" | "upcoming" | "complete";
  disputes: { creditor: string; bureau: string; status: "Pending" | "Responded" | "Resolved" }[];
}

const rounds: Round[] = [
  {
    label: "Round 1",
    sentDate: "Feb 10, 2026",
    deadline: "Mar 12, 2026",
    daysLeft: 16,
    daysTotal: 30,
    status: "active",
    disputes: [
      { creditor: "Capital One", bureau: "Equifax", status: "Pending" },
      { creditor: "Midland Credit", bureau: "TransUnion", status: "Responded" },
      { creditor: "Portfolio Recovery", bureau: "Equifax", status: "Pending" },
    ],
  },
  {
    label: "Round 2",
    sentDate: null,
    deadline: null,
    daysLeft: null,
    daysTotal: 30,
    status: "upcoming",
    disputes: [],
  },
  {
    label: "Round 3",
    sentDate: null,
    deadline: null,
    daysLeft: null,
    daysTotal: 30,
    status: "upcoming",
    disputes: [],
  },
];

const disputeStatusStyle: Record<string, string> = {
  Pending: "bg-gold/10 text-gold",
  Responded: "bg-primary/10 text-primary",
  Resolved: "bg-emerald-500/10 text-emerald-600",
};

const RoundIcon = ({ status }: { status: Round["status"] }) => {
  if (status === "complete") return <CheckCircle2 className="h-5 w-5 text-emerald-500" />;
  if (status === "active") return <Clock className="h-5 w-5 text-primary" />;
  return <Circle className="h-5 w-5 text-muted-foreground/30" />;
};

const Timeline = () => {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Dispute Timeline
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Track your 30-day deadlines for each dispute round.
          </p>
        </motion.div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            Credit bureaus have <span className="font-semibold text-foreground">30 days</span> to respond
            to each dispute under the FCRA. Track deadlines below and follow up if you don't hear back.
          </p>
        </motion.div>

        {/* Rounds */}
        <div className="relative space-y-6">
          {/* Vertical connector line */}
          <div className="absolute left-[1.625rem] top-8 bottom-8 w-px bg-border md:left-[1.875rem]" />

          {rounds.map((round, ri) => {
            const progress = round.daysLeft !== null
              ? ((round.daysTotal - round.daysLeft) / round.daysTotal) * 100
              : 0;

            return (
              <motion.div
                key={round.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: ri * 0.1 }}
                className="relative flex gap-4 md:gap-6"
              >
                {/* Icon node */}
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background border border-border">
                  <RoundIcon status={round.status} />
                </div>

                <div className="flex-1 pb-2">
                  <Card className={`shadow-card ${round.status === "upcoming" ? "opacity-60" : ""}`}>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="font-heading text-base font-semibold text-foreground">
                          {round.label}
                        </h2>
                        <Badge
                          variant={round.status === "active" ? "default" : "secondary"}
                          className="capitalize text-xs"
                        >
                          {round.status}
                        </Badge>
                        {round.daysLeft !== null && (
                          <span
                            className={`ml-auto text-sm font-semibold ${
                              round.daysLeft <= 7 ? "text-destructive" : "text-foreground"
                            }`}
                          >
                            {round.daysLeft} days left
                          </span>
                        )}
                      </div>

                      {/* Dates */}
                      {round.sentDate ? (
                        <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Sent: <span className="font-medium text-foreground">{round.sentDate}</span>
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            Deadline: <span className="font-medium text-foreground">{round.deadline}</span>
                          </span>
                        </div>
                      ) : (
                        <p className="mt-3 text-xs text-muted-foreground">
                          Not started yet — complete Round {ri} first.
                        </p>
                      )}

                      {/* Progress */}
                      {round.status === "active" && (
                        <div className="mt-4">
                          <div className="mb-1.5 flex justify-between text-xs text-muted-foreground">
                            <span>Response window</span>
                            <span>{Math.round(progress)}% elapsed</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                      )}

                      {/* Dispute list */}
                      {round.disputes.length > 0 && (
                        <div className="mt-5 space-y-2">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Items in this round
                          </p>
                          {round.disputes.map((d, di) => (
                            <div
                              key={di}
                              className="flex items-center gap-3 rounded-lg border border-border px-4 py-2.5"
                            >
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground">{d.creditor}</p>
                                <p className="text-xs text-muted-foreground">{d.bureau}</p>
                              </div>
                              <span
                                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${disputeStatusStyle[d.status]}`}
                              >
                                {d.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Timeline;
