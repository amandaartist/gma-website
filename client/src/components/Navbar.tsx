/*
 * Navbar — GMA Editorial Luxury Design
 * Fixed top nav, transparent → white on scroll
 * Logo: GMA wordmark | Links: uppercase small caps
 * Language toggle integrated
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.solutions"), href: "#solutions" },
    { label: t("nav.model"), href: "#model" },
    { label: t("nav.advantages"), href: "#advantages" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(250, 250, 248, 0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.04)" : "none",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="flex flex-col leading-none"
            >
              <span
                className="font-display text-xl md:text-2xl font-bold tracking-tight"
                style={{ color: scrolled ? "oklch(0.13 0.005 30)" : "white" }}
              >
                GMA
              </span>
              <span
                className="font-body text-[0.55rem] tracking-[0.18em] uppercase"
                style={{ color: scrolled ? "oklch(0.45 0.01 30)" : "rgba(255,255,255,0.7)" }}
              >
                Global Management Alliance
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="nav-link"
                  style={{ color: scrolled ? "oklch(0.13 0.005 30)" : "rgba(255,255,255,0.85)" }}
                >
                  {link.label}
                </a>
              ))}
              <div style={{ opacity: scrolled ? 1 : 0.7, transition: "opacity 0.3s" }}>
                <LanguageToggle />
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="btn-primary text-xs py-2 px-5"
                style={
                  !scrolled
                    ? {
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.6)",
                        color: "white",
                      }
                    : {}
                }
              >
                {t("nav.initiate")}
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={22} color={scrolled ? "oklch(0.13 0.005 30)" : "white"} />
              ) : (
                <Menu size={22} color={scrolled ? "oklch(0.13 0.005 30)" : "white"} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#FAFAF8] flex flex-col pt-20 pb-10 px-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-1 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-display text-3xl font-bold py-3 border-b border-gray-100 text-[#1A1A1A]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto">
              <div className="mb-6">
                <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-3">
                  Language
                </p>
                <LanguageToggle />
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="btn-primary w-full justify-center mt-8"
              >
                {t("nav.initiate")}
              </a>
              <p className="font-body text-xs text-gray-400 mt-6 tracking-wider uppercase">
                Global Management Alliance INC · New York
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
