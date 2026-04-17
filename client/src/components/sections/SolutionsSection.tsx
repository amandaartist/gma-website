/*
 * SolutionsSection — GMA Editorial Luxury
 * Three service cards with numbered sections
 * Dark background with navy accent
 */

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "产品与渠道解决方案",
    subtitle: "Product & Channel Solutions",
    description:
      "我们协助品牌与合作伙伴制定产品定位与渠道策略，推动产品在国际市场中的分销与落地。",
    items: ["跨境渠道搭建", "产品市场定位", "分销策略规划", "市场进入支持"],
  },
  {
    number: "02",
    title: "高端资源与活动",
    subtitle: "Premium Resources & Events",
    description:
      "我们提供纽约本地高端活动与商务资源对接，包括优质社交场景与商业机会。帮助客户拓展圈层、提升影响力，并获得更多合作可能。",
    items: ["纽约高端商务活动", "优质社交场景", "商业资源对接", "圈层拓展支持"],
  },
  {
    number: "03",
    title: "商务合作与资源对接",
    subtitle: "Business Cooperation",
    description:
      "我们为企业对接合适的合作伙伴、渠道与平台，促进跨境商业合作。专注于长期价值与可持续增长。",
    items: ["合作伙伴对接", "渠道与平台整合", "跨境商业合作", "长期价值增长"],
  },
];

export default function SolutionsSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

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
              Solutions
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-display font-light leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "white", letterSpacing: "-0.02em" }}
            >
              我们的业务
            </h2>
            <p
              className="font-body max-w-md leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem" }}
            >
              三大核心业务板块，覆盖产品分销、资源整合与商务合作全链路
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
                  className="font-display font-light mb-6"
                  style={{ fontSize: "4rem", color: "rgba(255,255,255,0.07)", lineHeight: 1 }}
                >
                  {service.number}
                </div>

                {/* Title */}
                <h3
                  className="font-display font-medium mb-1 leading-tight"
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
