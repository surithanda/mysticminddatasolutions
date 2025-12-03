import PageHero from "@/components/common/page-hero-section";
import CTA from "@/components/shared/CTA";
import CtaImageSlider from "@/components/shared/CtaImageSlider";
import LayoutTwo from "@/components/shared/LayoutTwo";
import TermsPolicyBody from "@/components/terms/terms-policy-body";

export const metadata = {
  title: "Terms & Conditions - Mystic Mind Solutions",
};

export interface TermsDataType {
  slug: string;
  content: string;
  [key: string]: any;
}

const TermsPage = () => {
  const termsData: any[] = [
    {
      slug: "terms-and-conditions",
      content: `
  # Terms and Conditions
  
  ### 1. Acceptance:
  By accessing or using our website, software, or related services (collectively, the "Services"), you agree to comply with these Terms and Conditions. If you do not agree, please discontinue use of our Services.
  
  ### 2. Use of Services:
  You agree to use our Services only for lawful purposes and in accordance with these Terms. You are responsible for any activity carried out through your account or devices.
  
  ### 3. Intellectual Property:
  All content, software, text, graphics, and trademarks on our Services are protected by intellectual property laws. You may not copy, distribute, modify, or use our content without prior written consent.
  
  ### 4. Software Licenses:
  If you purchase, download, or license our software, its use will be governed by the applicable license agreement provided with that software.
  
  ### 5. Disclaimer of Warranties:
  Our Services are provided on an **“as is” and “as available”** basis without warranties of any kind. We do not guarantee that the Services will be secure, error-free, or uninterrupted.
  
  ### 6. Limitation of Liability:
  To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our Services, even if we have been advised of the possibility of such damages.
  
  ### 7. Indemnification:
  You agree to indemnify and hold us harmless from claims, damages, or expenses resulting from your use of the Services or any violation of these Terms.
  
  ### 8. Governing Law:
  These Terms are governed by and construed in accordance with the laws of the State of Texas, without regard to conflict-of-law principles.
  
  ### 9. Changes to These Terms:
  We may update these Terms and Conditions from time to time. Any changes will be effective when posted, and continued use of our Services means you agree to the updated Terms.
  
  ### 10. Contact Us:
  If you have any questions about these Terms and Conditions, please contact us at **hello@mysticminddatasolutions.com**.
  `,
    },
  ];
  return (
    <LayoutTwo>
      <PageHero
        title="Terms & "
        italicTitle="Conditions"
        badgeTitle="Terms"
        scale
      />
      <TermsPolicyBody termsData={termsData} />

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

export default TermsPage;
