import CTA from "@/components/common/cta-section";
import CtaImageSlider from "@/components/shared/CtaImageSlider";
import FAQ from "@/components/shared/FAQ";
import LayoutTwo from "@/components/shared/LayoutTwo";

export const metadata = {
  title: "FAQ | MysticMind Data Solutions",
  description:
    "Find answers to common questions about MysticMind Data Solutions, including our services in data analytics, AI, cloud platforms, data security, and how to get started with us.",
};

const FAQPage = () => {
  return (
    <LayoutTwo>
      <FAQ bigTitleWithBadge={true} />
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
      </CTA>{" "}
      ̵
    </LayoutTwo>
  );
};

export default FAQPage;
