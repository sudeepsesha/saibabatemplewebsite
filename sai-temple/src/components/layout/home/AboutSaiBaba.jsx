import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading.jsx";
import Button from "../common/Button.jsx";

const teachings = [
  "Sabka Malik Ek — One God governs all",
  "Shraddha aur Saburi — Faith and Patience",
  "Love all, serve all, harm none",
];

/**
 * AboutSaiBaba
 * Short introduction to Sai Baba's life and teachings with a supporting image.
 */
function AboutSaiBaba() {
  return (
    <section className="bg-primary/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border-4 border-primary/30 shadow-xl">
            <img
              src="https://picsum.photos/id/1025/900/1100"
              alt="Sacred temple sanctum representing Sai Baba's presence"
              className="h-[420px] w-full object-cover sm:h-[480px]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-secondary px-6 py-4 text-background shadow-lg sm:block">
            <p className="font-heading text-2xl font-bold">100+</p>
            <p className="text-xs uppercase tracking-widest text-background/80">
              Years of Devotion
            </p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Baba"
            title="The Life & Teachings of Sri Shirdi Sai Baba"
            subtitle={null}
          />
          <p className="text-base leading-relaxed text-text/75">
            Sri Shirdi Sai Baba lived a life of simplicity, compassion and
            boundless love for all beings, teaching that devotion knows no
            boundary of caste or creed. His message of unity, humility and
            selfless service continues to inspire millions of devotees across
            the world, drawing them to this temple in search of solace and
            blessings.
          </p>

          <ul className="mt-8 space-y-4">
            {teachings.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-text/80">{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button variant="secondary" href="/about">
              Read Full Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSaiBaba;
