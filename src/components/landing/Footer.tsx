import logo from "@/assets/scorevera-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Scorevera" className="h-6 brightness-0 invert" />
        </div>
        <span className="text-xs text-blue-light/30">
          © 2026 ScoreVera. Self-service credit repair tool. No outcomes guaranteed.
        </span>
        <div className="flex gap-6">
          <a href="/terms" className="text-xs text-blue-light/40 transition-colors hover:text-blue-light/70">Terms</a>
          <a href="/privacy" className="text-xs text-blue-light/40 transition-colors hover:text-blue-light/70">Privacy</a>
          <a href="/disclaimer" className="text-xs text-blue-light/40 transition-colors hover:text-blue-light/70">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
