import Process from "@/components/services-page/Process";
import ServicesHero from "@/components/services/hero-section";
import ServicesSection from "@/components/services/services-card-section";
import CTA from "@/components/shared/CTA";
import CtaImageSlider from "@/components/shared/CtaImageSlider";
import LayoutTwo from "@/components/shared/LayoutTwo";

export const metadata = {
  title: "Services Page - MysticMinds",
};

const ServicesPage = () => {
  return (
    <LayoutTwo>
      <ServicesHero
        badgeTitle="Services"
        title="Services "
        italicTitle=""
        scale
        description="Explore our innovative cutting-edge no-code websites designed to captivate and engage your visitors effortlessly"
        spacing="pt-20 md:pt-44 max-sm:pb-10 max-md:pb-16 md:py-44 lg:py-[200px] relative overflow-hidden"
      />
      <ServicesSection />
      <Process />
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
    </LayoutTwo>
  );
};

export default ServicesPage;
