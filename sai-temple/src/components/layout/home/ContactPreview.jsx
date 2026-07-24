import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading.jsx";
import Button from "../common/Button.jsx";

const contactDetails = [
  { label: "Address", value: "Shirdi Sai Nagar, Main Temple Road, India", icon: "📍" },
  { label: "Phone", value: "+91 98765 43210", icon: "📞" },
  { label: "Email", value: "info@shirdisaibabatemple.org", icon: "✉️" },
  { label: "Visiting Hours", value: "5:00 AM – 9:30 PM, Daily", icon: "🕒" },
];

/**
 * ContactPreview
 * Quick-glance contact information with a link to the full Contact page.
 */
function ContactPreview() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Reach Us"
          title="Visit or Get in Touch"
          subtitle="We would love to welcome you. Reach out with any questions about darshan, seva or events."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 gap-6 rounded-2xl border border-primary/20 bg-white/70 p-8 sm:grid-cols-2 sm:p-10"
        >
          {contactDetails.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg text-primary">
                {item.icon}
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-text">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-text/70">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button variant="secondary" href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ContactPreview;
