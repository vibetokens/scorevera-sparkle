import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Public pages
import Index from "./pages/Index";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

// Auth pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// App pages
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Disputes from "./pages/Disputes";
import Letters from "./pages/Letters";
import Timeline from "./pages/Timeline";
import Account from "./pages/Account";

const queryClient = new QueryClient();

// Protected route guard
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => (
  <Routes>
    {/* ── Public routes ── */}
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<About />} />
    <Route path="/get-started" element={<GetStarted />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/disclaimer" element={<Disclaimer />} />

    {/* ── Auth routes ── */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* ── Protected app routes ── */}
    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    <Route path="/upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
    <Route path="/disputes" element={<ProtectedRoute><Disputes /></ProtectedRoute>} />
    <Route path="/letters" element={<ProtectedRoute><Letters /></ProtectedRoute>} />
    <Route path="/timeline" element={<ProtectedRoute><Timeline /></ProtectedRoute>} />
    <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />

    {/* ── 404 ── */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
