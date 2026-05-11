// Legal documents — Privacy Policy and Terms of Service.
//
// IMPORTANT: These are working templates grounded in Nigerian law
// (Nigeria Data Protection Act 2023, Companies and Allied Matters Act
// 2020) and standard international best practices. They are NOT legal
// advice. Before relying on these for the live site, have a Nigerian-
// qualified lawyer review and adapt them to MIBTY's actual data flows
// and contractual practice.
//
// Specifically pending the team's confirmation:
//   - Whether a Data Protection Officer (DPO) has been formally
//     designated under NDPA s.32
//   - The exact list of sub-processors used (hosting, email,
//     analytics, CMS, booking)
//   - Whether MIBTY transfers personal data outside Nigeria and under
//     what mechanism (NDPC whitelist, SCCs, BCRs, etc.)
//   - Cookie inventory once analytics / marketing tools are wired
//   - Whether the company offers any paid service via the site (today
//     it is informational only)

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDocument = {
  slug: "privacy" | "terms";
  title: string;
  intro: string;
  effectiveDate: string; // ISO date
  sections: LegalSection[];
};

const EFFECTIVE = "2026-05-11";

export const legalDocuments: LegalDocument[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    effectiveDate: EFFECTIVE,
    intro:
      "MIBTY NIG LTD (“MIBTY”, “we”, “us”, “our”) respects your privacy. This Privacy Policy explains what personal data we collect when you visit this website or contact us, why we collect it, how we use it, who we share it with, and the rights you have under the Nigeria Data Protection Act 2023 (“NDPA”) and other applicable laws.",
    sections: [
      {
        heading: "1. Who we are",
        paragraphs: [
          "MIBTY NIG LTD is a private company limited by shares, incorporated under the Companies and Allied Matters Act 2020 (RC pending publication on this site), with its registered office in Lagos State, Nigeria.",
          "For the purposes of the NDPA, MIBTY is the data controller of personal data collected through this website. You can reach us at hello@mibty.com for any privacy-related inquiry.",
        ],
      },
      {
        heading: "2. What data we collect",
        paragraphs: [
          "We only collect personal data that you provide to us voluntarily or that is necessary to operate the website. Specifically:",
        ],
        list: [
          "Information you submit through the contact form: your name, email address, organization, role, the nature of your inquiry, and any other information you choose to include in your message.",
          "Information automatically collected by our hosting and analytics providers: IP address (in truncated or hashed form where supported), browser and device type, referring URL, pages viewed, and approximate location derived from IP. We do not use this information to identify you personally.",
          "If you book a meeting through a third-party calendar provider embedded on the site, that provider will collect your name, email, and scheduling preferences directly. Their privacy policy will apply to that interaction in addition to ours.",
        ],
      },
      {
        heading: "3. Why we use your data",
        paragraphs: [
          "We process personal data for the following purposes and on the following legal bases under the NDPA:",
        ],
        list: [
          "To respond to your inquiry, scope potential engagements, and provide information you have requested — on the basis of taking steps at your request prior to entering into a contract.",
          "To send you our newsletter or other communications you have explicitly opted in to receive — on the basis of your consent, which you may withdraw at any time.",
          "To operate, secure, and improve the website, including measuring aggregate usage — on the basis of our legitimate interest in running a safe and useful website, balanced against your rights.",
          "To comply with our legal obligations, including responding to lawful requests from public authorities and complying with tax and accounting law.",
        ],
      },
      {
        heading: "4. Who we share your data with",
        paragraphs: [
          "We do not sell your personal data. We share it only with the categories of recipients listed below, and only to the extent necessary for the purposes set out above:",
        ],
        list: [
          "Our hosting provider (currently Vercel Inc., United States), which processes site traffic and hosts our infrastructure.",
          "Our content management and form-handling providers, where used, which store inquiry submissions and structured content.",
          "Our transactional email provider, where used, which delivers acknowledgements and replies on our behalf.",
          "Our analytics provider, where used, which processes anonymised or pseudonymised usage data.",
          "Professional advisers (lawyers, auditors, accountants) under a duty of confidentiality, where strictly necessary.",
          "Public authorities or courts, where we are legally required to disclose information.",
        ],
        // Note: keep this list aligned with the Sub-processors register
        // maintained internally; update both whenever a vendor changes.
      },
      {
        heading: "5. International transfers",
        paragraphs: [
          "Some of the service providers listed above are located outside Nigeria. Where we transfer personal data outside Nigeria, we do so only when the destination country has been deemed by the Nigeria Data Protection Commission to provide adequate protection, or when appropriate safeguards (such as Standard Contractual Clauses, where required) are in place.",
          "If you would like a copy of the safeguards that apply to a specific transfer, please contact us at hello@mibty.com.",
        ],
      },
      {
        heading: "6. How long we keep your data",
        paragraphs: [
          "We retain personal data only for as long as is necessary for the purposes for which it was collected, or as required by law. As a general rule:",
        ],
        list: [
          "Inquiry submissions are retained for up to 24 months after the last contact, then deleted or anonymised.",
          "Newsletter subscriber data is retained until you unsubscribe.",
          "Records required for tax, accounting, or other legal obligations are kept for the period required by applicable law.",
        ],
      },
      {
        heading: "7. Your rights under the NDPA",
        paragraphs: [
          "Subject to the conditions set out in the Nigeria Data Protection Act 2023, you have the right to:",
        ],
        list: [
          "Be informed about how your personal data is processed.",
          "Access the personal data we hold about you, and obtain a copy of it.",
          "Have inaccurate or incomplete personal data corrected.",
          "Have your personal data erased, where it is no longer needed or where you withdraw consent.",
          "Restrict or object to certain processing of your personal data.",
          "Receive your personal data in a portable format and have it transmitted to another controller, where technically feasible.",
          "Withdraw consent at any time, without affecting the lawfulness of processing carried out before the withdrawal.",
          "Lodge a complaint with the Nigeria Data Protection Commission (NDPC) if you believe we have not handled your data lawfully.",
        ],
        // To exercise these rights, the data subject can write to
        // hello@mibty.com — covered in section 11 below.
      },
      {
        heading: "8. Cookies and similar technologies",
        paragraphs: [
          "This site uses only the cookies and storage strictly necessary for it to function and, where enabled, privacy-respecting analytics that do not require consent under current NDPA guidance. We do not use advertising cookies or third-party trackers.",
          "If we introduce non-essential cookies in the future, we will request your consent through a cookie banner before they are set, and you will be able to manage your preferences at any time.",
        ],
      },
      {
        heading: "9. Security",
        paragraphs: [
          "We implement reasonable technical and organisational measures designed to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. These include encryption in transit, access controls, logging, and regular review of our security practices.",
          "No system is perfectly secure, however. If we become aware of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the NDPC and, where required, you directly, in line with our obligations under the NDPA.",
        ],
      },
      {
        heading: "10. Children",
        paragraphs: [
          "This website is not directed at children under the age of 18, and we do not knowingly collect personal data from children. If you believe we may have inadvertently collected such data, please contact us so that we can delete it.",
        ],
      },
      {
        heading: "11. Contact us and complaints",
        paragraphs: [
          "If you have any questions about this Privacy Policy, wish to exercise any of your rights under the NDPA, or wish to make a complaint, please contact us at hello@mibty.com. We will respond within the timeframes prescribed by the NDPA.",
          "You also have the right to lodge a complaint with the Nigeria Data Protection Commission. Details of how to do so are available at https://ndpc.gov.ng.",
        ],
      },
      {
        heading: "12. Changes to this policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time to reflect changes in our practices or in applicable law. When we do, we will revise the “effective date” shown at the top of the page. Material changes will be communicated more prominently, including by email where appropriate.",
        ],
      },
    ],
  },

  {
    slug: "terms",
    title: "Terms of Service",
    effectiveDate: EFFECTIVE,
    intro:
      "These Terms of Service (“Terms”) govern your use of mibty.com (the “Site”), operated by MIBTY NIG LTD (“MIBTY”, “we”, “us”, “our”). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.",
    sections: [
      {
        heading: "1. About these Terms",
        paragraphs: [
          "These Terms apply to your use of the Site only. They do not, on their own, create any consultancy, advisory, or other engagement between you and MIBTY. Any engagement we enter into with you will be governed by a separate written agreement.",
        ],
      },
      {
        heading: "2. About MIBTY",
        paragraphs: [
          "MIBTY NIG LTD is a private company limited by shares, incorporated under the Companies and Allied Matters Act 2020, with its registered office in Lagos State, Nigeria.",
        ],
      },
      {
        heading: "3. Use of the Site",
        paragraphs: [
          "You may use the Site only for lawful purposes and in accordance with these Terms. Without limiting that obligation, you agree not to:",
        ],
        list: [
          "Use the Site in any way that violates any applicable law or regulation.",
          "Use any automated means (including bots, crawlers, scrapers, or harvesters) to access, monitor, or copy the Site, except where expressly permitted by our robots.txt or with our prior written consent.",
          "Attempt to gain unauthorised access to the Site, the server on which it is stored, or any related system or network.",
          "Interfere with or disrupt the integrity or performance of the Site, including by transmitting viruses, malware, or other harmful code.",
          "Use the Site to send unsolicited communications, including by submitting the contact form for purposes other than a bona fide inquiry.",
          "Misrepresent your identity or affiliation with any person or entity when contacting us through the Site.",
        ],
      },
      {
        heading: "4. Intellectual property",
        paragraphs: [
          "All content on the Site — including text, design, source code, images, illustrations, the MIBTY name and logo, and the selection and arrangement of the Site — is owned by or licensed to MIBTY and is protected by Nigerian and international intellectual property laws.",
          "You may view, share, and link to publicly available pages of the Site for non-commercial personal use. You may not reproduce, modify, distribute, publicly display, or create derivative works from the Site or any part of it without our prior written permission, except as permitted by applicable law.",
          "Trademarks and logos of third parties shown on the Site are the property of their respective owners.",
        ],
      },
      {
        heading: "5. Inquiries and submissions",
        paragraphs: [
          "Information you submit to us through the contact form or by email is not treated as confidential by virtue of submission alone. If you intend to share confidential information with us, please ask us to enter into a non-disclosure agreement first.",
          "We make no commitment to respond to any unsolicited submission. Responding to an inquiry does not, on its own, create an engagement, a duty of care, or any other professional relationship.",
        ],
      },
      {
        heading: "6. Information on the Site",
        paragraphs: [
          "The information on this Site is provided for general informational purposes only. While we take reasonable care to ensure that information is accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Site or any information, products, services, or related graphics contained on it for any purpose.",
          "Any reliance you place on such information is strictly at your own risk.",
        ],
      },
      {
        heading: "7. Third-party links and embeds",
        paragraphs: [
          "The Site may contain links to, or embeds of, third-party websites or services that are not controlled by MIBTY (for example, a calendar booking provider). We have no control over the content, privacy practices, or availability of those sites and accept no responsibility for them. Accessing them is at your own risk and subject to their own terms.",
        ],
      },
      {
        heading: "8. Disclaimer of warranties",
        paragraphs: [
          "To the maximum extent permitted by law, the Site is provided on an “as is” and “as available” basis, without warranties of any kind, whether express, implied, statutory, or otherwise. We do not warrant that the Site will be uninterrupted, secure, error-free, or free of viruses or other harmful components.",
        ],
      },
      {
        heading: "9. Limitation of liability",
        paragraphs: [
          "To the maximum extent permitted by law, MIBTY, its directors, officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, goodwill, or anticipated savings, arising out of or in connection with your use of, or inability to use, the Site — even if MIBTY has been advised of the possibility of such damages.",
          "Nothing in these Terms excludes or limits any liability that cannot be excluded or limited under applicable law.",
        ],
      },
      {
        heading: "10. Indemnity",
        paragraphs: [
          "You agree to indemnify and hold harmless MIBTY and its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your breach of these Terms or your misuse of the Site.",
        ],
      },
      {
        heading: "11. Governing law and jurisdiction",
        paragraphs: [
          "These Terms and any dispute or claim arising out of or in connection with them or their subject matter are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.",
          "Subject to your rights under applicable consumer-protection law, you agree that the courts of Lagos State, Nigeria, will have exclusive jurisdiction to resolve any such dispute or claim.",
        ],
      },
      {
        heading: "12. Changes to these Terms",
        paragraphs: [
          "We may update these Terms from time to time. When we do, we will revise the “effective date” shown at the top of the page. Continued use of the Site after a change becomes effective constitutes acceptance of the revised Terms.",
        ],
      },
      {
        heading: "13. Contact",
        paragraphs: [
          "If you have any questions about these Terms, please contact us at hello@mibty.com.",
        ],
      },
    ],
  },
];

export function findLegal(slug: string): LegalDocument | undefined {
  return legalDocuments.find((d) => d.slug === slug);
}
