import React from 'react';
import RevealWrapper from '../animation/RevealWrapper';

const HeroSection = () => {
  return (
    <section className=" pb-14 pt-[130px] md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[180px] relative overflow-hidden lg:overflow-visible">
       <img
        src="/images/patterns/rotating.gif"
        alt="logo-spinner"
        className="pointer-events-none absolute -right-[50%] md:-right-[26%] top-35  w-[500px] md:w-[800px] opacity-25 z-40"
      />
      <RevealWrapper className="container">
       
        <h1 className="mt-5 text-center sm:mt-6 md:mt-9 xl:text-nowrap">
          Empowering Tomorrow's
          <span className="ml-5 inline-block font-instrument italic max-sm:mr-3">Insights,</span>
          <br className="hidden xl:block" />
          Today
        </h1>

        <p className="mt-3 text-center md:mt-7">
          With years of data and AI mastery, our team of innovators, analysts, and tech <br />
          pioneers come together here for you to explore.
        </p>
      </RevealWrapper>
    </section>
  );
};

export default HeroSection;