/*
 * Footer — GMA Editorial Luxury
 * Dark footer with brand info, nav links, copyright
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.solutions"), href: "#solutions" },
    { label: t("nav.model"), href: "#model" },
    { label: t("nav.advantages"), href: "#advantages" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <footer style={{ background: "#050810", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div
                className="font-display text-2xl font-bold tracking-tight"
                style={{ color: "white" }}
              >
                GMA
              </div>
              <div
                className="font-body text-[0.6rem] tracking-[0.2em] uppercase mt-1"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Global Management Alliance INC
              </div>
            </div>
            <p
              className="font-body leading-relaxed max-w-xs"
              style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: "1.8" }}
            >
              {t("footer.tagline")}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "oklch(0.55 0.05 60)" }}
              />
              <span
                className="font-body text-xs tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {t("footer.location")}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-body text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {t("footer.nav")}
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block font-body text-sm transition-colors duration-200 hover:text-white/70 text-left"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-body text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {t("footer.contact")}
            </h4>
            <div className="space-y-4">
              {[
                { label: t("contact.address_label"), value: t("contact.address_value") },
                { label: t("contact.email_label"), value: t("contact.email_value") },
                { label: t("contact.phone_label"), value: t("contact.phone_value") },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    className="font-body text-xs tracking-widest uppercase mb-0.5"
                    style={{ color: "rgba(200,169,110,0.5)" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="font-body text-sm"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="font-body text-xs"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            {t("footer.copyright")}
          </p>
          <p
            className="font-body text-xs tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            {t("footer.location_full")}
          </p>
        </div>
      </div>
    </footer>
  );
}
