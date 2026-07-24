import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

/**
 * MainLayout
 * Shared shell for all public-facing pages: Navbar + page content (Outlet) + Footer.
 * Individual page content is intentionally left empty at this stage (Task 1: foundation only).
 */
function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
