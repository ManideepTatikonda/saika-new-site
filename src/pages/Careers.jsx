import { Link } from "react-router-dom";

const PhoneIcon = (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path
        fill="currentColor"
        d="M21.6 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 1.9h2a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L7 10c1.5 2.7 3.8 5 6.5 6.5l1.3-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .6 3 .7a2 2 0 0 1 1.7 1.4z"
      />
    </svg>
  );
  
  const ROLES = [
    "UX/UI Designers",
    "Full-Stack Developers",
    "Cybersecurity Analysts",
    "Product Managers",
    "AI/ML Engineers",
    "Marketing & Content Specialists",
  ];

export default function Careers() {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        {/* Hero */}
        <section className="relative isolate min-h-[72vh] grid items-end">
    {/* Background */}
    <div className="absolute inset-0 -z-10 bg-[url('/Careers.png')] bg-cover bg-center" />
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
            <li className="text-slate-400">Careers</li>
          </ol>
        </nav>
  
       
         {/* Page title */}
      <header className="mx-auto max-w-[1350px] px-8 py-8 lg:px-24">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          CAREERS AT SAIKA TECHNOLOGIES
        </h1>
      </header>

      {/* Top 2-column content */}
      <section className="mx-auto max-w-[1350px] px-8 lg:px-24 pt-8 pb-6 grid gap-12 md:grid-cols-2">
        {/* Left column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Build the Future with Us</h2>
            <p className="mt-3 text-[15px] leading-7 text-slate-700">
              At Saika Technologies, we are redefining what's possible through
              innovation, technology, and a relentless drive for excellence.
              With a global presence in the USA and India, we bring together
              bright minds to solve real-world problems and create impact at
              scale.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-slate-700">
              We’re not just building products — we’re building a culture of
              ownership, continuous learning, and collaboration. If you're
              passionate about technology, product design, cybersecurity, AI, or
              media production, there’s a place for you here.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Life at Saika</h3>
            <p className="mt-3 text-[15px] leading-7 text-slate-700">
              We foster an open, friendly, and fast-paced work culture. Whether
              you're in our Irving, Texas office or working from Guntur, Andhra
              Pradesh, you’ll be part of a team that values creativity, trust,
              and results.
            </p>
            <blockquote className="mt-5 italic text-slate-800 border-l-4 border-teal-500 pl-4">
              “At Saika, you're not just an employee — you're a co-creator of
              our mission to build meaningful, impactful technology.”
            </blockquote>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold">Why Join Saika?</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-[15px] leading-7 text-slate-700">
              <li>
                <strong>Innovative Projects</strong> – Work on cutting-edge
                solutions across AI, cybersecurity, telehealth, product design,
                and digital media.
              </li>
              <li>
                <strong>Global Exposure</strong> – Collaborate with
                international teams and clients.
              </li>
              <li>
                <strong>Culture of Growth</strong> – Mentorship, upskilling, and
                clear progression.
              </li>
              <li>
                <strong>Flexible Work</strong> – Hybrid and remote options for
                healthy work-life balance.
              </li>
              <li>
                <strong>Inclusive Environment</strong> – Diversity, equity, and
                inclusion are how we work.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Open Positions</h2>
            <p className="mt-1 text-[15px] text-slate-600">
              We're hiring across multiple domains:
            </p>
            <ul className="mt-3 space-y-2">
              {ROLES.map((r) => (
                <li key={r}>
                  <a
                    href="mailto:careers@saikatechnologies.com?subject=Application%20-%20"
                    className="text-teal-600 hover:text-teal-500 underline-offset-2 hover:underline"
                  >
                    {r}
                  </a>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1350px] px-8 lg:px-24 pb-16 grid gap-12"><p className="mt-4 text-[15px] text-slate-700">
              Don&apos;t see a role that fits? We’d still love to hear from you.
              Send your resume to{" "}
              <a
                href="mailto:careers@saikatechnologies.com"
                className="text-teal-600 hover:text-teal-500 underline-offset-2 hover:underline"
              >
                careers@saikatechnologies.com
              </a>
              .
            </p></section>
      
      <section className="mx-auto max-w-[1350px] px-8 lg:px-24 pb-16 grid gap-12 md:grid-cols-2 items-start">
       
        <div className="flex flex-col items-start">
          <img
            src="/career-img.png" 
            alt="Colleagues learning together"
            className="h-[340px] w-[340px] rounded-full object-cover"
          />
          <h3 className="mt-8 text-2xl font-semibold">
            Join Us. Shape Tomorrow.
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            At Saika Technologies, your career is more than a job — it’s a
            journey of learning, growth, and impact. If you're ready to
            challenge yourself and grow in a dynamic environment, we invite you
            to apply.
          </p>
        </div>

        {/* Offices */}
        <div className="md:col-start-2">
          <h3 className="text-3xl font-extrabold tracking-tight ">
            Office Locations
          </h3>

          <div className="mt-6 space-y-10">
            <div>
              <h4 className="text-lg font-semibold">USA</h4>
              <p className="mt-2 text-[15px] leading-7 text-slate-700">
                Saika Technologies Inc.
                <br />
                300 E. Royal Lane, Suite #112
                <br />
                Irving, TX 75039
              </p>
              <p className="mt-2 flex items-center gap-2 text-[15px] text-slate-800">
                <PhoneIcon className="h-5 w-5 text-teal-600" />
                +1 (469) 706-6262
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">India</h4>
              <p className="mt-2 text-[15px] leading-7 text-slate-700">
                Saika Technologies Pvt. Ltd.
                <br />
                Beside Mourya Complex
                <br />
                Guntur, Andhra Pradesh 522004
              </p>
              <p className="mt-2 flex items-center gap-2 text-[15px] text-slate-800">
                <PhoneIcon className="h-5 w-5 text-teal-600" />
                +91 63097 00990
              </p>
            </div>
          </div>
        </div>
      </section>
  
   
  
  
  
  
  
  
  
      </div>
    );
  }