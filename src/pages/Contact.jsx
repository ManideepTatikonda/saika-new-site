import { Link } from "react-router-dom";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Send to your backend/service
    alert("Thanks! We’ll get back to you.");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
  {/* Hero */}
  <section className="relative isolate min-h-[72vh] md:min-h-[72vh] lg:min-h-[72vh] grid items-end pt-28">
    {/* Background image */}
    <div className="absolute inset-0 -z-10 bg-[url('/contact-us.png')] bg-cover bg-center filter saturate-125 contrast-110 brightness-[1.05]" />
    {/* Teal/ink overlay to match Figma */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/10 via-slate-900/0 to-slate-900/0" />

    
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
          <li className="text-slate-400">Contact</li>
        </ol>
      </nav>


      {/* Three info cards */}
      <section className="mx-auto max-w-[1350px] px-8 lg:px-24 pb-16">
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {/* Call */}
          <article className="w-[360px] h-[380px] rounded-[12px]  border border-slate-200 bg-white p-7 text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition">
            <img src="/phone.png" alt="" className="h-18 w-14 mt-6 inline-block" />
            <div className="mt-10">
              <h3 className="mt-4 text-[26px] leading-tight font-semibold text-slate-900">Give us a call</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-slate-700">
                +1 (469) 706-6262 (USA) <br />
                +91 63097 00990 (India)
              </p>
            </div>

          </article>


          {/* Email */}
          <article className="w-[360px] h-[380px] rounded-[12px] border border-slate-200 bg-white p-7 text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition">
            <img src="/email.png" alt="" className="h-26 w-26 inline-block" />
            <h3 className=" text-[26px] leading-tight font-semibold text-slate-900">
              Drop us a line
            </h3>
            <p className="mt-3 text-[18px] leading-relaxed text-slate-700">
              hr@saikatech.com <br />
              sales@saikatech.com
            </p>
          </article>

          {/* Visit */}
          <article className="w-[360px] h-[380px] rounded-[12px] border border-slate-200 bg-white p-7 text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition">
            <img src="/location.png" alt="" className="h-18 w-14 mt-4 inline-block" />
            <div className="mt-6">
              <h3 className=" text-[26px] leading-tight font-semibold text-slate-900">
                Visit our office
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">Saika Technologies Inc. (USA)</span>
                <br />
                300 E. Royal Lane, Suite #112
                <br />
                Irving, TX 75039
              </p>

              <div className="my-2 h-px bg-slate-200" />

              <p className="text-[15px] leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">Saika Technologies Pvt Ltd. (INDIA)</span>
                <br />
                Besides Mourya Complex,
                <br />
                Guntur, Andhra Pradesh, India 522004
              </p>
            </div>

          </article>
        </div>
      </section>






      {/* Contact form card */}
      <section className="mx-auto max-w-[1240px] px-8 lg:px-24 pb-2">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-8 md:p-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold">HOW MAY WE HELP YOU!</h2>
            <p className="mt-1 text-slate-600">Requests a quote</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name*"
                required
                className="w-full rounded-xl border-none ring-1 ring-slate-300 px-4 py-3 focus:outline-none focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Email*"
                required
                className="w-full rounded-xl border-none ring-1 ring-slate-300 px-4 py-3 focus:outline-none focus:ring-teal-500"
              />
            </div>

            <input
              type="text"
              placeholder="Subject*"
              required
              className="w-full rounded-xl border-none ring-1 ring-slate-300 px-4 py-3 focus:outline-none focus:ring-teal-500"
            />

            <textarea
              rows="6"
              placeholder="Message*"
              required
              className="w-full rounded-xl border-none ring-1 ring-slate-300 px-4 py-3 focus:outline-none focus:ring-teal-500"
            />

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-8 py-3 font-medium text-white hover:bg-teal-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="relative">
       
        <div className="h-[620px] bg-[url('/map.png')] w-full bg-slate-200 grid place-items-center text-slate-500">
         
        </div>
      </section>

      
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
