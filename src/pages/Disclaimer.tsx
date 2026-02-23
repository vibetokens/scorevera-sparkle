import InteriorLayout from "@/components/layout/InteriorLayout";

const Disclaimer = () => (
  <InteriorLayout title="Disclaimer" subtitle="Important information about ScoreVera" breadcrumbs={[{ label: "Disclaimer" }]}>
    <div className="prose prose-lg max-w-3xl text-muted-foreground [&_h2]:font-heading [&_h2]:text-foreground [&_h3]:font-heading [&_h3]:text-foreground">
      <h2 className="text-xl font-bold">No Guarantee of Results</h2>
      <p>ScoreVera is a self-service tool that assists users in generating credit dispute letters. We do not guarantee any specific outcome, credit score improvement, or removal of items from your credit report.</p>

      <h2 className="mt-8 text-xl font-bold">Not Legal or Financial Advice</h2>
      <p>ScoreVera is not a credit repair organization as defined under federal or state law. The information and tools provided are for educational and informational purposes only and should not be construed as legal, financial, or credit counseling advice.</p>

      <h2 className="mt-8 text-xl font-bold">User Responsibility</h2>
      <p>You are solely responsible for reviewing the accuracy of any dispute letters generated and for any actions taken based on information provided by the Service. We recommend consulting with a qualified professional for specific legal or financial advice.</p>

      <h2 className="mt-8 text-xl font-bold">Fair Credit Reporting Act</h2>
      <p>ScoreVera assists users in exercising their rights under the Fair Credit Reporting Act (FCRA). The FCRA gives consumers the right to dispute inaccurate information on their credit reports directly with credit bureaus.</p>

      <p className="mt-12 rounded-lg border border-border bg-muted/50 p-4 text-sm italic text-muted-foreground">
        ⚠️ This is placeholder disclaimer content. Please replace with content reviewed by a licensed attorney before launch.
      </p>
    </div>
  </InteriorLayout>
);

export default Disclaimer;
