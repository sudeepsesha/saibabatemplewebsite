import Hero from "../components/home/Hero.jsx";
import Welcome from "../components/home/Welcome.jsx";
import AboutSaiBaba from "../components/home/AboutSaiBaba.jsx";
import TempleTimings from "../components/home/TempleTimings.jsx";
import AartiTimings from "../components/home/AartiTimings.jsx";
import UpcomingFestivals from "../components/home/UpcomingFestivals.jsx";
import DonationHighlights from "../components/home/DonationHighlights.jsx";
import GalleryPreview from "../components/home/GalleryPreview.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import ContactPreview from "../components/home/ContactPreview.jsx";
import OrnamentDivider from "../components/common/OrnamentDivider.jsx";

/**
 * Home
 * Full homepage assembled from reusable section components.
 * Footer is rendered globally by MainLayout, not duplicated here.
 */
function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <OrnamentDivider />
      <AboutSaiBaba />
      <TempleTimings />
      <AartiTimings />
      <OrnamentDivider />
      <UpcomingFestivals />
      <DonationHighlights />
      <OrnamentDivider />
      <GalleryPreview />
      <Testimonials />
      <ContactPreview />
    </>
  );
}

export default Home;
