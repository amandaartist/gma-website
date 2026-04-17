/*
 * ModelSection — GMA Editorial Luxury
 * Business model with global network image
 * Key highlight: cross-border distribution (Faire buyer signal)
 */

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

const SOLUTIONS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569048054/aQXQWqSUGgXzNzWvnZDJEo/gma-solutions-bg-fhwzvZVjyYwFLLbPaxqK4t.webp";

export default function ModelSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const modelItems = [
    t("model.item1"),
    t("model.item2"),
    t("model.item3"),
    t("model.item4"),
  ];

  return (
    <section id="model" className="py-24 md:py-36 bg-[#FAFAF8]" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column — left */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden">
              <img
                src={SOLUTIONS_BG}
                alt={t("model.img_alt")}
                className="w-full object-cover"
                style={{ height: "500px" }}
              />
              {/* Overlay text badge */}
              <div
                className="absolute top-6 left-6 px-4 py-3"
                style={{ background: "oklch(0.26 0.06 240 / 0.92)" }}
              >
                <p className="font-body text-xs tracking-[0.15em] uppercase text-white/80">
                  {t("model.eyebrow")}
                </p>
                <p className="font-display text-xl font-bold text-white mt-0.5">
                  {t("model.title")}
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 -z-10"
              style={{ background: "oklch(0.55 0.05 60 / 0.12)" }}
            />
          </motion.div>

          {/* Text Column — right */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="divider-line" />
              <span className="font-body text-xs tracking-[0.2em] uppercase text-navy">
                {t("model.eyebrow")}
              </span>
            </div>

            <h2
              className="font-display font-bold mb-8 leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#1A1A1A", letterSpacing: "-0.02em" }}
            >
              {t("model.title")}
            </h2>

            <p
              className="font-body leading-relaxed mb-10"
              style={{ fontSize: "1.05rem", color: "#3A3A3A", lineHeight: "1.85" }}
            >
              {t("model.intro")}
            </p>

            {/* Model items */}
            <div className="space-y-4 mb-10">
              {modelItems.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-4 py-3 border-b border-gray-100"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                >
                  <div
                    className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.26 0.06 240 / 0.1)" }}
                  >
                    <Check size={12} color="oklch(0.26 0.06 240)" />
                  </div>
                  <span className="font-body text-[#1A1A1A]" style={{ fontSize: "0.95rem" }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Highlight box */}
            <div
              className="p-6 border-l-2"
              style={{
                borderColor: "oklch(0.55 0.05 60)",
                background: "oklch(0.55 0.05 60 / 0.05)",
              }}
            >
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "0.9rem", color: "#3A3A3A", lineHeight: "1.8" }}
              >
                {t("model.highlight")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
