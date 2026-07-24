import { motion } from "framer-motion";

/**
 * Welcome
 * Warm introductory welcome message beneath the hero banner.
 */
function Welcome() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <span className="mb-4 text-4xl text-primary" aria-hidden="true">
          ॐ
        </span>
        <h2 className="font-heading text-3xl font-semibold text-text sm:text-4xl">
          Welcome, Devotee
        </h2>
        <p className="mt-6 text-base leading-relaxed text-text/75 sm:text-lg">
          Step into a sanctuary of calm devotion, where the timeless teachings
          of Sri Shirdi Sai Baba continue to guide countless devotees toward
          faith, patience and love. Whether you visit to seek blessings, offer
          seva, or simply sit in quiet reflection, this temple welcomes you
          with open doors and an open heart. May Baba's grace walk with you,
          today and always.
        </p>
      </motion.div>
    </section>
  );
}

export default Welcome;
