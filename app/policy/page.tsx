import CtaImageSlider from "@/components/common/cta-image-slider";
import CTA from "@/components/common/cta-section";
import PageHero from "@/components/common/page-hero-section";
import TermsPolicyBody from "@/components/policy/terms-policy-body";
import LayoutTwo from "@/components/shared/LayoutTwo";

export const metadata = {
  title: "Privacy Policy - Mystic Minds Solutions",
};

export interface TermsDataType {
  slug: string;
  content: string;
  [key: string]: any;
}

// ✅ Static markdown data for the Privacy Policy page
const termsData: TermsDataType[] = [
  {
    slug: "privacy-policy",
    content: `
# Privacy Policy

### 1. Introduction:
Mystic Minds Solutions ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website, software, or related services (collectively, the "Services").

### 2. Information We Collect:
We may collect personal and non-personal information, including:
- **Personal Information:** name, email address, phone number, company name, etc.
- **Usage Data:** pages visited, browser type, device information, and IP address.
- **Cookies and Tracking:** used to enhance user experience and analyze website traffic.

### 3. How We Use Your Information:
We use collected information to:
- Provide and improve our Services.
- Communicate updates, offers, or important notices.
- Respond to inquiries or customer support requests.
- Maintain website security and prevent fraudulent activity.

### 4. Sharing of Information:
We do **not** sell or rent your personal data. We may share your information only with:
- Trusted service providers assisting in operations.
- Legal authorities when required by law.
- Business transfers (e.g., mergers or acquisitions).

### 5. Data Security:
We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or loss. However, no method of transmission over the Internet is 100% secure.

### 6. Your Rights:
Depending on your location, you may have rights to:
- Access, correct, or delete your personal data.
- Withdraw consent for data processing.
- Request a copy of your data.

To exercise these rights, please contact us using the details below.

### 7. Retention of Data:
We retain your personal data only as long as necessary for the purposes outlined in this Privacy Policy, or as required by applicable laws.

### 8. Third-Party Links:
Our website may contain links to external websites. We are not responsible for the privacy practices or content of those third-party sites.

### 9. Changes to This Policy:
We may update this Privacy Policy periodically. Any updates will be reflected on this page with a revised “Last Updated” date.

### 10. Contact Us:
If you have any questions about this Privacy Policy, please contact us at  
**hello@mysticminddatasolutions.com**
`,
  },
];

const PrivacyPolicyPage = () => {
  return (
    <LayoutTwo>
      <PageHero
        title="Privacy & "
        italicTitle="Policy"
        badgeTitle="Policy"
        scale
      />

      <TermsPolicyBody termsData={termsData} heading={true} />

      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: "1", img: "/images/home/One.jpg" },
            { id: "2", img: "/images/home/Two.jpg" },
            { id: "3", img: "/images/home/Three.jpg" },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">
          A virtual coffee?
        </i>
      </CTA>
    </LayoutTwo>
  );
};

export default PrivacyPolicyPage;
