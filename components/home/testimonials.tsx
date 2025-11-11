"use client";

import { Cpu, Database, Search, CheckSquare, Cloud } from "lucide-react";
import { ServiceCard } from "./service-card";
import RevealWrapper from "../animations/RevealWrapper";

/* -------------------------------------------------------------
   Services data – unchanged
   ------------------------------------------------------------- */
const services = [
  {
    id: 1,
    title: "AI for Business Optimization",
    description:
      "AI & ML solutions to optimise business operations and enhance customer experience.",
    icon: Cpu,
    color:
      "bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 text-blue-700",
    // size is now calculated in the component – no need to store it here
  },
  {
    id: 2,
    title: "Generative AI Database Query",
    description:
      "Users can query relational databases using natural language, getting SQL or data results without technical knowledge.",
    icon: Database,
    color:
      "bg-gradient-to-br from-green-100 via-emerald-100 to-green-200 text-green-700",
  },
  {
    id: 3,
    title: "Company Search Engine with LLMs",
    description:
      "Custom search engine using LLMs, RAG, ChromaDB, and Python for in-depth company research.",
    icon: Search,
    color:
      "bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 text-amber-700",
  },
  {
    id: 4,
    title: "AI in Data Quality Management",
    description:
      "Automating data checks, identifying issues, and suggesting remediation to maintain high data quality.",
    icon: CheckSquare,
    color:
      "bg-gradient-to-br from-purple-100 via-violet-100 to-pink-100 text-purple-700",
  },
  {
    id: 5,
    title: "Cloud-Based Data & AI Solutions",
    description:
      "Designing scalable data solutions and architectures using cloud platforms (Azure, AWS, GCP) as part of their Data & AI offering.",
    icon: Cloud,
    color:
      "bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 text-rose-700",
  },
];

/* -------------------------------------------------------------
   ServicesSection – ultra-responsive grid
   ------------------------------------------------------------- */
const Testimonials = () => {
  return (
    <section className="overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <RevealWrapper className="rv-badge reveal-me mb-3">
          <span className="rv-badge-text">Services</span>
        </RevealWrapper>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider text-gray-900">
          What startups say <i className="font-instrument">about us</i>
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold italic text-violet-600">
          AI capabilities
        </h2>
      </div>

      {/* Grid – fully responsive */}
      <div
        className={`
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-12   /* 12-column base for large screens */
        `}
      >
        {/* Card 1 – span 2 cols on lg, full width on smaller */}
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-8">
          <ServiceCard service={services[0]} index={0} total={services.length} />
        </div>

        {/* Card 2 – same as Card 1 */}
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-4">
          <ServiceCard service={services[1]} index={1} total={services.length} />
        </div>

        {/* Card 3 – span 1 col on lg, full width on smaller */}
        <div className="sm:col-span-1 md:col-span-1 lg:col-span-4">
          <ServiceCard service={services[2]} index={2} total={services.length} />
        </div>

        {/* Card 4 */}
        <div className="sm:col-span-1 md:col-span-1 lg:col-span-4">
          <ServiceCard service={services[3]} index={3} total={services.length} />
        </div>

        {/* Card 5 */}
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-4">
          <ServiceCard service={services[4]} index={4} total={services.length} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;