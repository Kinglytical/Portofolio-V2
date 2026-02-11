import Threads from "@/components/Threads"

export default function Home() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/30" />
      <div className="relative z-10 flex h-full items-center justify-center p-5 text-center">
        <div className="w-full max-w-3xl text-white">
          <h3 className="font-bold">Hi I Am</h3>
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            A Junior Full Stack Web Developer and Business Analyst
          </h1>
        </div>
      </div>
    </section>
  )
}
