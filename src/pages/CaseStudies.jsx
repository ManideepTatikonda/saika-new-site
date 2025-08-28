import { Link } from "react-router-dom";

const CASES = [
  {
    img: "CS1.png",
    title: "Case Study: TeleRx",
    blurb:
      "Transforming Rural Pharmaceutical Access through Telepharmacy",
  },
  {
    img: "CS2.png",
    title: "Case Study: SmartAgro",
    blurb:
      "Precision Farming Dashboard for Smallholder Farmers",
  },
  {
    img: "/CS3.png",
    title: "Case Study: Skilloop",
    blurb:
      "Learning Management System for Rural Vocational Training",
  },
  {
    img: "CS4.png",
    title: "Case Study:  SmartCommute",
    blurb:
      " AI-Powered Traffic Flow Management Platform",
  },
  {
    img: "CS5.png",
    title: "Case Study: GreenGrid",
    blurb:
      "Microgrid Monitoring & Control Interface",
  },
  {
    img: "CS6.png",
    title: "Case Study:LegalBridge",
    blurb:
      "Case & Contract Management for Legal Teams",
  },
  {
    img: "CS7.png",
    title: "Case Study: CreditEase",
    blurb:
      "Microcredit Monitoring Platform for SHGs and MFIs",
  },
  {
    img: "CS8.png",
    title: "Case Study: TraceLink",
    blurb:
      "Real-Time Cold Chain Monitoring System",
  },
  {
    img: "CS9.png",
    title: "Case Study: InsightIQ",
    blurb:
      "AI-Powered Market Intelligence Engine",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate min-h-[72vh] grid items-end">
  {/* Background */}
  <div className="absolute inset-0 -z-10 bg-[url('/caseStudy.png')] bg-cover bg-center" />
  <div className="absolute inset-0 -z-10 bg-slate-900/0" />
  <div className="mx-auto w-full max-w-[1240px] px-8 lg:px-24 pb-8" />
</section>


        {/* Breadcrumb */}
        <nav className="mx-auto max-w-[1440px] px-8 lg:px-24 py-6">
        <ol className="flex items-center gap-3 text-sm md:text-base">
          <li>
            <Link
              to="/"
              className="text-teal-500 font-semibold hover:text-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              Home
            </Link>
          </li>
          <li aria-hidden className="text-slate-400 select-none">›</li>
          <li className="text-slate-400">Case Studies</li>
        </ol>
      </nav>

      {/* Page heading */}
      <header className="mx-auto max-w-[1240px] px-8 lg:px-24 py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-style-[Segeo UI] font-extrabold tracking-tight ">
          CASE STUDIES
        </h1>
      </header>

 

<section className="mx-auto max-w-[1350px] px-8 lg:px-24 pb-16">
  <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
    {CASES.map((c) => (
      <figure key={c.title} className="group">
        {/* image card */}
        {/* <div className="rounded-2xl bg-white ring-1 ring-slate-200/30 shadow-sm hover:shadow-sm transition"> */}
        <div className="rounded-2xl ">
          {/* fixed ratio, but *contain* the image so it never crops */}
          <div className="aspect-[1/1] grid place-items-center">
            <img
              src={c.img}
              alt=""
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* caption below card */}
        <figcaption className="mt-3 text-[15px] leading-relaxed text-slate-800">
          <span className="font-semibold">{c.title}</span>
          <span> &ndash; {c.blurb}</span>
        </figcaption>
      </figure>
    ))}
  </div>
</section>





    </div>
  );
}
