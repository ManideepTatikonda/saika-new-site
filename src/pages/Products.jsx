// src/pages/Products.jsx
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="min-h-dvh w-full bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate min-h-[72vh] grid items-end pt-24">
        {/* Replace images with your Figma exports */}
        <div className="absolute inset-0 -z-10 bg-[url('/products.png')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-slate-900/0" />

        
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
          <li className="text-slate-400">Products</li>
        </ol>
      </nav>

      {/* Title */}
      <header className="mx-auto max-w-[1350px] px-8 lg:px-24 py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          OUR PRODUCTS
        </h1>
      </header>

      {/* === TeleRx ======================================================= */}
      <section className="mx-auto max-w-[1350px] px-8 lg:px-24 py-6">
      <div className="mt-10 grid items-start gap-10 md:grid-cols-[340px,1fr]">
  {/* image block */}
  <div className="rounded-xl bg-slate-100 aspect-[4/3] overflow-hidden">
    <img src="/product1.png" alt="TeleRx" className="h-full w-full object-contain p-6" />
  </div>

  {/* text block */}
  <div>
    <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
      TeleRx: Revolutionizing Pharmaceutical Care In Rural Areas
    </h2>

    <h3 className="mt-6 text-lg font-semibold">Overview</h3>
    <p className="mt-2 text-[15px] leading-7 text-slate-700">
    Overview
    TeleRx is an innovative telepharmacy model that enables rural communities to access high-quality pharmaceutical care remotely. By integrating digital platforms, AI-driven decision support, and licensed pharmacists, TeleRx bridges the healthcare gap caused by geographic isolation, lack of medical infrastructure, and pharmacist shortages in rural areas.
    </p>
  </div>
</div>
{/* Problem Statement */}
<h4 className="mt-10 text-lg font-semibold">Problem Statement</h4>
<ul className="mt-3 list-disc list-outside pl-6 space-y-1 text-[15px] leading-7 text-slate-700 marker:text-slate-400">
  <li>Limited access to pharmacies in rural regions.</li>
  <li>Shortage of licensed pharmacists willing to work in remote areas.</li>
  <li>High transportation costs and long travel times for rural patients to reach pharmacies.</li>
  <li>Poor medication adherence due to lack of proper consultation and follow-ups.</li>
  <li>Low health literacy leading to misuse or misunderstanding of prescribed medicines.</li>
</ul>

{/* What is TeleRx? */}
<h4 className="mt-10 text-lg font-semibold">What is TeleRx?</h4>
<p className="mt-2 text-[15px] leading-7 text-slate-700">
  TeleRx is a telepharmacy solution that connects patients in remote areas to licensed pharmacists through a secure digital platform. It includes:
</p>
<ul className="mt-3 list-disc list-outside pl-6 space-y-1 text-[15px] leading-7 text-slate-700 marker:text-slate-400">
  <li><span className="font-semibold">Mobile App/Web Portal:</span> Patients can consult pharmacists via video/audio calls.</li>
  <li><span className="font-semibold">E-Prescriptions:</span> Integration with local clinics and doctors to streamline prescriptions.</li>
  <li><span className="font-semibold">Medication Delivery Network:</span> Partnerships with local courier services or micro-pharmacies for last-mile delivery.</li>
  <li><span className="font-semibold">Adherence Monitoring:</span> Alerts, reminders, and educational content to improve medication compliance.</li>
  <li><span className="font-semibold">AI-Powered Tools:</span> Automated drug interaction checks, personalized counseling tips, and analytics.</li>
</ul>



        {/* Features vs Benefits */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h4 className="text-xl font-semibold">Key Features</h4>
            <ol className="list-decimal pl-6 mt-3 space-y-1 text-slate-700">
              <li>Remote pharmacist consultations (multi-language).</li>
              <li>Digital medication management & interaction alerts.</li>
              <li>Local fulfillment partners / micro-hubs.</li>
              <li>Patient education & simple visual guides.</li>
              <li>Analytics & reporting for population insights.</li>
            </ol>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Benefits</h4>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-slate-700">
              <li>Reliable, low-cost access to counseling & medicines.</li>
              <li>Better adherence; fewer complications/readmissions.</li>
              <li>Broader reach for healthcare providers & NGOs.</li>
              <li>Real-time data for health policy & planning.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto my-12 max-w-[1350px] border-t border-slate-200" />

      {/* === UCPBX ======================================================= */}
      <section className="mx-auto max-w-[1350px] px-8 lg:px-24 py-6">
       
        <div className="mt-10 grid items-start gap-10 md:grid-cols-[340px,1fr]">
  {/* image block */}
  <div className="rounded-xl bg-slate-100 aspect-[4/3] overflow-hidden">
    <img src="/product2.png" alt="TeleRx" className="h-full w-full object-cover" />
  </div>

  {/* text block */}
  <div>
    <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
    UCPBX – A Cost-Effective IVR System To Support Satellite
    Pharmacies
    </h2>

    <h3 className="mt-6 text-lg font-semibold">Overview</h3>
    <p className="mt-2 text-[15px] leading-7 text-slate-700">
    <span className="font-semibold">UCPBX</span> is a scalable IVR
                platform built for low-bandwidth regions and limited smartphone
                access. Patients can reach pharmacy services using a basic
                mobile or landline phone.
    </p>
  </div>
</div>

        {/* Features vs Benefits */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h4 className="text-xl font-semibold">
              Key Features (Multi-language)
            </h4>
            <ol className="list-decimal pl-6 mt-3 space-y-1 text-slate-700">
              <li>
                Interactive voice menus (e.g. press 1 talk to a pharmacist, 2
                check Rx status, 3 order medicines).
              </li>
              <li>Queueing & live pharmacist connect / escalation.</li>
              <li>Medicine request & refill via keypad/voice.</li>
              <li>Verification (caller-ID / voice confirmation / OTP backup).</li>
              <li>Education modules & local customization.</li>
            </ol>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Benefits</h4>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-slate-700">
              <li>Access via any phone—no app needed.</li>
              <li>Reduced load for pharmacists with streamlined calls.</li>
              <li>Higher adherence via reminders and follow-ups.</li>
              <li>Scalable outreach with measurable impact.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto my-12 max-w-[1350px] border-t border-slate-200" />

      {/* === Smart Door Bell ============================================ */}
      <section className="mx-auto max-w-[1350px] px-8 lg:px-24 py-6">
        

        <div className="mt-10 grid items-start gap-10 md:grid-cols-[340px,1fr]">
  {/* image block */}
  <div className="rounded-xl bg-slate-100 aspect-[4/3] overflow-hidden">
    <img src="/product3.png" alt="TeleRx" className="h-full w-full object-cover" />
  </div>

  {/* text block */}
  <div>
    <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
    Smart Door Bell – An Automated, Reliable, And Affordable Doorbell
              Solution
    </h2>

    <h3 className="mt-6 text-lg font-semibold">Overview</h3>
    <p className="mt-2 text-[15px] leading-7 text-slate-700">
    <span className="font-semibold">Smart Door Bell</span> combines
                motion detection, remote access, two-way talk and secure cloud /
                local storage—bringing smart visitor management to everyone.
    </p>
  </div>
</div>

        {/* Features vs Benefits */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h4 className="text-xl font-semibold">Key Features</h4>
            <ol className="list-decimal pl-6 mt-3 space-y-1 text-slate-700">
              <li>HD video & two-way audio (1080p, night vision).</li>
              <li>Mobile notifications & snapshot preview.</li>
              <li>Motion detection & activity zones.</li>
              <li>Cloud & local storage options; event history.</li>
              <li>Battery backup + wired power options.</li>
              <li>Remote access via app (iOS/Android).</li>
            </ol>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Benefits</h4>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-slate-700">
              <li>Know who’s at the door—anywhere.</li>
              <li>Talk to guests or couriers remotely.</li>
              <li>Proactive security with instant alerts.</li>
              <li>Complete control & accessible price.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="h-10" />
      <a
        href="#top"
        className="fixed bottom-6 right-6 h-10 w-10 rounded-full bg-teal-600 text-white grid place-items-center shadow-lg hover:bg-teal-500"
        aria-label="Back to top"
      >
        ↑
      </a>
    </div>
  );
}
