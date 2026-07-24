import { motion } from "framer-motion";

/**
 * SectionHeading
 * Reusable heading used at the top of each page section.
 * eyebrow   — small gold label above the title (e.g. "Daily Rituals")
 * title     — main Playfair Display heading
 * subtitle  — optional supporting line
 * align     — "center" | "left"
 */
function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-10 flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
          {eyebrow}
          <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
        </span>
      )}
      <h2 className="font-heading text-3xl font-semibold leading-tight text-text sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base text-text/70 ${isCenter ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
