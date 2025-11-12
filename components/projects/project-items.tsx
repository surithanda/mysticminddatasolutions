import getMarkDownData from "@/utils/GetMarkDownData";
import RevealWrapperV2 from "../animation/RevealWrapperV2";

export interface ProjectsDataType {
  slug: string;
  content: string;
  [key: string]: any;
}

let projects: any[] = [
  {
    slug: "portfolio-redesign",
    title: "Custom Comany Search",
    category: "AI POWERDED RESEARCH",
    // year: 2024,
    image: "/images/projects/SquareTwo.png",
    alt: "Portfolio redesign preview image",
    content:
      "A complete redesign of my personal portfolio using Next.js, MDX, and Tailwind.",
    featured: true,
  },
  {
    slug: "ecommerce-ui",
    title: "Data Quality Management",
    category: "Data Solution",
    year: 2023,
    image: "/images/projects/SquareThree.png",
    alt: "Data Quality Management",
    content:
      "A modern and responsive shopping experience built with Figma and React.",
    featured: false,
  },
  {
    slug: "saas-dashboard",
    title: "Talk to Relational DB",
    category: "GENERATIVE AI",
    year: 2022,
    image: "/images/projects/SqaureOne.png",
    alt: "SaaS dashboard preview image",
    content:
      "A high-performance analytics dashboard made with React, TypeScript, and Recharts.",
    featured: true,
  },

];

// let sortedProjects = projects.toSorted((a, b) => a.year - b.year);
// console.log(sortedProjects, "hey");

const ProjectItems = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] relative">
       <img
        src="/images/patterns/rotating.gif"
        alt="logo-spinner"
        className="pointer-events-none absolute -left-[50%] xl:-left-[16%] top-[50%]  w-[400px] md:w-[500px] opacity-50 -z-40 lg:z-40 "
      />
      <div className="container grid gap-20 max-md:gap-y-16 md:grid-cols-2 xl:gap-16">
        {projects?.map((project) => (
          <RevealWrapperV2
            as="a"
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="reveal-me project-item underline-hover-effect group col-span-full flex flex-col gap-x-10 gap-y-6 lg:items-center"
          >
            <figure className="overflow-hidden max-lg:w-full">
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-2xl"
              />
            </figure>
            <div className="project-item-content">
              <p className="text-sm font-normal uppercase leading-3 tracking-[5px] text-secondary dark:text-backgroundBody md:leading-6 md:tracking-[8px]">
                {project.category}
              </p>
              <div className="blog-title mb-2 mt-3 md:mt-4 lg:mb-4 lg:mt-5 xl:mt-7">
                <h3 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[56px] lg:leading-[1.2] lg:tracking-[-1.68px]">
                  {project.title}
                </h3>
              </div>
              {/* <p className="text-base leading-[1.4] tracking-[0.48px] text-[#000000b3] dark:text-dark-100 md:text-2xl">
                /{project.year}
              </p> */}
            </div>
          </RevealWrapperV2>
        ))}
      </div>
    </section>
  );
};

export default ProjectItems;
