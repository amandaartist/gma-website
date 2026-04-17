/*
 * PartnerSection — GMA Editorial Luxury
 * Full-bleed boardroom image with dark overlay
 * Partnership CTA with large display text
 */

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const PARTNER_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569048054/aQXQWqSUGgXzNzWvnZDJEo/gma-partner-bg-8GA5p22eMqcn9Km8afnAZE.webp";

export default function PartnerSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  return (
    <section id="partner" className="relative py-32 md:py-48 overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${PARTNER_BG})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(10,15,26,0.88) 0%, rgba(27,58,92,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="divider-line-bronze" />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-bronze">
              {t("partner.eyebrow")}
            </span>
          </motion.div>

          <motion.h2
            className="font-display font-bold leading-tight mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "white", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("partner.title")}
          </motion.h2>

          <motion.p
            className="font-body leading-relaxed mb-6"
            style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.72)", lineHeight: "1.85", maxWidth: "560px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t("partner.p1")}
          </motion.p>

          <motion.p
            className="font-body leading-relaxed mb-12"
            style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.85", maxWidth: "520px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t("partner.p2")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary flex items-center gap-2"
              style={{ fontSize: "0.8125rem" }}
            >
              {t("partner.cta")}
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>

        {/* About section text */}
        <motion.div
          className="mt-20 pt-12 border-t border-white/10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="divider-line-bronze" />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-bronze">
              {t("partner.about_eyebrow")}
            </span>
          </div>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: "1.85" }}
          >
            {t("partner.about_desc")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
