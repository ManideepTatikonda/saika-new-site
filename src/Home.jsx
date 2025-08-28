import React from "react";

// Simple inline icon components (placeholders). Replace with your SVGs later.
const IconAI = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="9" />
    </svg>
);
const IconShield = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        <path d="M9.5 12.5l2 2 3.5-3.5" />
    </svg>
);
const IconChip = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M3 9h2M3 15h2M19 9h2M19 15h2M9 3v2M15 3v2M9 19v2M15 19v2" />
    </svg>
);
const IconUX = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <circle cx="8" cy="10" r="2" />
        <path d="M14 9h6M14 13h6M6 16h12" />
    </svg>
);
const IconCloud = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 18h9a4 4 0 0 0 0-8 5 5 0 0 0-9.7-1.7A4 4 0 0 0 7 18z" />
    </svg>
);
const IconData = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M19 5v6c0 1.7-3.1 3-7 3s-7-1.3-7-3V5m14 6v6c0 1.7-3.1 3-7 3s-7-1.3-7-3v-6" />
    </svg>
);
const IconIOT = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8" />
    </svg>
);
const IconSocial = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="7" cy="8" r="3" />
        <circle cx="17" cy="8" r="3" />
        <path d="M2 21a5 5 0 0 1 10 0M12 21a5 5 0 0 1 10 0" />
    </svg>
);
const IconManaged = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7h16v10H4z" />
        <path d="M4 11h16M8 15h4" />
    </svg>
);

const services = [
    { title: "Artificial Intelligence", desc: "Deliver exceptional user experiences and intuitive user interfaces.", Icon: (props) => <img src="AI.svg" className="w-9 h-9"></img> },
    { title: "Cybersecurity", desc: "We ensure your systems stay secure, compliant, and resilient against evolving cyber risks.", Icon: (props) => <img src="Cyber.svg" className="w-9 h-9"></img> },
    { title: "Quantum Computing", desc: "Quantum computing solutions that solve complex problems.", Icon: (props) => <img src="QC.svg" className="w-9 h-9"></img> },
    { title: "UX | UI Engineering", desc: "Deliver exceptional user experiences and intuitive user interfaces.", Icon: (props) => <img src="UIUX.svg" className="w-9 h-9"></img> },
    { title: "Cloud Apps", desc: "Cloud apps that boost efficiency and agility, enabling secure, scalable access anywhere.", Icon: (props) => <img src="CA.svg" className="w-9 h-9"></img> },
    { title: "Data & Analytics", desc: "We provide end-to-end IT services to keep your infrastructure secure, scalable, and available.", Icon: (props) => <img src="DA.svg" className="w-9 h-9"></img> },
    { title: "IOT Solutions", desc: "Integrate, manage, and extend IoT devices seamlessly within your business ecosystem.", Icon: (props) => <img src="IS.svg" className="w-9 h-9"></img> },
    { title: "Social Media Analytics", desc: "Unlock the full potential of social media platforms with our advanced analytics solutions", Icon: (props) => <img src="SMA.svg" className="w-9 h-9"></img> },
    { title: "Managed Services", desc: "We provide end-to-end IT services to keep your infrastructure secure, scalable, and available.", Icon: (props) => <img src="MS.svg" className="w-9 h-9"></img> },
];

const products = [
    { title: "TeleRx", desc: "Revolutionize pharmaceutical care in rural areas with TeleRx,", img: "/product1.png", cta: "Read More", fit: "contain" },
    { title: "UCPBX", desc: "A cost effective Interactive Voice Response System to support satellite pharmacies", img: "/product2.png", cta: "Read More", fit: "cover" },
    { title: "Smart Door Bell", desc: "An automated door bell device that is reliable and affordable", img: "/product3.png", cta: "Read More", fit: "cover" },
];

export default function SaikaTechHome() {
    return (
        <div className="min-h-dvh w-full text-gray-900">
            {/* Hero */}
            <section className="relative min-h-dvh isolate grid items-center">
                {/* Full-bleed background image + overlay */}
                <div className="absolute inset-0 -z-0 bg-[url('/home-bg.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 -z-0 bg-slate-900/20 pointer-events-none" />
                <div className="relative z-10 mx-auto max-w-[1600px] px-8 lg:px-24 pt-48 pb-40 text-white">
                    <div className="lg:pl-0 lg:pr-72">
                        <h1 className="max-w-5xl text-5xl lg:text-6xl xl:text-6xl !leading-[1.35]">
                            <span className="font-semibold">TRANSFORM</span>  YOUR <span className="font-semibold">BUSINESS</span>
                            <br />
                            WITH <span className="text-teal-500 font-semibold">CUTTING‑EDGE SOLUTIONS</span>
                        </h1>
                        <p className="mt-5 max-w-4xl text-slate-200 !text-[20px] md:!text-[28px] leading-relaxed">

                            We deliver scalable software and strategic IT consulting that future‑proofs your business and accelerates growth.
                        </p>
                        <div className="mt-14 flex flex-wrap gap-3">
                            <a href="#contact" className="rounded-xl bg-teal-500 px-5 py-2.5 font-xl hover:bg-teal-400">Talk to an Expert</a>
                            <a href="#services" className="rounded-xl bg-teal-500 px-5 py-2.5 font-xl hover:bg-teal-400">Explore Our Offerings</a>
                        </div>
                    </div>



                    {/* Dots + chevron */}
                    <div className="mt-[14rem] flex flex-col items-center gap-5">
                        <div className="flex items-center gap-3">
                            {/* active */}
                            <span className="h-2.5 w-2.5 rounded-full bg-teal-500 shadow-[0_0_0_2px_rgba(255,255,255,0.15)]" />
                            {/* inactive */}
                            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                        </div>
                        <a href="#about">
                            <img src="/go-to-bottom.svg" />
                        </a>


                    </div>
                </div>
            </section>

            {/* Who we are */}
            <section id="about" className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
                <div className="aspect-[16/10] rounded-2xl bg-gray-10 grid place-items-center">
                    {/* Replace with image collage */}
                    <div className="">
                        <img src="who-we-are.png" /></div>
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight">WHO WE ARE</h2>
                    <p className="mt-4 text-gray-600 leading-relaxed text-justify">
                        Saika Technologies is a leading provider of cutting-edge solutions aimed at addressing a wide range of business challenges. We firmly believe in the power of innovation and are dedicated to leveraging the Internet of Things (IoT) technology to overcome the obstacles that have impeded your business's growth. By actively engaging with our clients and understanding their unique needs, we embark on targeted missions to deliver exceptional technology solutions that drive tangible results. Our team of skilled engineers is committed to optimizing your business operations through IoT-based advancements.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="mx-auto max-w-7xl px-4 py-10">
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-extrabold">OUR SERVICES</h3>
                    <p className="mt-2 text-gray-600 !text-[18px] md:!text-[20px] leading-[1.6]">We offer a comprehensive range of IT services.</p>
                </div>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ title, desc, Icon }) => (
                        <div key={title} className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
                            <div className="text-teal-500"><Icon /></div>
                            <h4 className="mt-4 text-xl font-semibold">{title}</h4>
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
                            <button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-teal-500 hover:underline">
                                Read More <span aria-hidden>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Products */}
            <section id="products" className="mx-auto max-w-7xl px-4 py-14">
                <h3 className="text-center text-2xl md:text-3xl font-extrabold">OUR PRODUCTS</h3>

                <div className="mt-10 grid gap-8 md:grid-cols-3">
                    {products.map((p) => (
                        <article key={p.title} className="group">
                            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    loading="lazy"
                                    className={`h-full w-full object-center ${p.fit === "contain" ? "object-contain p-6" : "object-cover"
                                        }`}
                                />
                            </div>

                            <h4 className="mt-4 text-xl font-semibold">{p.title}</h4>
                            <p className="mt-1.5 text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                            <button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-teal-500 group-hover:underline">
                                {p.cta} <span aria-hidden>→</span>
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            {/* Footer */}

        </div>
    );
}
