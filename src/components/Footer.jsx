import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mt-16 bg-slate-900 text-slate-200">
            <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4">
                <div>
                    <div className="flex items-center gap-3">
                        <img src="Vector.svg" alt="Saika Tech logo" className="h-8 w-8 shrink-0" />
                        <span
                            className="font-semibold text-[35px] leading-[1] tracking-normal"
                            style={{ fontFamily: '"Saira Condensed", sans-serif' }}
                        >
                            <span className="text-teal-500">saika</span>
                            <span className="text-white"> tech</span>
                        </span>

                    </div>
                    <p className="mt-4 text-lg text-slate-400 max-w-sm">
                        Saika Technologies delivers innovative software and IT consulting solutions to help businesses thrive in a digital‑first world.
                    </p>
                    <div className="mt-4 flex gap-3 text-slate-400">
                        <span className="h-8 w-8 grid place-items-center rounded-full border">in</span>
                        <span className="h-8 w-8 grid place-items-center rounded-full border">X</span>
                        <span className="h-8 w-8 grid place-items-center rounded-full border">f</span>
                    </div>
                </div>

                <div>
                    <h5 className="font-semibold">Quick Links</h5>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/aboutus" className="hover:text-white">About Us</Link></li>
                        <li><Link to="/products" className="hover:text-white">Products</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/casestudies" className="hover:text-white">Case Study</Link></li>
                        <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold">Our Services</h5>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        <li>IOT Solutions</li>
                        <li>DevOps</li>
                        <li>Infrastructure Services</li>
                        <li>Artificial Intelligence</li>
                        <li>Cybersecurity</li>
                        <li>Data & Analytics</li>
                        <li>UX | UI Engineering</li>
                        <li>Social Media Analytics Solutions</li>
                        <li>Managed Services</li>
                    </ul>
                </div>

                {/* <div>
                    <h5 className="font-semibold">Contact Information</h5>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        <li>+1 469 706 6262</li>
                        <li>hr@saikatech.com</li>
                        <li>300 E. Royal Lane, Suite #112, Irving, TX 75039</li>
                    </ul>
                </div> */}
                {/* Contact Information */}
<div aria-labelledby="footer-contact-heading" className="space-y-4">
  <h5
    id="footer-contact-heading"
    className="text-white text-xl md:text-[24px]"
  >
    Contact Information
  </h5>

  <ul className="mt-2 space-y-4">
    {/* Phone */}
    <li className="flex items-center gap-4">
      <img src="/footer-phone.png" alt="" className="h-7 w-7" aria-hidden />
      <a
        href="tel:+14697066262"
        className="text-white text-lg md:text-lg leading-tight hover:text-teal-400"
      >
        +1 469 706 6262
      </a>
    </li>

    {/* Email */}
    <li className="flex items-center gap-4">
      <img src="/footer-email.png" alt="" className="h-5 w-7" aria-hidden />
      <a
        href="mailto:hr@saikatech.com"
        className="text-white text-lg md:text-lg leading-tight hover:text-teal-400"
      >
        hr@saikatech.com
      </a>
    </li>

    {/* Address */}
    <li className="flex items-start gap-4">
      <img src="/footer-location.png" alt="" className="h-6 w-7 mt-1" aria-hidden />
      <address className="not-italic text-white text-lg md:text-lg leading-snug">
        300 E. Royal Lane, Suite #112,<br />
        Irving, TX 75039
      </address>
    </li>
  </ul>
</div>

            </div>
            <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400"> Copyright © {new Date().getFullYear()} Saika Technologies All Rights Reserved</div>
        </footer>
    );
}