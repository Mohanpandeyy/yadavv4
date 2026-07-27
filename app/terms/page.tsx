import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Yadav Medicals",
  description: "Terms and conditions for Yadav Medicals healthcare services.",
};

export default function TermsPage() {
  return (
    <section className="section max-w-4xl">
      <h1 className="font-display text-4xl font-bold md:text-5xl">Terms & Conditions</h1>
      <div className="prose prose-invert mt-8 max-w-none">
        <p>Last updated: {new Date().toLocaleDateString("en-IN")}</p>
        <h2>Services</h2>
        <p>
          Yadav Medicals provides pharmacy services and pathology lab collection with blood collection (Pathkind Lab) in Khalilabad, Sant Kabir Nagar, Uttar Pradesh.
        </p>
        <h2>Prescription Medicines</h2>
        <p>
          Prescription medicines require a valid doctor's prescription. We reserve the right to refuse sale without proper documentation.
        </p>
        <h2>Lab Reports</h2>
        <p>
          Pathkind Lab reports are processed at NABL certified laboratories. Report delivery timelines are indicative and may vary based on test type.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          We are not liable for any adverse reactions to medicines or test results. Always consult a qualified healthcare professional.
        </p>
        <h2>Contact</h2>
        <p>
          For questions, contact us at care@yadavmedicals.in or call +911234567890.
        </p>
      </div>
    </section>
  );
}
