import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Handl Terms & Conditions",
  description:
    "Review the terms and conditions that govern your use of Handl’s expense sharing app, website, and related services.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "These Terms & Conditions (“Terms”) are a legal agreement between you (“you”, “your”) and Handl Automation Inc. (“Handl”, “we”, “us”, or “our”). They govern your access to and use of our mobile application, website, beta programs, and related online services (collectively, the “Services”).",
      "By creating an account, accessing, or using the Services, you confirm that you have read, understood, and agree to be bound by these Terms as well as our Privacy Policy. If you do not agree, you must not use the Services.",
    ],
  },
  {
    id: "services",
    title: "2. Description of Services",
    content: [
      "Handl provides an AI-assisted expense sharing platform that allows you to:",
      "Link eligible bank accounts or payment cards to automatically track transactions.",
      "Create groups or individual connections for managing shared expenses.",
      "Upload receipts, add notes, and collaborate on expense details with invited participants.",
      "Use smart prompts and AI features to suggest or customize cost splits.",
      "Generate summaries and settlement suggestions for balancing outstanding amounts.",
      "We may add, remove, or modify features at any time to improve the Services or comply with legal or partner requirements.",
    ],
  },
  {
    id: "eligibility",
    title: "3. Eligibility & Accounts",
    content: [
      "You must be at least 18 years of age (or the age of majority in your jurisdiction) to create an account or use the Services.",
      "You agree to provide accurate, current, and complete information during registration and to keep your account details updated.",
      "You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.",
      "If you suspect unauthorized access to your account, notify us at tryhandl.it@gmail.com immediately.",
    ],
  },
  {
    id: "beta",
    title: "4. Beta Features & Feedback",
    content: [
      "Handl may offer beta, preview, or experimental features (“Beta Features”). These are provided for evaluation purposes, may be subject to additional rules, and could be throttled, suspended, or discontinued without notice.",
      "Beta Features are provided “as is” and may be less reliable than generally available functionality.",
      "You grant Handl a non-exclusive, royalty-free license to use feedback or suggestions you submit for product improvement, provided that we do not publicly attribute feedback to you without consent.",
      "",
      "**Beta Program Offer Terms & Conditions:**",
      "This offer is valid only for users who (1) download and install the Handl beta app via TestFlight, and (2) provide at least one piece of feedback during the beta period. Premium access will be granted to your account upon the official launch of the app. Offer is non-transferable and subject to availability. We reserve the right to modify or cancel this promotion at any time. Eligibility will be verified at launch.",
    ],
  },
  {
    id: "financial-connections",
    title: "5. Financial Connections & Linked Services",
    content: [
      "To enable card-linked and banking features, Handl partners with Plaid Technologies, Inc. (“Plaid”). When you link a financial account, you authorize Handl and Plaid to access your account information, transaction data, and balances for the sole purpose of providing the Services.",
      "You acknowledge and agree that your use of Plaid is subject to Plaid’s Terms of Use and Privacy Policy.",
      "Handl does not store your online banking credentials or full card numbers. Data is handled according to our Privacy Policy.",
      "Third-party services such as Supabase (cloud hosting) and Gemini (AI processing) help deliver core functionality. Continued access to these services may require adherence to their respective terms.",
    ],
  },
  {
    id: "payments",
    title: "6. Payments & Settlements",
    content: [
      "Handl organizes expense information and may provide settlement suggestions, but it does not process payments or transfer funds between users directly.",
      "Any monetary settlements are completed outside the platform using methods agreed upon between participants (e.g., bank transfer, cash, or third-party payment apps). Handl is not responsible for disputes regarding payment completion.",
      "Handl may introduce premium plans or paid features in the future. Pricing and billing details will be communicated prior to purchase, and additional terms may apply.",
    ],
  },
  {
    id: "user-conduct",
    title: "7. User Responsibilities & Prohibited Conduct",
    content: [
      "You agree to use the Services only for lawful purposes and in accordance with these Terms.",
      "You will not:",
      "Misrepresent personal or expense information.",
      "Attempt to gain unauthorized access to the Services or related systems.",
      "Use automated scripts, bots, or scraping technologies without permission.",
      "Upload malicious content, viruses, or code that could harm the Services or other users.",
      "Use Handl to harass, threaten, defraud, or defame others.",
      "Reverse engineer, decompile, or disassemble any portion of the Services unless permitted by law.",
    ],
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    content: [
      "Handl and its licensors own all rights, title, and interest in the Services, including software, interfaces, visual design, logos, trademarks, and content.",
      "You may not use the Handl name, brand elements, or any proprietary content without prior written consent from Handl Automation Inc.",
      "Any content you submit while using the Services remains yours. By posting or sharing content, you grant Handl a limited license to host, display, and process that content solely to provide the Services to you and your invited participants.",
    ],
  },
  {
    id: "user-content",
    title: "9. User Content & Collaboration",
    content: [
      "Expense data, notes, receipts, and prompts you add to the platform are visible only to the participants you designate.",
      "You are responsible for ensuring you have the rights to share receipts or materials that include personal information about other individuals.",
      "Handl may remove or restrict content that violates these Terms or applicable law.",
    ],
  },
  {
    id: "third-party",
    title: "10. Third-Party Links & Integrations",
    content: [
      "The Services may reference or link to third-party websites, products, or services. Handl is not responsible for the availability or accuracy of third-party content and does not endorse or assume liability for third-party offerings.",
      "Your interactions with third-party providers are solely between you and the applicable provider.",
    ],
  },
  {
    id: "disclaimer",
    title: "11. Disclaimers",
    content: [
      "The Services are provided on an “as is” and “as available” basis. Handl disclaims all warranties of any kind, whether express, implied, or statutory, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      "Handl does not guarantee that the Services will be uninterrupted, error-free, secure, or free of harmful components, or that results obtained from using the Services will be accurate or reliable.",
    ],
  },
  {
    id: "limitation",
    title: "12. Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, Handl, its affiliates, officers, employees, agents, suppliers, or licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or other intangible losses resulting from:",
      "Your access to or use of, or inability to access or use, the Services.",
      "Any conduct or content of any user or third party.",
      "Unauthorized access, use, or alteration of your transmissions or content.",
      "In any case, our total liability for all claims relating to the Services is limited to the amount you paid Handl (if any) in the 12 months preceding the event giving rise to the claim.",
    ],
  },
  {
    id: "indemnification",
    title: "13. Indemnification",
    content: [
      "You agree to defend, indemnify, and hold harmless Handl and its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with:",
      "Your access to or use of the Services.",
      "Your violation of these Terms or any applicable law.",
      "Your content or data shared through the Services.",
      "Any dispute you have with another user or third party.",
    ],
  },
  {
    id: "termination",
    title: "14. Termination & Suspension",
    content: [
      "You may stop using the Services at any time and request account deletion by emailing tryhandl.it@gmail.com.",
      "Handl may suspend or terminate your access if we believe you have violated these Terms, our Privacy Policy, or applicable law, or if it is necessary to protect our users or business.",
      "Upon termination, certain provisions that by their nature should survive will remain in effect (including intellectual property rights, disclaimers, limitation of liability, and indemnity obligations).",
    ],
  },
  {
    id: "governing-law",
    title: "15. Governing Law & Dispute Resolution",
    content: [
      "These Terms are governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to its conflict of law principles.",
      "Any disputes arising from or relating to these Terms or the Services will be resolved in the provincial or federal courts located in Toronto, Ontario, and you consent to the jurisdiction of such courts.",
      "Prior to filing a claim, both parties agree to attempt to resolve disputes informally by contacting tryhandl.it@gmail.com.",
    ],
  },
  {
    id: "changes",
    title: "16. Changes to These Terms",
    content: [
      "We may update these Terms to reflect changes in the Services, legal requirements, or business practices.",
      "If we make material changes, we will provide notice through email, the product dashboard, or other appropriate means.",
      "The revised Terms become effective immediately upon posting unless otherwise specified. Continued use of the Services after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "contact",
    title: "17. Contact Us",
    content: [
      "Handl Automation Inc.",
      "Toronto, Ontario, Canada",
      "📧 tryhandl.it@gmail.com",
    ],
  },
];

const TermsPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-brand-background text-brand-text-primary">
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-18 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-80 pointer-events-none" />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-brand-text-tertiary">
              Handl Terms & Conditions
            </p>
            <h1 className="heading-lg mt-3 text-brand-primary">
              Terms of Service
            </h1>
            <p className="mt-4 text-brand-text-secondary">
              Effective Date: <strong>November 11, 2025</strong>
              <br />
              Last Updated: <strong>November 11, 2025</strong>
            </p>
            <p className="mt-6 text-brand-text-secondary leading-relaxed">
              Please read these Terms & Conditions carefully before using Handl
              Inc.’s expense sharing application and related online services. By
              accessing or using Handl, you agree to be bound by these Terms. If
              you do not agree, do not access or use the Services.
            </p>
            <Link
              href="/"
              className="inline-flex items-center mt-8 text-sm font-semibold text-brand-primary hover:text-brand-text-primary transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[260px,1fr] gap-10">
            <nav className="lg:sticky lg:top-24 h-max hidden lg:block">
              <ul className="space-y-2 text-sm font-medium text-brand-text-secondary">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block rounded-xl px-4 py-2 hover:bg-brand-icon-bg-light/60 hover:text-brand-primary transition-all"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-12">
              {sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="rounded-3xl border border-brand-border bg-white p-6 sm:p-8 shadow-soft-1 scroll-mt-24"
                >
                  <h2 className="text-2xl font-bold text-brand-primary mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3 text-brand-text-secondary leading-relaxed">
                    {section.content.map((paragraph, idx) => {
                      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                        return (
                          <p key={idx} className="font-semibold text-brand-primary">
                            {paragraph.replaceAll("**", "")}
                          </p>
                        );
                      }
                      return <p key={idx}>{paragraph}</p>;
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;

