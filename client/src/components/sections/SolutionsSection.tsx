/*
 * SolutionsSection — GMA Editorial Luxury
 * Three service cards with numbered sections
 * Dark background with navy accent
 */

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export default function SolutionsSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const { t } = useLanguage();

  const services = [
    {
      number: "01",
      title: t("solutions.s1_title"),
      subtitle: t("solutions.s1_subtitle"),
      description: t("solutions.s1_desc"),
      items: [
        t("solutions.s1_item1"),
        t("solutions.s1_item2"),
        t("solutions.s1_item3"),
        t("solutions.s1_item4"),
      ],
    },
    {
      number: "02",
      title: t("solutions.s2_title"),
      subtitle: t("solutions.s2_subtitle"),
      description: t("solutions.s2_desc"),
      items: [
        t("solutions.s2_item1"),
        t("solutions.s2_item2"),
        t("solutions.s2_item3"),
        t("solutions.s2_item4"),
      ],
    },
    {
      number: "03",
      title: t("solutions.s3_title"),
      subtitle: t("solutions.s3_subtitle"),
      description: t("solutions.s3_desc"),
      items: [
        t("solutions.s3_item1"),
        t("solutions.s3_item2"),
        t("solutions.s3_item3"),
        t("solutions.s3_item4"),
      ],
    },
  ];

  return (
    <section id="solutions" className="py-24 md:py-36" style={{ background: "#0F1620" }} ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="divider-line-bronze" />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-bronze">
              {t("solutions.eyebrow")}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "white", letterSpacing: "-0.02em" }}
            >
              {t("solutions.title")}
            </h2>
            <p
              className="font-body max-w-md leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem" }}
            >
              {t("solutions.subtitle")}
            </p>
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="relative p-8 lg:p-10 group"
              style={{ background: "#0F1620" }}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "oklch(0.26 0.06 240 / 0.12)" }}
              />

              <div className="relative z-10">
                {/* Number */}
                <div
                  className="font-display font-bold mb-6"
                  style={{ fontSize: "4rem", color: "rgba(255,255,255,0.07)", lineHeight: 1 }}
                >
                  {service.number}
                </div>

                {/* Title */}
                <h3
                  className="font-display font-bold mb-1 leading-tight"
                  style={{ fontSize: "1.5rem", color: "white" }}
                >
                  {service.title}
                </h3>
                <p
                  className="font-body text-xs tracking-widest uppercase mb-6"
                  style={{ color: "rgba(200,169,110,0.7)" }}
                >
                  {service.subtitle}
                </p>

                {/* Description */}
                <p
                  className="font-body leading-relaxed mb-8"
                  style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: "1.8" }}
                >
                  {service.description}
                </p>

                {/* Service items */}
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-body text-sm"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "oklch(0.55 0.05 60)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="mt-8 flex justify-end">
                  <ArrowUpRight
                    size={18}
                    className="opacity-20 group-hover:opacity-60 transition-opacity"
                    color="white"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
