import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading.jsx";

const aartis = [
  {
    name: "Kakad Aarti",
    time: "5:15 AM",
    description: "The gentle morning aarti that awakens Baba with devotion.",
  },
  {
    name: "Madhyan Aarti",
    time: "12:15 PM",
    description: "Midday aarti offered before the afternoon rest period.",
  },
  {
    name: "Dhoop Aarti",
    time: "6:30 PM",
    description: "Evening aarti performed as lamps are lit at dusk.",
  },
  {
    name: "Shej Aarti",
    time: "9:00 PM",
    description: "The final night aarti, lulling Baba to peaceful rest.",
  },
];

/**
 * AartiTimings
 * Daily aarti schedule shown as a responsive grid of cards.
 */
function AartiTimings() {
  return (
    <section className="bg-secondary/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Daily Rituals"
          title="Daily Aarti Timings"
          subtitle="Join devotees in offering prayers during these sacred moments each day."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aartis.map((aarti, index) => (
            <motion.div
              key={aarti.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-secondary/15 bg-white/70 p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-xl text-secondary">
                🪔
              </span>
              <h3 className="font-heading text-lg font-semibold text-text">
                {aarti.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-primary">{aarti.time}</p>
              <p className="mt-3 text-sm leading-relaxed text-text/70">
                {aarti.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AartiTimings;
