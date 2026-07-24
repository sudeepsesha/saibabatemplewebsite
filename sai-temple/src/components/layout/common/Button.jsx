import { motion } from "framer-motion";

/**
 * Button
 * Reusable call-to-action button.
 * variant — "primary" | "secondary" | "outline"
 * as      — "button" | "a" (renders an anchor when a href is supplied)
 */
function Button({ children, variant = "primary", href, type = "button", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-offset-4";

  const variants = {
    primary: "bg-primary text-background hover:bg-primary-dark",
    secondary: "bg-secondary text-background hover:bg-secondary-dark",
    outline: "border border-primary text-primary hover:bg-primary hover:text-background",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const Component = href ? motion.a : motion.button;
  const componentProps = href ? { href } : { type };

  return (
    <Component
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={classes}
      {...componentProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
