import CtaImageSlider from "@/components/common/cta-image-slider";
import CTA from "@/components/common/cta-section";
import HeroSection from "@/components/products/hero-section";
import ProductItems from "@/components/products/product-list";
import LayoutTwo from "@/components/shared/LayoutTwo";
import React from "react";

export const metadata = {
  title: "Mystic Minds Products",
  description:
    "Discover expert blogs from Mystic Minds on AI, data solutions, and digital transformation strategies.",
};

const Products = () => {
  return (
    <LayoutTwo>
      <HeroSection />
      <ProductItems />
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

export default Products;
