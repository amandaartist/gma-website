/*
 * ContactSection — GMA Editorial Luxury
 * Split layout: contact info left, form right
 * Warm white background, clean form styling
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    type: "",
    message: "",
  });

  const cooperationTypes = [
    t("contact.type_distribution"),
    t("contact.type_channel"),
    t("contact.type_expansion"),
    t("contact.type_events"),
    t("contact.type_other"),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FAFAF8]" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="divider-line" />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-navy">
              {t("contact.eyebrow")}
            </span>
          </div>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#1A1A1A", letterSpacing: "-0.02em" }}
          >
            {t("contact.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-16 lg:gap-24">
          {/* Contact Info — 2 cols */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p
              className="font-body leading-relaxed mb-10"
              style={{ fontSize: "1rem", color: "#3A3A3A", lineHeight: "1.85" }}
            >
              {t("contact.intro")}
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: t("contact.address_label"),
                  value: t("contact.address_value"),
                  sub: t("contact.address_sub"),
                },
                {
                  icon: Mail,
                  label: t("contact.email_label"),
                  value: t("contact.email_value"),
                  sub: t("contact.email_sub"),
                },
                {
                  icon: Phone,
                  label: t("contact.phone_label"),
                  value: t("contact.phone_value"),
                  sub: t("contact.phone_sub"),
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4">
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ border: "1px solid oklch(0.26 0.06 240 / 0.2)" }}
                    >
                      <Icon size={14} color="oklch(0.26 0.06 240)" />
                    </div>
                    <div>
                      <div className="font-body text-xs tracking-widest uppercase text-bronze mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-body text-sm font-medium text-[#1A1A1A]">
                        {item.value}
                      </div>
                      <div className="font-body text-xs text-gray-400 mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative divider */}
            <div className="mt-12 pt-10 border-t border-gray-100">
              <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-3">
                {t("contact.footer_text")}
              </p>
              <p className="font-body text-xs text-gray-400 leading-relaxed">
                {t("contact.footer_sub")}
              </p>
            </div>
          </motion.div>

          {/* Form — 3 cols */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-20 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={48} color="oklch(0.26 0.06 240)" className="mb-6" />
                <h3 className="font-display font-bold text-2xl text-[#1A1A1A] mb-3">
                  {t("contact.form_success_title")}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed max-w-sm">
                  {t("contact.form_success_desc")}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-dark mt-8 text-xs"
                >
                  {t("contact.form_reset")}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-gray-500 block mb-2">
                      {t("contact.form_name")} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t("contact.form_name_placeholder")}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-gray-500 block mb-2">
                      {t("contact.form_company")} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder={t("contact.form_company_placeholder")}
                      required
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-gray-500 block mb-2">
                    {t("contact.form_type")}
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="input-field appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                    }}
                  >
                    <option value="">{t("contact.form_type_placeholder")}</option>
                    {cooperationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-gray-500 block mb-2">
                    {t("contact.form_message")} <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("contact.form_message_placeholder")}
                    required
                    rows={5}
                    className="input-field resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    {t("contact.form_submit")}
                    <Send size={13} />
                  </button>
                  <p className="font-body text-xs text-gray-400 mt-3">
                    {t("contact.form_privacy")}
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
