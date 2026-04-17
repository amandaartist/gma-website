/*
 * AboutSection — GMA Editorial Luxury
 * Asymmetric two-column: text left, image right
 * Scroll-triggered fade-in
 */

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569048054/aQXQWqSUGgXzNzWvnZDJEo/gma-about-img-R8PBoVJqgnS3ELn4QbxEoe.webp";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-36 bg-[#FAFAF8]" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="divider-line" />
              <span className="font-body text-xs tracking-[0.2em] uppercase text-navy">
                {t("about.eyebrow")}
              </span>
            </div>

            <h2
              className="font-display font-bold mb-8 leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#1A1A1A", letterSpacing: "-0.02em" }}
            >
              {t("about.title")}
            </h2>

            <div className="space-y-6">
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "1.05rem", color: "#3A3A3A", lineHeight: "1.85" }}
              >
                {t("about.p1")}
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "1.05rem", color: "#3A3A3A", lineHeight: "1.85" }}
              >
                {t("about.p2")}
              </p>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-10 border-t border-gray-100">
              {[
                { label: t("about.fact1_label"), value: t("about.fact1_value") },
                { label: t("about.fact2_label"), value: t("about.fact2_value") },
                { label: t("about.fact3_label"), value: t("about.fact3_value") },
                { label: t("about.fact4_label"), value: t("about.fact4_value") },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-body text-xs tracking-widest uppercase text-bronze mb-1">
                    {item.label}
                  </div>
                  <div className="font-body text-sm font-medium text-[#1A1A1A]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background accent */}
            <div
              className="absolute -top-6 -right-6 w-full h-full"
              style={{ background: "oklch(0.26 0.06 240 / 0.06)", zIndex: 0 }}
            />
            <div className="relative z-10 overflow-hidden">
              <img
                src={ABOUT_IMG}
                alt="New York City — GMA Headquarters"
                className="w-full object-cover"
                style={{ height: "480px" }}
              />
              {/* Caption overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(to top, rgba(10,15,26,0.85) 0%, transparent 100%)",
                }}
              >
                <p className="font-body text-xs tracking-[0.15em] uppercase text-white/70">
                  {t("about.img_caption")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
