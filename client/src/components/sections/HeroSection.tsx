/*
 * HeroSection — GMA Editorial Luxury
 * Full-bleed dark hero with global network background
 * Large display type, white text, two CTAs
 */

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663569048054/aQXQWqSUGgXzNzWvnZDJEo/gma-hero-bg-T4yJDCJD2emBdJZAH6TepV.webp";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "#0A0F1A",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.55,
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,15,26,0.85) 0%, rgba(27,58,92,0.4) 50%, rgba(10,15,26,0.7) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(250,250,248,0.08))",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="divider-line-bronze" />
            <span
              className="font-body text-xs tracking-[0.2em] uppercase"
              style={{ color: "rgba(200,169,110,0.9)" }}
            >
              Global Management Alliance INC · New York
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="font-display font-light leading-tight mb-6"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              color: "white",
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            连接全球产品、
            <br />
            <em style={{ color: "rgba(200,169,110,0.95)", fontStyle: "italic" }}>
              资源与市场机会
            </em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-body font-light max-w-2xl leading-relaxed mb-12"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.72)",
              letterSpacing: "0.01em",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            我们通过跨境分销能力、资源整合与高端网络，
            助力品牌与合作伙伴拓展国际市场。
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <button
              onClick={() => scrollToSection("#solutions")}
              className="btn-primary flex items-center gap-2"
              style={{ fontSize: "0.8125rem" }}
            >
              查看解决方案
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-outline flex items-center gap-2"
              style={{ fontSize: "0.8125rem" }}
            >
              联系我们
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Row */}
      <motion.div
        className="relative z-10 border-t border-white/10 mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="container">
          <div className="grid grid-cols-3 divide-x divide-white/10 py-8">
            {[
              { num: "纽约", label: "总部所在地" },
              { num: "全球", label: "市场覆盖" },
              { num: "跨境", label: "分销能力" },
            ].map((item) => (
              <div key={item.label} className="px-6 first:pl-0 last:pr-0 text-center md:text-left">
                <div
                  className="font-display font-medium mb-1"
                  style={{ fontSize: "1.5rem", color: "rgba(200,169,110,0.9)" }}
                >
                  {item.num}
                </div>
                <div
                  className="font-body text-xs tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-6 right-8 flex flex-col items-center gap-1 opacity-50 hover:opacity-80 transition-opacity"
        onClick={() => scrollToSection("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-white">
          Scroll
        </span>
        <ChevronDown size={14} color="white" className="animate-bounce" />
      </motion.button>
    </section>
  );
}
