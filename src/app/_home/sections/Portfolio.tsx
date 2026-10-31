import Image from "next/image";

const portfolioCompanies = [
  { name: "Igloo", website: "https://www.igloo.com.ng", logo: "/images/portfolio/igloo.png" },
  { name: "Kaizen", website: "https://www.kaizen.ng", logo: "/images/portfolio/kaizen.jpeg" },
  { name: "Axiona", website: "https://www.axiona.com.ng", logo: "/images/portfolio/axiona.jpeg" },
  { name: "Chow45", website: "https://chow45.app/", logo: "/images/portfolio/chow45.jpeg" },
  { name: "Stableverse", website: "#", logo: "/images/portfolio/stableverse.png" },
  { name: "Bezoni", website: "#", logo: "/images/portfolio/bezoni.png" },
];

const portfolioStats = [
  { value: "$3M+", label: "Projected investment raise" },
  { value: "5+", label: "Portfolio companies" },
  { value: "2+", label: "Countries" },
  { value: "30+", label: "Founders" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-6 py-20 sm:px-10 lg:px-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">Portfolio</p>
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Investing in founders building what comes next.
          </h2>
          <p className="text-base leading-7 text-neutral-500 sm:text-lg">
            We invest in selected founders and companies whose ambition and needs align with our focus. Company profiles and updates will be shared here as the portfolio grows.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioStats.map((stat) => (
            <div key={stat.label} className="bg-white p-6">
              <p className="text-3xl font-semibold text-primary-alt">{stat.value}</p>
              <p className="mt-2 text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 w-full flex flex-wrap items-center justify-center gap-16">
          {portfolioCompanies.map((company) => (
            <a
              key={company.name}
              href={company.website}
              target="_blank"
              rel="noreferrer"
              aria-label={`${company.name} website placeholder`}
              className="flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo placeholder`}
                width={80}
                height={80}
                className="w-32"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
