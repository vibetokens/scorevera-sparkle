import { useState, DragEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Upload as UploadIcon, FileText, CheckCircle2, X, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useNavigate } from "react-router-dom";

type UploadState = "idle" | "dragging" | "uploading" | "success" | "error";

const Upload = () => {
  const navigate = useNavigate();
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFile = (f: File) => {
    if (f.type !== "application/pdf") {
      setErrorMsg("Only PDF files are accepted.");
      setUploadState("error");
      return;
    }
    if (f.size > 10 * 1024 * 1024) {
      setErrorMsg("File must be under 10 MB.");
      setUploadState("error");
      return;
    }
    setFile(f);
    setErrorMsg("");
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploadState("uploading");
    setProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 5;
      if (p >= 100) {
        clearInterval(interval);
        setProgress(100);
        setUploadState("success");
      } else {
        setProgress(p);
      }
    }, 180);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setUploadState("idle");
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  const reset = () => {
    setFile(null);
    setProgress(0);
    setUploadState("idle");
    setErrorMsg("");
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
            Upload Credit Report
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Upload a PDF of your credit report and we'll scan it for negative items.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {uploadState === "success" ? (
              <Card className="shadow-card">
                <CardContent className="p-10 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-foreground">Upload Complete</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{file?.name}</span> has been processed.
                    We found negative items ready for review.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button onClick={() => navigate("/disputes")}>
                      Review Disputes →
                    </Button>
                    <Button variant="outline" onClick={reset}>
                      Upload Another
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <UploadIcon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Drop zone */}
                  <label
                    onDragOver={(e) => { e.preventDefault(); setUploadState("dragging"); }}
                    onDragLeave={() => setUploadState("idle")}
                    onDrop={onDrop}
                    className={`flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed py-16 transition-all ${
                      uploadState === "dragging"
                        ? "border-primary bg-primary/5"
                        : uploadState === "error"
                        ? "border-destructive/40 bg-destructive/5"
                        : "border-border bg-muted/30 hover:border-primary/40 hover:bg-muted/50"
                    }`}
                  >
                    {uploadState === "error" ? (
                      <AlertCircle className="h-12 w-12 text-destructive/50" />
                    ) : (
                      <FileText className={`h-12 w-12 ${uploadState === "dragging" ? "text-primary" : "text-muted-foreground/40"}`} />
                    )}
                    <div className="text-center">
                      <p className="text-sm font-medium text-muted-foreground">
                        {uploadState === "dragging"
                          ? "Drop it here"
                          : <>Drag & drop or <span className="text-primary underline">browse files</span></>}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground/50">PDF only · Max 10 MB</p>
                    </div>
                    <input type="file" accept=".pdf" className="hidden" onChange={onInputChange} />
                  </label>

                  {/* Upload progress */}
                  {uploadState === "uploading" && (
                    <div className="mt-6">
                      <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="truncate max-w-xs font-medium">{file?.name}</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <p className="mt-2 text-center text-xs text-muted-foreground">
                        Scanning for negative items…
                      </p>
                    </div>
                  )}

                  {/* Error */}
                  {uploadState === "error" && (
                    <div className="mt-4 flex items-center gap-2 rounded-lg bg-destructive/10 px-4 py-3">
                      <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
                      <p className="flex-1 text-sm text-destructive">{errorMsg}</p>
                      <button onClick={reset}>
                        <X className="h-4 w-4 text-destructive/70 hover:text-destructive" />
                      </button>
                    </div>
                  )}

                  {/* Tips */}
                  <div className="mt-8 rounded-xl bg-muted/40 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Where to get your report
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        annualcreditreport.com (free, all 3 bureaus)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        Credit Karma, Experian, TransUnion, Equifax
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        Download as PDF before uploading here
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Upload;
