import InteriorLayout from "@/components/layout/InteriorLayout";

const Terms = () => (
  <InteriorLayout title="Terms of Service" subtitle="Last updated: February 2026" breadcrumbs={[{ label: "Terms" }]}>
    <div className="prose prose-lg max-w-3xl text-muted-foreground [&_h2]:font-heading [&_h2]:text-foreground [&_h3]:font-heading [&_h3]:text-foreground">
      <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
      <p>By accessing or using ScoreVera ("Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>

      <h2 className="mt-8 text-xl font-bold">2. Description of Service</h2>
      <p>ScoreVera is a self-service credit repair tool that helps users generate dispute letters based on information from their credit reports. ScoreVera does not guarantee any specific outcome or credit score improvement.</p>

      <h2 className="mt-8 text-xl font-bold">3. User Responsibilities</h2>
      <p>You are responsible for the accuracy of information you provide. You agree not to upload fraudulent documents or misrepresent information in dispute letters.</p>

      <h2 className="mt-8 text-xl font-bold">4. Billing & Cancellation</h2>
      <p>Subscriptions are billed monthly at the rate shown at checkout. You may cancel anytime through your account settings. No refunds are provided for partial billing periods.</p>

      <h2 className="mt-8 text-xl font-bold">5. Limitation of Liability</h2>
      <p>ScoreVera provides tools and templates only. We are not a credit repair organization, law firm, or financial advisor. Use of the Service is at your own risk.</p>

      <h2 className="mt-8 text-xl font-bold">6. Changes to Terms</h2>
      <p>We reserve the right to update these terms at any time. Continued use of the Service constitutes acceptance of updated terms.</p>

      <p className="mt-12 rounded-lg border border-border bg-muted/50 p-4 text-sm italic text-muted-foreground">
        ⚠️ This is placeholder legal content. Please replace with terms reviewed by a licensed attorney before launch.
      </p>
    </div>
  </InteriorLayout>
);

export default Terms;
