import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const projectItems = [
  {
    name: "Portofolio",
    description:
      "Personal website built to showcase my projects, skills, and experience as a Full Stack Developer.",
    image: "/portofolio.png", // taro image nanti
    status: "On Progress",
    language: ["Next.js", "PostgreSQL", "Tailwind", "shadcnUi"],
    link : "/projects/portofolio"
  },
  {
    name: "Sniff Order Management System",
    description:
      "Internal tracking system to manage Inventory flow, reducing manual processing.",
    image: "/snifff.png",
    status: "Completed",
    language: ["Google Apps Script", "Sheets", "Automation"],
    link : "/projects/snifff"
  },
  {
    name: "Galo Finance System",
    description:
      "Internal Tracking for Financial System to help company to track cash flow",
    image: "/finance.jpeg",
    status: "On Progress",
    language: ["Next.js", "PostgreSQL", "Tailwind", "shadcnUi", "prisma", "trpc"],
    link : "/projects/galo-finance"
  },
  
];

export default function Projects() {
  return (
    <section className="bg-[#5a5370] px-6 py-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-16">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="text-gray-200 leading-relaxed">
          A collection of applications I've built to solve real business
          problems and improve operational efficiency.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectItems.map((project, index) => (
          <Link key={index} href={project.link} className="group">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ">
              
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-white">
                    {project.name}
                  </h4>

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-yellow-500/20 text-yellow-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.language.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-md text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
