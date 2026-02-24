import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  CreditCard,
  Shield,
  LogOut,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const STRIPE_PORTAL = "https://billing.stripe.com/p/login/test_00g00000000000";
const STRIPE_CHECKOUT = "https://buy.stripe.com/9B6eV61hraHQ5tg2DA83C00";

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [name, setName] = useState(user?.name ?? "");
  const [email] = useState(user?.email ?? "");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: call API to update name
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleCancel = () => {
    logout();
    navigate("/");
  };

  return (
    <DashboardLayout>
      <div className="p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Account</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your profile and subscription.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-6">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-base font-semibold text-foreground">Profile</h2>
                </div>

                <form onSubmit={handleSave} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="acc-name">Full name</Label>
                    <Input
                      id="acc-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="acc-email">Email address</Label>
                    <Input id="acc-email" value={email} disabled className="opacity-60" />
                    <p className="text-xs text-muted-foreground">
                      Email changes are managed through your subscription.
                    </p>
                  </div>
                  <Button type="submit" className="gap-2">
                    {saved ? (
                      <><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Saved!</>
                    ) : (
                      "Save changes"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-base font-semibold text-foreground">
                    Subscription
                  </h2>
                </div>

                <div className="rounded-xl bg-muted/40 p-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div>
                      <p className="font-semibold text-foreground">ScoreVera Pro</p>
                      <p className="text-sm text-muted-foreground">$29 / month · Renews Mar 10, 2026</p>
                    </div>
                    <Badge className="ml-auto bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/20">
                      Active
                    </Badge>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {[
                      "AI-generated dispute letters",
                      "Unlimited PDF uploads",
                      "3-round dispute tracking",
                      "30-day deadline reminders",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Button variant="outline" className="gap-2" asChild>
                    <a href={STRIPE_PORTAL} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Manage billing
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-base font-semibold text-foreground">Security</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Password and account security options.
                </p>
                <Button
                  variant="outline"
                  onClick={() => navigate("/login")}
                >
                  Change password
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Danger zone */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="shadow-card border-destructive/20">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <h2 className="font-heading text-base font-semibold text-foreground">
                    Cancel Plan
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Canceling will end your access at the end of the current billing period. You'll keep
                  access until Mar 10, 2026.
                </p>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="gap-2">
                      <AlertTriangle className="h-4 w-4" /> Cancel subscription
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Cancel your subscription?</AlertDialogTitle>
                      <AlertDialogDescription>
                        You'll lose access to AI dispute letters, timeline tracking, and uploads at the
                        end of your billing cycle (Mar 10, 2026). This action can be undone by
                        resubscribing.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Keep subscription</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleCancel}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Yes, cancel plan
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <p className="mt-3 text-xs text-muted-foreground">
                  Or{" "}
                  <a
                    href={STRIPE_PORTAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    manage billing on Stripe
                  </a>{" "}
                  to pause or update your plan.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sign out */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex justify-end"
          >
            <Button
              variant="ghost"
              className="gap-2 text-muted-foreground"
              onClick={() => { logout(); navigate("/"); }}
            >
              <LogOut className="h-4 w-4" /> Sign out
            </Button>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Account;
