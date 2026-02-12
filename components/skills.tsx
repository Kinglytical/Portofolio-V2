"use client";

import {
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiSentry,
  
  SiGooglesheets,

} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaChartLine, FaSearch, FaUsers } from "react-icons/fa";

export default function Skills() {
  return (
    <section className="bg-[#5a5370] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Title */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-3 text-gray-200">
            A balanced combination of modern web engineering and business-driven analysis.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Web Engineering */}
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md transition hover:bg-white/20">
            <h3 className="mb-4 text-xl font-semibold">
              Full Stack Engineering
            </h3>

            <div className="mb-5 flex flex-wrap gap-4 text-3xl">
              <SiNextdotjs title="Next.js" />
              <TbApi title="tRPC" />
              <SiPrisma title="Prisma" />
              <SiPostgresql title="PostgreSQL" />
              {/* <SiNeon title="Neon DB" /> */}
              <SiSentry title="Sentry" />
            </div>

            <p className="text-gray-200 text-sm leading-relaxed">
              I build scalable full stack applications using Next.js with tRPC
              for end-to-end type safety, Prisma as ORM, and PostgreSQL powered
              by Neon. I integrate Sentry for monitoring and error tracking to
              ensure production stability and performance.
            </p>
          </div>

          {/* Business Analysis */}
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md transition hover:bg-white/20">
            <h3 className="mb-4 text-xl font-semibold">
              Business Analysis & Data
            </h3>

            <div className="mb-5 flex flex-wrap gap-4 text-3xl">
              <SiGooglesheets title="Spreadsheet" />
              <FaChartLine title="Looker Studio" />
              <FaUsers title="Stakeholder Communication" />
            </div>

            <p className="text-gray-200 text-sm leading-relaxed">
              I translate business requirements into technical solutions through
              structured documentation, spreadsheet modeling, and Looker-based
              reporting dashboards. Strong communication and research skills
              help align stakeholders and drive informed decision-making.
            </p>
          </div>

          {/* SEO & Growth */}
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md transition hover:bg-white/20">
            <h3 className="mb-4 text-xl font-semibold">
              SEO & Growth Optimization
            </h3>

            <div className="mb-5 flex flex-wrap gap-4 text-3xl">
              <FaSearch title="SEO Strategy" />
              {/* <SiAhrefs title="Ahrefs" /> */}
            </div>

            <p className="text-gray-200 text-sm leading-relaxed">
              Experienced in technical SEO, keyword research, and performance
              optimization using tools like Ahrefs and Surfer. I focus on
              increasing organic visibility, improving search rankings, and
              aligning content strategy with measurable business outcomes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
