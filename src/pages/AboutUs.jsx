import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        {/* Hero */}
        <section className="relative isolate min-h-[72vh] grid items-end">
    {/* Background */}
    <div className="absolute inset-0 -z-10 bg-[url('/AboutUs.png')] bg-cover bg-center" />
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
            <li className="text-slate-400">About Us</li>
          </ol>
        </nav>
  
        {/* Page heading */}
        <header className="mx-auto max-w-[1240px] px-8 lg:px-24 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-style-[Segeo UI] font-extrabold tracking-tight ">
            About Us
          </h1>
        </header>
  
   
  
  
  
  
  
  
  
      </div>
    );
  }