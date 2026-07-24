import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading.jsx";

const testimonials = [
  {
    name: "Radha Krishnan",
    location: "Chennai",
    quote:
      "Every visit to this temple fills me with a sense of peace I carry for weeks. The aarti in the evening is truly divine.",
    avatar: "https://picsum.photos/id/64/100/100",
  },
  {
    name: "Anjali Deshmukh",
    location: "Pune",
    quote:
      "The Annadanam seva here is run with so much love and care. It reminded me what true devotion looks like.",
    avatar: "https://picsum.photos/id/65/100/100",
  },
  {
    name: "Vikram Rao",
    location: "Hyderabad",
    quote:
      "My family has been visiting for generations. The temple's warmth and simplicity keep drawing us back every year.",
    avatar: "https://picsum.photos/id/91/100/100",
  },
];

/**
 * Testimonials
 * Devotee testimonial cards.
 */
function Testimonials() {
  return (
    <section className="bg-primary/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Devotee Voices"
          title="What Devotees Say"
          subtitle="Shared moments of faith and gratitude from those who have visited us."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
              className="flex flex-col rounded-2xl border border-primary/15 bg-white/70 p-8 shadow-sm"
            >
              <span className="mb-4 font-heading text-4xl leading-none text-primary/40">
                &ldquo;
              </span>
              <p className="flex-1 text-sm italic leading-relaxed text-text/80">
                {item.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-sm font-semibold text-text">
                    {item.name}
                  </p>
                  <p className="text-xs text-text/60">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
