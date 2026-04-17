/*
 * AdvantagesSection — GMA Editorial Luxury
 * Dark section with 5 advantage cards
 * Large section number + staggered animation
 */

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, Network, Target, Handshake, TrendingUp } from "lucide-react";

const advantages = [
  {
    icon: Globe,
    title: "跨境资源整合能力",
    description: "深度整合全球优质产品资源与市场渠道，构建高效的跨境商业生态。",
  },
  {
    icon: Network,
    title: "国际分销渠道连接能力",
    description: "覆盖线上与线下的多元分销网络，助力产品快速触达目标市场。",
  },
  {
    icon: Target,
    title: "产品市场定位经验",
    description: "丰富的国际市场定位经验，精准把握不同市场的需求与机会。",
  },
  {
    icon: Handshake,
    title: "灵活的商业合作模式",
    description: "根据合作伙伴需求定制合作方案，实现互利共赢的商业关系。",
  },
  {
    icon: TrendingUp,
    title: "聚焦高价值商业机会",
    description: "专注于具有长期价值的商业机会，推动可持续增长与价值创造。",
  },
];

export default function AdvantagesSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="advantages" className="py-24 md:py-36" style={{ background: "#0A0F1A" }} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="divider-line-bronze" />
            <span className="font-body text-xs tracking-[0.2em] uppercase text-bronze">
              Our Advantages
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-display font-light leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "white", letterSpacing: "-0.02em" }}
            >
              我们的优势
            </h2>
            <p
              className="font-body max-w-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem" }}
            >
              五大核心竞争优势，驱动国际商业价值
            </p>
          </div>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="relative p-8 group"
                style={{
                  background: "#0A0F1A",
                  gridColumn: i === 4 ? "span 1 / span 1" : undefined,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "oklch(0.55 0.05 60 / 0.06)" }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-6"
                    style={{ border: "1px solid oklch(0.55 0.05 60 / 0.3)" }}
                  >
                    <Icon size={18} color="oklch(0.55 0.05 60)" />
                  </div>

                  {/* Index */}
                  <div
                    className="font-display font-light mb-3"
                    style={{ fontSize: "0.75rem", color: "rgba(200,169,110,0.5)", letterSpacing: "0.15em" }}
                  >
                    0{i + 1}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-medium mb-4 leading-snug"
                    style={{ fontSize: "1.25rem", color: "white" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-body leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: "1.8" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Last card — CTA */}
          <motion.div
            className="relative p-8 flex flex-col justify-between"
            style={{ background: "oklch(0.26 0.06 240)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div>
              <p
                className="font-display font-light leading-snug mb-6"
                style={{ fontSize: "1.5rem", color: "white" }}
              >
                准备好开启
                <br />
                <em>国际市场之旅？</em>
              </p>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                联系我们，了解如何通过我们的网络与能力，加速您的全球业务布局。
              </p>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline mt-8 justify-center"
              style={{ fontSize: "0.75rem" }}
            >
              立即联系
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
