import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout.jsx";
import Home from "./Home.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Careers from "./pages/Careers.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}
