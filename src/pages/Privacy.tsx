import InteriorLayout from "@/components/layout/InteriorLayout";

const Privacy = () => (
  <InteriorLayout title="Privacy Policy" subtitle="Last updated: February 2026" breadcrumbs={[{ label: "Privacy" }]}>
    <div className="prose prose-lg max-w-3xl text-muted-foreground [&_h2]:font-heading [&_h2]:text-foreground [&_h3]:font-heading [&_h3]:text-foreground">
      <h2 className="text-xl font-bold">1. Information We Collect</h2>
      <p>We collect information you provide directly: name, email address, and uploaded credit report data. We also collect usage data such as pages visited and features used.</p>

      <h2 className="mt-8 text-xl font-bold">2. How We Use Your Information</h2>
      <p>Your information is used to provide the Service, generate dispute letters, and communicate with you about your account. We never sell your personal data.</p>

      <h2 className="mt-8 text-xl font-bold">3. Data Security</h2>
      <p>All data is encrypted in transit and at rest. Credit report data is processed securely and is not stored longer than necessary to provide the Service.</p>

      <h2 className="mt-8 text-xl font-bold">4. Third-Party Services</h2>
      <p>We use Stripe for payment processing. Stripe's privacy policy governs how your payment information is handled. We do not store credit card numbers.</p>

      <h2 className="mt-8 text-xl font-bold">5. Your Rights</h2>
      <p>You may request deletion of your account and all associated data at any time by contacting support.</p>

      <h2 className="mt-8 text-xl font-bold">6. Contact</h2>
      <p>For privacy-related inquiries, contact us at privacy@scorevera.com.</p>

      <p className="mt-12 rounded-lg border border-border bg-muted/50 p-4 text-sm italic text-muted-foreground">
        ⚠️ This is placeholder privacy content. Please replace with a policy reviewed by a licensed attorney before launch.
      </p>
    </div>
  </InteriorLayout>
);

export default Privacy;
