import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Handl Privacy Policy",
  description:
    "Understand how Handl collects, uses, and protects your personal information when you use our expense sharing services.",
};

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    content: [
      "Handl is an AI-powered expense-splitting and card-linked finance app that helps users automatically track and divide group expenses through secure financial connections and smart automation.",
      "When you use Handl:",
      "You choose who to share expenses with (individual friends or groups).",
      "Expense details are only visible to those with whom you explicitly share them.",
      "Shared participants can view, edit, or delete expenses that involve them.",
      "Expenses and receipts are never made public.",
    ],
  },
  {
    id: "data-collection",
    title: "2. Data We Collect",
    content: [
      "**A. Information You Provide**",
      "Account information: name, email address, and phone number.",
      "User-generated content: expenses, groups, receipt uploads, and AI prompts.",
      "Communications: when you contact support or participate in feedback.",
      "**B. Automatically Collected Information**",
      "Device & technical data: IP address, device model, OS version, app version.",
      "Usage data: interactions within the app (feature usage, activity logs, error reports).",
      "Approximate location: used to detect region-specific compliance and currencies.",
      "**C. Information from Connected Services**",
      "Financial data via Plaid: When you link a bank or card, Handl uses Plaid Technologies, Inc. (“Plaid”) to securely connect your financial accounts. Plaid provides read-only transaction and balance data to power expense tracking and analytics. Handl never sees or stores your login credentials or full card numbers. Data transmitted through Plaid is governed by the Plaid Privacy Policy.",
      "Data via Supabase: Supabase hosts our secure databases and authentication services. All user records are encrypted and managed according to Supabase’s security standards.",
      "Data via Gemini: If you use Handl’s AI features (e.g., receipt scanning or smart suggestions), input data (such as text or receipt images) may be processed through Google’s Gemini API solely to return responses. These prompts are not used to train Gemini models.",
    ],
  },
  {
    id: "data-use",
    title: "3. How We Use Your Information",
    content: [
      "We process personal data to:",
      "Operate and deliver the Services.",
      "Authenticate users and secure account access.",
      "Improve user experience by analyzing usage patterns and feedback.",
      "Enable card-linked features.",
      "Provide support, troubleshoot bugs, and communicate updates.",
      "Comply with legal obligations, such as fraud prevention and regulatory reporting.",
    ],
  },
  {
    id: "sharing",
    title: "4. How We Share Information",
    content: [
      "We share data only as necessary to provide our Services:",
      "Service providers: Plaid (financial data), Supabase (cloud hosting), Gemini (AI processing), and third-party analytics or error-tracking tools.",
      "Legal requirements: to comply with laws, regulations, or court orders.",
      "Non-identifiable data: aggregated, anonymized insights (e.g., spending trends) may be shared for product analytics - never personally identifying.",
      "Handl does not sell or rent personal data to advertisers or third parties.",
    ],
  },
  {
    id: "transfers",
    title: "5. International Data Transfers",
    content: [
      "Handl operates from Canada but may process information in the United States and European Union. Regardless of where data is processed, we apply consistent safeguards, including encryption, access control, and contractual data-processing agreements compliant with GDPR, CCPA, and PIPEDA.",
    ],
  },
  {
    id: "security",
    title: "6. Security",
    content: [
      "We use industry-standard technical and administrative measures:",
      "Encryption: TLS for data in transit, AES-256 for data at rest.",
      "Access control: strict least-privilege authentication for staff.",
      "Monitoring: continuous audits and threat detection.",
      "However, no system is 100% secure. Users are encouraged to use trusted emails and keep their devices protected.",
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies and Tracking",
    content: [
      "Handl’s website and mobile app may use cookies or similar technologies to maintain sessions, remember preferences, and analyze traffic. You can adjust cookie preferences through your browser or device settings.",
    ],
  },
  {
    id: "rights",
    title: "8. Your Rights and Choices",
    content: [
      "Depending on your jurisdiction:",
      "Access and correction: request access to or correction of your personal data.",
      "Deletion: request that we delete your account and related data.",
      "Withdrawal of consent: revoke permissions for connected services.",
      "Portability: request a copy of your Handl data.",
      "Requests can be made by emailing tryhandl.it@gmail.com.",
      "We will respond within legal timeframes (typically 30 days).",
    ],
  },
  {
    id: "retention",
    title: "9. Data Retention",
    content: [
      "We retain personal data only as long as necessary to provide the Services, comply with legal obligations, and prevent fraud. Once data is no longer needed, it is securely deleted or anonymized.",
    ],
  },
  {
    id: "children",
    title: "10. Children’s Privacy",
    content: [
      "Handl is not intended for children under 18 (or the minimum age in your jurisdiction).",
      "We do not knowingly collect information from minors. If you believe a child has provided us personal data, contact tryhandl.it@gmail.com and we will promptly delete it.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically.",
      "If we make material changes, we will notify users via email or in-app notice.",
      "The revised version becomes effective immediately upon posting.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: [
      "Handl Inc.",
      "Toronto, Ontario, Canada",
      "📧 tryhandl.it@gmail.com",
    ],
  },
];

const PrivacyPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-brand-background text-brand-text-primary">
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-18 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-80 pointer-events-none" />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-brand-text-tertiary">
              Handl Privacy Policy
            </p>
            <h1 className="heading-lg mt-3 text-brand-primary">
              Your Privacy Matters
            </h1>
            <p className="mt-4 text-brand-text-secondary">
              Effective Date: <strong>November 11, 2025</strong>
              <br />
              Last Updated: <strong>November 11, 2025</strong>
            </p>
            <p className="mt-6 text-brand-text-secondary leading-relaxed">
              Welcome to Handl. Your right to privacy and data security is
              important to us. This Privacy Policy explains how Handl Inc.
              (“Handl”, “we”, “us”, or “our”) collects, uses, discloses, and
              protects your personal information when you use our mobile
              application, website, and related online services (collectively,
              the “Services”). By using our Services, you agree to the terms
              described in this Privacy Policy. If you do not agree, please do
              not use the Services.
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
              <div
                id="scope"
                className="rounded-3xl border border-brand-border bg-white p-6 sm:p-8 shadow-soft-1"
              >
                <h2 className="text-2xl font-bold text-brand-primary mb-4">
                  Scope
                </h2>
                <p className="text-brand-text-secondary leading-relaxed">
                  Welcome to Handl. Your right to privacy and data security is
                  important to us. This Privacy Policy explains how Handl Inc.
                  (“Handl”, “we”, “us”, or “our”) collects, uses, discloses, and
                  protects your personal information when you use our mobile
                  application, website, and related online services
                  (collectively, the “Services”). By using our Services, you
                  agree to the terms described in this Privacy Policy. If you do
                  not agree, please do not use the Services.
                </p>
              </div>

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

export default PrivacyPage;

