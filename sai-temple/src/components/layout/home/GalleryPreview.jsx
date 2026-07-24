import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading.jsx";
import Button from "../common/Button.jsx";

const images = [
  { src: "https://picsum.photos/id/1011/500/500", alt: "Temple entrance decorated with flowers" },
  { src: "https://picsum.photos/id/1015/500/500", alt: "Devotees during evening aarti" },
  { src: "https://picsum.photos/id/1016/500/500", alt: "Sacred sanctum illuminated with lamps" },
  { src: "https://picsum.photos/id/1018/500/500", alt: "Annadanam seva preparations" },
  { src: "https://picsum.photos/id/1020/500/500", alt: "Festival decorations at the temple" },
  { src: "https://picsum.photos/id/1024/500/500", alt: "Devotees gathered for darshan" },
];

/**
 * GalleryPreview
 * Responsive masonry-style preview of temple gallery images.
 */
function GalleryPreview() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Moments"
          title="Temple Gallery"
          subtitle="Glimpses of devotion, celebration and seva from around the temple."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className={`overflow-hidden rounded-xl ${index === 0 ? "col-span-2 row-span-2 sm:col-span-1" : ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" href="/gallery">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;
