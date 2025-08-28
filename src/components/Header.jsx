import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function useIsOverlayPage() {
    const { pathname, hash } = useLocation();
    const route = hash?.startsWith("#/") ? hash.slice(1) : pathname;
    return route === "/" || route === "/contact" || route === "/products" || route === "/casestudies" || route === "/careers" || route === "/aboutus" || route === "/services";
}

export default function Header() {
    const isOverlay = useIsOverlayPage();
    const base = "fixed top-0 inset-x-0 z-50";
    const trans = "bg-transparent text-white";
    const solid = "bg-slate-900/90 text-white border-b border-slate-800 backdrop-blur";
    return (
        <>
            {isOverlay && (
                <div
                    aria-hidden
                    className="pointer-events-none fixed inset-x-0 top-0 h-24 z-40
                         bg-gradient-to-b from-slate-900/70 to-transparent"
                />
            )}
            <header className={`${base} ${isOverlay ? trans : solid}`}>

                <div className="relative z-10 mx-auto max-w-[1600px] px-8 lg:px-24 py-6 grid grid-cols-[auto_1fr_auto] items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="Vector.svg" alt="Saika Tech logo" className="h-8 w-8 shrink-0" />
                        <span
                            className="font-semibold text-[35px] leading-[1] tracking-normal"
                            style={{ fontFamily: '"Saira Condensed", sans-serif' }}
                        >
                            <span className="text-teal-500">saika</span>
                            <span className="text-white"> tech</span>
                        </span>

                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm justify-self-center">
                        {/* Home (no dropdown) */}

                        <NavLink
                            to="/"
                            end
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className={({ isActive }) =>
                                [
                                    "relative inline-flex md:text-base items-center pb-2 leading-none",
                                    "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0",
                                    "after:bg-teal-500 after:transition-[width]",
                                    isActive ? "text-teal-500 " : "hover:text-teal-500"
                                ].join(" ")
                            }
                        >
                            Home
                        </NavLink>


                        {/* Company dropdown */}
                        <div className="relative group">
                            <button className="inline-flex items-center gap-1 pb-2 leading-none relative
+                     hover:text-teal-500 group-hover:text-teal-500
+                     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
+                     after:bg-teal-500 md:text-base">
                                Company
                                <svg viewBox="0 0 24 24" className="h-4 w-4 relative top-[1px]" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6" /></svg>
                            </button>
                            <div className="absolute left-0 top-full min-w-[10rem] w-auto  rounded-l bg-white text-slate-900
shadow-lg ring-1 ring-black/5 p-2
border-t-2 border-teal-500
invisible opacity-0 translate-y-1
group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
transition
" onClickCapture={() => (document.activeElement instanceof HTMLElement) && document.activeElement.blur()}
                            >
                                <NavLink to="/aboutus" className="block rounded-lg px-3 py-2 hover:bg-slate-100">About Us</NavLink>
                                <NavLink to="/careers" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Careers</NavLink>
                                <NavLink to="/contact" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Contact</NavLink>
                            </div>
                        </div>

                        {/* Offerings dropdown */}
                        <div className="relative group">
                            <button className="inline-flex items-center gap-1 pb-2 leading-none relative
+                     hover:text-teal-500 group-hover:text-teal-500
+                     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
+                     after:bg-teal-500 md:text-base
+                     ">
                                Offerings
                                <svg viewBox="0 0 24 24" className="h-4 w-4 relative top-[1px]" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6" /></svg>
                            </button>

                            <div className="absolute left-0 top-full z-50 min-w-[10rem] w-auto rounded-l bg-white text-slate-900
shadow-lg ring-1 ring-black/5 p-2
border-t-2 border-teal-500
invisible opacity-0 translate-y-1
group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
transition
" onClickCapture={() => (document.activeElement instanceof HTMLElement) && document.activeElement.blur()}
                            >
                                <NavLink to="/products" className="block rounded-lg px-3 py-2 hover:bg-slate-100"> Products </NavLink>
                                <NavLink to="/services" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Services</NavLink>
                            </div>
                        </div>

                        {/* Case Studies */}
                        <NavLink
                            to="/casestudies"
                            className="relative inline-flex items-center pb-2 leading-none hover:text-teal-500"
                        >
                            Case Studies
                        </NavLink>
                    </nav>

                    <a
                        href="https://mytime.saikatech.com/#/sign-in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/30 px-4 py-1.5 text-sm hover:bg-white/10 inline-flex items-center gap-2"
                    >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="8" r="3" />
                            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                        </svg>
                        Employee Login
                    </a>

                </div>
            </header>
        </>
    );
}

