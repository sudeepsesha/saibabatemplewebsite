import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading.jsx";

const timings = [
  { label: "Temple Opens", time: "5:00 AM" },
  { label: "Morning Darshan", time: "5:30 AM – 12:00 PM" },
  { label: "Afternoon Break", time: "12:00 PM – 3:00 PM" },
  { label: "Evening Darshan", time: "3:00 PM – 9:00 PM" },
  { label: "Temple Closes", time: "9:30 PM" },
];

/**
 * TempleTimings
 * Daily visiting-hours schedule presented as a clean timing table/card.
 */
function TempleTimings() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Visit Us"
          title="Temple Timings"
          subtitle="The temple welcomes devotees throughout the day. Darshan timings below."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl border border-primary/20 bg-white/60 shadow-sm"
        >
          {timings.map((slot, index) => (
            <div
              key={slot.label}
              className={`flex items-center justify-between px-6 py-5 sm:px-10 ${
                index !== timings.length - 1 ? "border-b border-primary/10" : ""
              }`}
            >
              <span className="font-heading text-lg text-text">{slot.label}</span>
              <span className="text-sm font-semibold tracking-wide text-primary">
                {slot.time}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TempleTimings;
