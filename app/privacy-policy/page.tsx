import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Yadav Medicals",
  description: "Privacy policy for Yadav Medicals healthcare services.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section max-w-4xl">
      <h1 className="font-display text-4xl font-bold md:text-5xl">Privacy Policy</h1>
      <div className="prose prose-invert mt-8 max-w-none">
        <p>Last updated: {new Date().toLocaleDateString("en-IN")}</p>
        <h2>Information We Collect</h2>
        <p>
          When you contact us via WhatsApp, phone, or email, we collect your name, contact details, and enquiry information to provide healthcare services.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use your information solely to respond to enquiries, book appointments, deliver lab reports, and provide healthcare services. We do not sell or share your data with third parties.
        </p>
        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information. Lab reports are delivered securely via WhatsApp or email.
        </p>
        <h2>Contact Us</h2>
        <p>
          For privacy concerns, contact us at care@yadavmedicals.in or call +911234567890.
        </p>
      </div>
    </section>
  );
}
