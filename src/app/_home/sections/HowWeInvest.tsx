const focusAreas = [
  {
    title: "Build with founders",
    description:
      "Practical resources, mentorship, and operational support that strengthen business models and prepare companies for growth.",
  },
  {
    title: "Connect founders to capital",
    description:
      "Introductions to investors whose focus fits each company\'s stage, sector, and geography.",
  },
  {
    title: "Invest directly",
    description:
      "Selected companies receive direct investment alongside the hands-on support of the Founders Africa platform.",
  },
];

export default function HowWeInvest() {
  return (
    <section id="how-we-invest" className="bg-[#f7faef] px-6 py-20 sm:px-10 lg:px-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">Our Thesis</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Great companies can emerge from every African market.
          </h2>
          <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg">
            Founders need more than capital. They need practical support, strong operating foundations,
            and access to investors who understand their stage, sector, and market.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <article key={area.title} className="rounded-2xl border border-black/10 bg-white p-7">
              <span className="text-sm font-medium text-primary">0{index + 1}</span>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-black">{area.title}</h3>
              <p className="mt-4 leading-7 text-neutral-500">{area.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg">
          We work across the founder journey, from idea and pre-seed through growth stage, with a deliberate focus on founders building beyond the continent&apos;s most-funded markets.
        </p>
      </div>
    </section>
  );
}
