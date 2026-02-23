import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InteriorLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
}

const InteriorLayout = ({ title, subtitle, breadcrumbs, children }: InteriorLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InteriorLayout;
