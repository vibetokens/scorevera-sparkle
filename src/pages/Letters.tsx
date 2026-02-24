import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, Eye, CheckCircle2, Clock, Copy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface Letter {
  id: number;
  round: string;
  creditor: string;
  bureau: string;
  type: string;
  generatedOn: string;
  status: "Ready" | "Sent" | "Pending";
  body: string;
}

const letters: Letter[] = [
  {
    id: 1,
    round: "Round 1",
    creditor: "Capital One",
    bureau: "Equifax",
    type: "Late Payment",
    generatedOn: "Feb 10, 2026",
    status: "Ready",
    body: `[Your Name]
[Your Address]
[City, State ZIP]

February 10, 2026

Equifax Information Services LLC
P.O. Box 740256
Atlanta, GA 30374-0256

Re: Dispute of Inaccurate Information — Capital One Late Payment

To Whom It May Concern,

I am writing to formally dispute the above-referenced item appearing on my credit report. The late payment reported by Capital One (March 2024) is inaccurate and I request it be investigated and removed.

Under the Fair Credit Reporting Act (FCRA), 15 U.S.C. § 1681i, you are required to conduct a reasonable investigation of this dispute and correct or delete any inaccurate information within 30 days.

Please investigate this matter and provide written confirmation of the results.

Sincerely,
[Your Name]`,
  },
  {
    id: 2,
    round: "Round 1",
    creditor: "Midland Credit",
    bureau: "TransUnion",
    type: "Collection",
    generatedOn: "Feb 10, 2026",
    status: "Sent",
    body: `[Your Name]
[Your Address]
[City, State ZIP]

February 10, 2026

TransUnion Consumer Solutions
P.O. Box 2000
Chester, PA 19016

Re: Dispute of Collection Account — Midland Credit Management

To Whom It May Concern,

I am writing to dispute the collection account from Midland Credit Management ($1,200 — January 2023) appearing on my TransUnion credit report.

I request full validation of this debt including the original creditor, original account number, and complete payment history. If this debt cannot be validated, it must be removed from my report immediately per the FCRA and FDCPA.

Sincerely,
[Your Name]`,
  },
  {
    id: 3,
    round: "Round 1",
    creditor: "Portfolio Recovery",
    bureau: "Equifax",
    type: "Collection",
    generatedOn: "Feb 10, 2026",
    status: "Pending",
    body: `[Your Name]
[Your Address]
[City, State ZIP]

February 10, 2026

Equifax Information Services LLC
P.O. Box 740256
Atlanta, GA 30374-0256

Re: Dispute of Collection Account — Portfolio Recovery Associates

To Whom It May Concern,

I am writing to dispute the collection item from Portfolio Recovery Associates ($340 — November 2022) on my Equifax credit report.

This item is inaccurate and unverifiable. Please investigate and remove this item pursuant to 15 U.S.C. § 1681i of the Fair Credit Reporting Act.

Sincerely,
[Your Name]`,
  },
];

const statusStyle: Record<string, string> = {
  Ready: "bg-primary/10 text-primary",
  Sent: "bg-emerald-500/10 text-emerald-600",
  Pending: "bg-gold/10 text-gold",
};

const Letters = () => {
  const [preview, setPreview] = useState<Letter | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (body: string) => {
    navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (letter: Letter) => {
    const blob = new Blob([letter.body], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ScoreVera_Letter_${letter.creditor.replace(/ /g, "_")}_${letter.bureau}.txt`;
    a.click();
    URL.revokeObjectURL(url);
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
          <h1 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Dispute Letters
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            View, copy, or download your AI-generated dispute letters.
          </p>
        </motion.div>

        {letters.length === 0 ? (
          <Card className="shadow-card">
            <CardContent className="flex flex-col items-center gap-4 py-16 text-center">
              <Mail className="h-12 w-12 text-muted-foreground/30" />
              <p className="text-muted-foreground">No letters yet. Select disputes to generate letters.</p>
              <Button asChild variant="outline">
                <a href="/disputes">Go to Disputes</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {letters.map((letter, i) => (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <Card className="shadow-card transition-shadow hover:shadow-card-hover">
                  <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-foreground">{letter.creditor}</p>
                        <span className="text-muted-foreground">·</span>
                        <p className="text-sm text-muted-foreground">{letter.bureau}</p>
                        <Badge variant="outline" className="text-xs">{letter.round}</Badge>
                      </div>
                      <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{letter.type}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {letter.generatedOn}
                        </span>
                      </div>
                    </div>

                    {/* Status */}
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle[letter.status]}`}>
                      {letter.status}
                    </span>

                    {/* Actions */}
                    <div className="flex shrink-0 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5"
                        onClick={() => setPreview(letter)}
                      >
                        <Eye className="h-3.5 w-3.5" /> Preview
                      </Button>
                      <Button
                        size="sm"
                        className="gap-1.5"
                        onClick={() => handleDownload(letter)}
                      >
                        <Download className="h-3.5 w-3.5" /> Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Letter preview dialog */}
        <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
          <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading text-lg">
                {preview?.creditor} — {preview?.bureau}
              </DialogTitle>
            </DialogHeader>
            <pre className="whitespace-pre-wrap rounded-xl bg-muted/40 p-5 text-sm font-mono leading-relaxed text-foreground">
              {preview?.body}
            </pre>
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => preview && handleCopy(preview.body)}
              >
                {copied ? (
                  <><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Copied!</>
                ) : (
                  <><Copy className="h-4 w-4" /> Copy text</>
                )}
              </Button>
              <Button
                className="gap-2"
                onClick={() => preview && handleDownload(preview)}
              >
                <Download className="h-4 w-4" /> Download
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Letters;
