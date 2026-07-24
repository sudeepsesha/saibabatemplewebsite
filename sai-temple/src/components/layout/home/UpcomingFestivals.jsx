import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading.jsx";
import Button from "../common/Button.jsx";

const festivals = [
  {
    name: "Ram Navami Utsav",
    date: "6 April",
    image: "https://picsum.photos/id/1043/600/450",
    description:
      "A vibrant celebration marking Lord Rama's birth, with special poojas and processions.",
  },
  {
    name: "Guru Purnima",
    date: "10 July",
    image: "https://picsum.photos/id/1050/600/450",
    description:
      "Devotees gather to honour Baba as the eternal Guru with abhishekam and bhajans.",
  },
  {
    name: "Sai Baba Punyatithi",
    date: "15 October",
    image: "https://picsum.photos/id/1060/600/450",
    description:
      "A solemn and joyous three-day Samadhi festival remembering Baba's Mahasamadhi.",
  },
];

/**
 * UpcomingFestivals
 * Preview grid of upcoming temple festivals, each linking to the Festivals page.
 */
function UpcomingFestivals() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Celebrations"
          title="Upcoming Festivals"
          subtitle="Mark your calendar and join the temple community in celebration and seva."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {festivals.map((festival, index) => (
            <motion.div
              key={festival.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-primary/15 bg-white/70 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={festival.image}
                  alt={festival.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-background">
                  {festival.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-text">
                  {festival.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/70">
                  {festival.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" href="/festivals">
            View All Festivals
          </Button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingFestivals;
