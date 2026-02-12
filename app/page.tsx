import Threads from "@/components/Threads";
import { Button } from "@/components/ui/button";
import Masonry from "@/components/Masonry";

import Skills from "@/components/skills";

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/180/600/900",
    url: "#",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1/600/750",
    url: "#",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/20/600/800",
    url: "#",
    height: 600,
  },
  {
    id: "4",
    img: "https://picsum.photos/id/119/600/800",
    url: "#",
    height: 300,
  },
  {
    id: "5",
    img: "https://picsum.photos/id/48/600/800",
    url: "#",
    height: 500,
  },
  {
    id: "6",
    img: "https://picsum.photos/id/60/600/800",
    url: "#",
    height: 350,
  },
];

// Buat Deployment
// const items = [
//   {
//     id: "1",
//     img: "/projects/dashboard.png",
//     url: "#",
//     height: 400,
//   },
//   {
//     id: "2",
//     img: "/projects/ecommerce.png",
//     url: "#",
//     height: 300,
//   },
//   {
//     id: "3",
//     img: "/projects/analytics.png",
//     url: "#",
//     height: 500,
//   },
// ];

export default function Home() {
  return (
    <section className="text-white">
      {/* HERO SECTION */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#5a5370] px-5 text-center">
        <div className="absolute inset-0">
          <Threads
            color={[0.8784, 0.8666, 0.9372]}
            amplitude={1}
            distance={0}
            enableMouseInteraction
          />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-200">
            Hi, I am
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Full Stack Web Developer <br /> & Business Analyst
          </h1>

          <p className="text-gray-200">
            I build scalable web applications that solve real business problems.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg">Contact Me</Button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[#5a5370] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>

            <p className="text-gray-200 leading-relaxed">
              I'm Saddam Rafiansyach, a Full Stack Developer with a background
              in Business Analysis. I enjoy building web applications that don’t
              just work, but actually solve problems and make processes more
              efficient.
            </p>

            <p className="text-gray-200 leading-relaxed">
              With experience in development and data handling, I turn business
              needs into practical and scalable digital solutions. I focus on
              writing clean, maintainable code while understanding how systems
              are used in real workflows.
            </p>

            <Button size="lg">Explore More</Button>
          </div>

          {/* RIGHT */}
          <div>
            <Masonry
              items={items}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover
              hoverScale={0.95}
              blurToFocus
              colorShiftOnHover={false}
            />
          </div>
        </div>
      </section>
      <Skills/>
    </section>
  );
}
