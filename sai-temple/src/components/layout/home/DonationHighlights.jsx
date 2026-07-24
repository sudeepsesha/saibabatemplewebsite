import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading.jsx";
import Button from "../common/Button.jsx";

const causes = [
  {
    name: "Annadanam Seva",
    icon: "🍚",
    description: "Sponsor free meals for devotees and the needy every day.",
  },
  {
    name: "Temple Development",
    icon: "🏛️",
    description: "Support the upkeep and beautification of the temple premises.",
  },
  {
    name: "Go Seva",
    icon: "🐄",
    description: "Contribute toward the care and feeding of temple cows.",
  },
  {
    name: "Education Support",
    icon: "📖",
    description: "Help underprivileged children access quality education.",
  },
];

/**
 * DonationHighlights
 * Highlights key donation causes and drives traffic to the Donations page.
 */
function DonationHighlights() {
  return (
    <section className="bg-secondary px-4 py-20 text-background sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Seva & Giving"
          title="Support the Temple's Sacred Work"
          subtitle="Every contribution, big or small, helps sustain seva, rituals and community welfare."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {causes.map((cause, index) => (
            <motion.div
              key={cause.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-background/20 bg-background/10 p-6 text-center backdrop-blur-sm"
            >
              <span className="mb-4 block text-3xl">{cause.icon}</span>
              <h3 className="font-heading text-lg font-semibold">{cause.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/80">
                {cause.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="primary"
            href="/donations"
            className="bg-primary hover:bg-primary-light"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default DonationHighlights;
