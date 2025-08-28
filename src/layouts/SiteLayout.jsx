import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const OVERLAY_ROUTES = new Set(["/", "/contact", "/products", "/casestudies", "/careers", "/aboutus", "/services"]);

function useIsOverlayPage() {
  const { pathname, hash } = useLocation();
  // Supports both BrowserRouter (pathname) and HashRouter ("#/...")
  const route = hash?.startsWith("#/") ? hash.slice(1) : pathname;
  return OVERLAY_ROUTES.has(route);
}

export default function SiteLayout() {
  const { pathname, hash } = useLocation();
  const isOverlay = useIsOverlayPage();

  // Optional: scroll to top on route change (feels nicer when navigating)
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Header />
      {/* Push content down only on non-overlay pages (because header is fixed) */}
      <main className={isOverlay ? "" : "pt-24"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
