import { motion } from "framer-motion";
import Button from "../common/Button.jsx";

/**
 * Hero
 * Premium full-bleed hero banner introducing the temple.
 */
function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/id/1076/1920/1200"
        alt="Sri Shirdi Sai Baba Temple at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* Warm gradient overlay for legibility + spiritual tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C]/70 via-[#2C2C2C]/50 to-background" />
      <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary-light"
        >
          <span className="h-px w-8 bg-primary-light/70" />
          Sabka Malik Ek
          <span className="h-px w-8 bg-primary-light/70" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-heading text-4xl font-bold leading-tight text-background sm:text-5xl md:text-6xl"
        >
          Sri Shirdi Sai Baba Temple
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-background/90 sm:text-lg"
        >
          A sacred abode of faith, devotion and grace — where every heart finds
          peace under the blessings of Baba. Come, seek, and be blessed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button variant="primary" href="/donations">
            Offer a Donation
          </Button>
          <Button variant="outline" href="/about" className="border-background text-background hover:bg-background hover:text-secondary">
            Know Sai Baba
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-6 rounded-full border-2 border-background/70"
        >
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-background/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
