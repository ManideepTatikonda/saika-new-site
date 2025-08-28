import hero from "../assets/hero.jpg";
import WHO from "../assets/WHO WE ARE.png";
import ai from "../assets/icons/ai.svg";
import cyber from "../assets/icons/cyber.svg";
import quantum from "../assets/icons/quantum.svg";
import ux from "../assets/icons/ux.svg";
import cloud from "../assets/icons/cloud.svg";
import data from "../assets/icons/data.svg";
import iot from "../assets/icons/iot.svg";
import social from "../assets/icons/social.svg";
import services from "../assets/icons/services.svg";
import anil from "../assets/team/anil.png";



export default function AboutUs() {
  return (
    <main className="text-slate-900">
        
        {/* HERO with real image + overlay */}
<section className="relative h-[420px] w-full">
  <img
    src={hero}                 // ⬅️ use the imported variable (lowercase)
    alt="Powering business transformation"
    className="absolute inset-0 h-full w-full object-cover"
  />
  {/* dark overlay so white text pops */}
  <div className="absolute inset-0 bg-slate-900/70" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
    <p className="text-white/80 text-sm">Home / About Us</p>
    <h1 className="text-4xl md:text-5xl font-extrabold text-white max-w-4xl mt-2 leading-tight">
      Powering <span className="text-teal-300">Business</span> Transformation Through{" "}
      <span className="text-teal-300">Innovation</span>
    </h1>
  </div>
</section>

      {/* WHO WE ARE section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        {/*Left side: placeholder image*/}
       <div className="h-64 md:h-80 lg:h-[360px] overflow-hidden rounded">
  <img
    src={WHO}
    alt="WHO WE ARE at Saika Tech"
    className="h-full w-full object-cover"
  />
</div>

        {/*right side: text */}
        <div>
            <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
                we are Saika Tech, a forward-thinking IT solutions provider. Our focus is delivering innovative technology to empower businesses and drive transformation.
            </p>
        </div>
      </section>
      {/* STATS STRIP */}
      <section className="w-full bg-gradient-to-r from-cyan-600 to-indigo-600 py-10">
        <div className="max-w-7xl mx-auto px-6">
            {/* Always four columns in one row */}
            <div className="grid grid-cols-2 md:grid-cols-5 text-center text-white divide-x divide-white/20">
            
            {/* Column 1: two stats stacked */}
            <div className="py-4 md:px-6">
            <div className="text-3xl font-extrabold">500+</div>
            <div className="text-white/90 text-sm mt-1">Completed Projects</div>
        </div>
        
        {/* Column 2 */}
        <div className="py-4 md:px-6">
            <div className="text-3xl font-extrabold">1000+</div>
            <div className="text-white/90 text-sm mt-1">Satisfied Clients</div>
        </div>

        {/* Column 3 */}
        <div className="py-4 md:px-6">
            <div className="text-3xl font-extrabold">300+</div>
            <div className="text-white/90 text-sm mt-1">Clients Support</div>
        </div>

        {/* Column 4*/}
        <div className="py-4 md:px-6">
            <div className="text-3xl font-extrabold">20+ Years</div>
            <div className="text-white/90 text-sm mt-1">Industry Experience</div>
        </div>
        {/* Column 5 */}
        <div className="py-4 md:px-6">
            <div className="text-3xl font-extrabold">50+</div>
            <div className="text-white/90 text-sm mt-1">Skilled Team</div>
        </div>
        </div>
        </div>
      </section>

      {/* SERVICES: Section shell */}
        <section className="max-w-7xl mx-auto px-6 py-16" id="services">
  <h2 className="text-3xl font-bold text-center text-slate-900">
                Reason To choose Us
 </h2>
            <p className="text-center text-slate-600 mt-2">
                We offer a comprehensive range of IT Services.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* cards will go here */}
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
      <img src={ai} alt="Artificial Intelligence" className="w-10 h-10 mb-4" />
      <h3 className="text-xl font-bold">Artificial Intelligence</h3>
      <p className="mt-2 text-slate-600 text-sm">
        Deliver exceptional user experiences and intelligent automation.
      </p>
      <a href="#" className="text-cyan-600 text-sm font-medium mt-3 inline-block">
        Read More →
      </a>
    </div>
                {/* 2 — Cybersecurity */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
      <img src={cyber} alt="Cybersecurity" className="w-10 h-10 mb-4" />
      <h3 className="text-xl font-bold">Cybersecurity</h3>
      <p className="mt-2 text-slate-600 text-sm">
        We ensure your systems stay secure, compliant, and resilient.
      </p>
      <a href="#" className="text-cyan-600 text-sm font-medium mt-3 inline-block">
        Read More →
      </a>
    </div>
                {/* 3 — Quantum Computing */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
      <img src={quantum} alt="Quantum Computing" className="w-10 h-10 mb-4" />
      <h3 className="text-xl font-bold">Quantum Computing</h3>
      <p className="mt-2 text-slate-600 text-sm">
        Quantum-inspired solutions that solve complex problems.
      </p>
      <a href="#" className="text-cyan-600 text-sm font-medium mt-3 inline-block">
        Read More →
      </a>
    </div>

                {/* 4 — UX/UI Design */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
      <img src={ux} alt="UX/UI Design" className="w-10 h-10 mb-4" />
      <h3 className="text-xl font-bold">UX / UI Engineering</h3>
      <p className="mt-2 text-slate-600 text-sm">
        Engaging, accessible, user-friendly product interfaces.
      </p>
      <a href="#" className="text-cyan-600 text-sm font-medium mt-3 inline-block">
        Read More →
      </a>
    </div>
               {/* 5 — Cloud Apps */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
      <img src={cloud} alt="Cloud Applications" className="w-10 h-10 mb-4" />
      <h3 className="text-xl font-bold">Cloud Apps</h3>
      <p className="mt-2 text-slate-600 text-sm">
        Build scalable, reliable, secure apps on leading cloud platforms.
      </p>
      <a href="#" className="text-cyan-600 text-sm font-medium mt-3 inline-block">
        Read More →
      </a>
    </div>
                  {/* 6 — Data & Analytics */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
      <img src={data} alt="Data and Analytics" className="w-10 h-10 mb-4" />
      <h3 className="text-xl font-bold">Data &amp; Analytics</h3>
      <p className="mt-2 text-slate-600 text-sm">
        Unlock insights with advanced analytics and AI-driven intelligence.
      </p>
      <a href="#" className="text-cyan-600 text-sm font-medium mt-3 inline-block">
        Read More →
      </a>
    </div>
                   {/* 7 — IoT Solutions */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
      <img src={iot} alt="IoT Solutions" className="w-10 h-10 mb-4" />
      <h3 className="text-xl font-bold">IoT Solutions</h3>
      <p className="mt-2 text-slate-600 text-sm">
        Connect devices, streamline operations, and monitor in real time.
      </p>
      <a href="#" className="text-cyan-600 text-sm font-medium mt-3 inline-block">
        Read More →
      </a>
    </div>
                    {/* 8 — Social Media Analytics */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
      <img src={social} alt="Social Media Analytics" className="w-10 h-10 mb-4" />
      <h3 className="text-xl font-bold">Social Media Analytics</h3>
      <p className="mt-2 text-slate-600 text-sm">
        Turn social data into decisions with advanced analytics solutions.
      </p>
      <a href="#" className="text-cyan-600 text-sm font-medium mt-3 inline-block">
        Read More →
      </a>
    </div>

  <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
  <img src={services} alt="Managed Services" className="w-10 h-10 mb-4" />
  <h3 className="text-xl font-bold">Managed Services</h3>
  <p className="mt-2 text-slate-600 text-sm">
    24/7 support and management to keep your IT running smoothly.
  </p>
  <a href="#" className="text-cyan-600 text-sm font-medium mt-3 inline-block">
    Read More →
  </a>
</div>

                    
            </div>
        </section>
        {/* HOW WE WORK / MISSION */}
<section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">

  {/* LEFT: big headline + bullets + CEO/phone */}
  <div>
    <h2 className="text-3xl font-bold text-slate-900 leading-snug">
      Driven by your success, we deliver impactful IT solutions that matter.
    </h2>

    <ul className="mt-6 space-y-3 text-slate-700">
      <li className="flex items-start">
        <span className="text-teal-500 mr-2">✔</span>
        We specialize in technological and IT-related services
      </li>
      <li className="flex items-start">
        <span className="text-teal-500 mr-2">✔</span>
        Technological applications play a role
      </li>
      <li className="flex items-start">
        <span className="text-teal-500 mr-2">✔</span>
        It’s better to achieve little than nothing at all
      </li>
    </ul>

    <div className="mt-8 flex items-center justify-between border-t pt-6">
      <div>
        <p className="italic text-slate-600">T. Anil Kumar</p>
        <p className="font-bold">Anil Tanneru</p>
        <p className="text-slate-500 text-sm">CEO, Saika Technologies</p>
      </div>
      <div className="text-right">
        <p className="text-slate-600">Call to ask any question</p>
        <p className="text-teal-500 font-bold">+1 469 706 6262</p>
      </div>
    </div>
  </div>

  {/* RIGHT: paragraph + 3 progress bars */}
  <div>
    <p className="text-slate-600 leading-relaxed">
      Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team
      of incredible talent for all your software development or IT consulting needs — cloud,
      infrastructure, network, etc. We focus on the needs of your business to figure out solutions
      that best fit your demand and nail it.
    </p>

    <div className="mt-8 space-y-6">
      {/* Bar 1 */}
      <div>
        <div className="flex justify-between text-sm font-medium">
          <span>IT Management</span>
          <span className="bg-black text-white px-2 py-0.5 rounded text-xs">80%</span>
        </div>
        <div className="w-full bg-slate-200 h-2 mt-1 rounded-full">
          <div className="bg-teal-500 h-2 rounded-full w-4/5"></div>
        </div>
      </div>

      {/* Bar 2 */}
      <div>
        <div className="flex justify-between text-sm font-medium">
          <span>Information Technology</span>
          <span className="bg-black text-white px-2 py-0.5 rounded text-xs">95%</span>
        </div>
        <div className="w-full bg-slate-200 h-2 mt-1 rounded-full">
          <div className="bg-teal-500 h-2 rounded-full w-[95%]"></div>
        </div>
      </div>

      {/* Bar 3 */}
      <div>
        <div className="flex justify-between text-sm font-medium">
          <span>Data Security</span>
          <span className="bg-black text-white px-2 py-0.5 rounded text-xs">80%</span>
        </div>
        <div className="w-full bg-slate-200 h-2 mt-1 rounded-full">
          <div className="bg-teal-500 h-2 rounded-full w-4/5"></div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* OUR EXPERT TEAM */}
<section className="bg-slate-900 text-white">
  <div className="max-w-7xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold text-center">Our Expert Team</h2>
    <p className="text-center text-white/70 mt-2">
      We have world-class experts.
    </p>

     {/* team grid */}
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        { name: "Anil Tanneru", role: "CEO, Saika Tech" },
        { name: "Anil Tanneru", role: "VP Engineering" },
        { name: "Anil Tanneru", role: "Product Designer" },
        { name: "Anil Tanneru", role: "Delivery Manager" },
        { name: "Anil Tanneru", role: "Head of UX" },
        { name: "Anil Tanneru", role: "Cloud Engineer" },
        { name: "Anil Tanneru", role: "Data Scientist" },
        { name: "Anil Tanneru", role: "AI Engineer" },
      ].map((m, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden bg-slate-800 border border-white/10 hover:border-white/20 hover:shadow-lg transition"
        >
          {/* photo */}
          <img
            src={anil}
            alt={m.name}
            className="h-40 w-full object-cover"
          />

          {/* text */}
          <div className="p-4">
            <div className="h-1 w-10 bg-teal-400 rounded mb-3"></div>
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-white/70 text-sm">{m.role}</p>
          </div>
        </div>
        
))}

</div>

  </div>
</section>
    </main>
  ); 
}

