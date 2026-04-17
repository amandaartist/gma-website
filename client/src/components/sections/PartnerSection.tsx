/*
 * PartnerSection — GMA Editorial Luxury
 * Full-bleed boardroom image with dark overlay
 * Partnership CTA with large display text
 */

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const PARTNER_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569048054/aQXQWqSUGgXzNzWvnZDJEo/gma-partner-bg-8GA5p22eMqcn9Km8afnAZE.webp";

export default function PartnerSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

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
              Partnership
            </span>
          </motion.div>

          <motion.h2
            className="font-display font-light leading-tight mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "white", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            合作共赢
          </motion.h2>

          <motion.p
            className="font-body leading-relaxed mb-6"
            style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.72)", lineHeight: "1.85", maxWidth: "560px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            我们欢迎品牌方、供应商及合作伙伴共同探索国际市场机会。
          </motion.p>

          <motion.p
            className="font-body leading-relaxed mb-12"
            style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.85", maxWidth: "520px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            无论是产品分销还是商业合作，我们都可以为您提供支持。
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
              发起合作
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
              About GMA
            </span>
          </div>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: "1.85" }}
          >
            我们致力于搭建全球产品、商业资源与市场需求之间的桥梁。
            通过市场洞察、渠道能力与资源整合，我们帮助合作伙伴实现持续增长与商业价值提升。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
