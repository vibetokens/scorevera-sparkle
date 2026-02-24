import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Upload,
  FileText,
  Mail,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";

const stats = [
  { label: "Active Disputes", value: "7", icon: FileText, color: "text-primary" },
  { label: "Letters Generated", value: "3", icon: Mail, color: "text-gold" },
  { label: "Days to Deadline", value: "18", icon: Clock, color: "text-destructive" },
  { label: "Score Trend", value: "+24 pts", icon: TrendingUp, color: "text-emerald-500" },
];

const recentDisputes = [
  { id: 1, creditor: "Capital One", type: "Late Payment", round: "Round 1", status: "Pending", date: "Feb 10, 2026" },
  { id: 2, creditor: "Midland Credit", type: "Collection", round: "Round 1", status: "Sent", date: "Feb 10, 2026" },
  { id: 3, creditor: "Synchrony Bank", type: "Charge-Off", round: "Round 1", status: "Pending", date: "Feb 10, 2026" },
];

const timeline = [
  { round: "Round 1", sent: "Feb 10", deadline: "Mar 12", daysLeft: 16, progress: 47 },
  { round: "Round 2", sent: "—", deadline: "—", daysLeft: null, progress: 0 },
  { round: "Round 3", sent: "—", deadline: "—", daysLeft: null, progress: 0 },
];

const quickActions = [
  { to: "/upload", label: "Upload Report", icon: Upload, desc: "Add a new credit report PDF" },
  { to: "/disputes", label: "Select Disputes", icon: FileText, desc: "Pick items to challenge" },
  { to: "/letters", label: "View Letters", icon: Mail, desc: "Download generated letters" },
];

const statusColor: Record<string, string> = {
  Pending: "bg-gold/10 text-gold",
  Sent: "bg-primary/10 text-primary",
  Resolved: "bg-emerald-500/10 text-emerald-600",
};

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="p-6 md:p-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Welcome back, {user?.name?.split(" ")[0]} 👋
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Here's a summary of your credit repair progress.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Card className="shadow-card">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                    <s.icon className={`h-5 w-5 ${s.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className={`font-heading text-xl font-bold ${s.color}`}>{s.value}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Disputes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-heading text-base font-semibold text-foreground">
                    Recent Disputes
                  </h2>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/disputes" className="gap-1 text-xs">
                      View all <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>

                {recentDisputes.length === 0 ? (
                  <div className="flex flex-col items-center gap-3 py-10 text-center text-muted-foreground">
                    <AlertCircle className="h-8 w-8 opacity-30" />
                    <p className="text-sm">No disputes yet. Upload your credit report to get started.</p>
                    <Button asChild size="sm">
                      <Link to="/upload">Upload Report</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {recentDisputes.map((d) => (
                      <div
                        key={d.id}
                        className="flex items-center gap-4 rounded-xl border border-border p-4"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="truncate text-sm font-semibold text-foreground">{d.creditor}</p>
                          <p className="text-xs text-muted-foreground">{d.type} · {d.round}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[d.status] ?? ""}`}>
                            {d.status}
                          </span>
                          <p className="mt-0.5 text-xs text-muted-foreground">{d.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Timeline summary */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-heading text-base font-semibold text-foreground">Timeline</h2>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/timeline" className="gap-1 text-xs">
                        Details <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {timeline.map((r) => (
                      <div key={r.round}>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="font-medium text-foreground">{r.round}</span>
                          {r.daysLeft !== null ? (
                            <span className="text-destructive font-medium">{r.daysLeft}d left</span>
                          ) : (
                            <span className="text-muted-foreground">Not started</span>
                          )}
                        </div>
                        <Progress value={r.progress} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="font-heading mb-4 text-base font-semibold text-foreground">
                    Quick Actions
                  </h2>
                  <div className="space-y-2">
                    {quickActions.map(({ to, label, icon: Icon, desc }) => (
                      <Link
                        key={to}
                        to={to}
                        className="flex items-center gap-3 rounded-xl border border-border p-3 text-left transition-all hover:border-primary/30 hover:bg-primary/5"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground">{label}</p>
                          <p className="truncate text-xs text-muted-foreground">{desc}</p>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
