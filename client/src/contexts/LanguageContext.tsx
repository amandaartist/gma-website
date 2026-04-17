import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.about": "About Us",
    "nav.solutions": "Solutions",
    "nav.model": "Business Model",
    "nav.advantages": "Advantages",
    "nav.contact": "Contact",
    "nav.initiate": "Initiate Partnership",

    // Hero Section
    "hero.eyebrow": "Global Management Alliance INC · New York",
    "hero.title": "Connecting Global Products, Resources & Market Opportunities",
    "hero.subtitle":
      "We empower brands and partners to expand into international markets through cross-border distribution capabilities, resource integration, and premium networks.",
    "hero.cta1": "View Solutions",
    "hero.cta2": "Contact Us",
    "hero.stat1": "New York",
    "hero.stat1_label": "Headquarters",
    "hero.stat2": "Global",
    "hero.stat2_label": "Market Coverage",
    "hero.stat3": "Cross-Border",
    "hero.stat3_label": "Distribution",

    // About Section
    "about.eyebrow": "About Us",
    "about.title": "Who We Are",
    "about.p1":
      "We are a cross-border business services company headquartered in New York, specializing in product positioning, channel expansion, and strategic partnerships.",
    "about.p2":
      "By integrating premium products and high-end resources, we create tangible business opportunities for our clients, helping brands and partners enter international markets with confidence and strategic clarity.",
    "about.fact1_label": "Headquarters",
    "about.fact1_value": "New York, USA",
    "about.fact2_label": "Core Focus",
    "about.fact2_value": "Cross-Border Business Services",
    "about.fact3_label": "Key Capabilities",
    "about.fact3_value": "Channel Expansion & Resource Integration",
    "about.fact4_label": "Serving",
    "about.fact4_value": "Brands · Suppliers · Partners",
    "about.img_caption": "New York City · Global Headquarters",

    // Solutions Section
    "solutions.eyebrow": "Solutions",
    "solutions.title": "Our Solutions",
    "solutions.subtitle": "Three core business pillars covering the complete product distribution and market expansion lifecycle",
    "solutions.s1_title": "Product & Channel Solutions",
    "solutions.s1_subtitle": "Strategic Distribution & Positioning",
    "solutions.s1_desc":
      "We assist brands and partners in developing product positioning and channel strategies to drive distribution and market entry globally. Our expertise spans from market analysis to go-to-market execution.",
    "solutions.s1_item1": "Cross-Border Channel Development",
    "solutions.s1_item2": "Product Market Positioning",
    "solutions.s1_item3": "Distribution Strategy Planning",
    "solutions.s1_item4": "Market Entry Support",
    "solutions.s2_title": "Premium Resources & Events",
    "solutions.s2_subtitle": "Elite Networking & Opportunities",
    "solutions.s2_desc":
      "We provide access to New York-based premium events and business resources, including exclusive networking venues and commercial opportunities. We help clients expand their networks, enhance influence, and unlock partnership potential.",
    "solutions.s2_item1": "New York Premium Business Events",
    "solutions.s2_item2": "Exclusive Networking Venues",
    "solutions.s2_item3": "Business Resource Connections",
    "solutions.s2_item4": "Network Expansion Support",
    "solutions.s3_title": "Business Cooperation & Resource Matching",
    "solutions.s3_subtitle": "Strategic Partnerships",
    "solutions.s3_desc":
      "We connect enterprises with suitable partners, channels, and platforms to facilitate cross-border business collaboration. We focus on long-term value creation and sustainable growth for all stakeholders.",
    "solutions.s3_item1": "Partner Matching & Vetting",
    "solutions.s3_item2": "Channel & Platform Integration",
    "solutions.s3_item3": "Cross-Border Collaboration",
    "solutions.s3_item4": "Long-Term Value Growth",

    // Model Section
    "model.eyebrow": "Business Model",
    "model.title": "Our Business Model",
    "model.intro":
      "We collaborate with premium brands, suppliers, and channel partners to bring high-potential products to global markets. Our integrated approach spans the entire value chain:",
    "model.item1": "Cross-Border Product Distribution",
    "model.item2": "Omnichannel Integration (Online & Offline)",
    "model.item3": "Wholesale & B2B Partnerships",
    "model.item4": "International Market Expansion",
    "model.highlight":
      "Our business model covers the complete journey from product sourcing and channel integration to international market deployment, creating sustainable commercial value for all partners.",
    "model.img_alt": "Global Business Network",

    // Advantages Section
    "advantages.eyebrow": "Our Advantages",
    "advantages.title": "Why Partner With Us",
    "advantages.subtitle": "Five core competitive advantages driving international business value",
    "advantages.a1_title": "Cross-Border Resource Integration",
    "advantages.a1_desc":
      "Deep integration of global premium product resources and market channels, building an efficient cross-border business ecosystem.",
    "advantages.a2_title": "International Distribution Network",
    "advantages.a2_desc":
      "Diverse omnichannel distribution network spanning online and offline, enabling rapid product market penetration.",
    "advantages.a3_title": "Market Positioning Expertise",
    "advantages.a3_desc":
      "Rich international market positioning experience with precise understanding of diverse market needs and opportunities.",
    "advantages.a4_title": "Flexible Cooperation Models",
    "advantages.a4_desc":
      "Customized partnership structures tailored to partner needs, enabling win-win commercial relationships.",
    "advantages.a5_title": "Focus on High-Value Opportunities",
    "advantages.a5_desc":
      "Commitment to long-term value opportunities and sustainable growth, not short-term gains.",
    "advantages.cta_title": "Ready to Expand Globally?",
    "advantages.cta_desc":
      "Contact us to learn how our network and capabilities can accelerate your international business growth.",
    "advantages.cta_btn": "Get In Touch",

    // Partner Section
    "partner.eyebrow": "Partnership",
    "partner.title": "Win-Win Collaboration",
    "partner.p1":
      "We welcome brands, suppliers, and partners to explore international market opportunities together.",
    "partner.p2":
      "Whether it's product distribution or business cooperation, we're here to support your growth.",
    "partner.cta": "Initiate Partnership",
    "partner.about_eyebrow": "About GMA",
    "partner.about_desc":
      "We are dedicated to building bridges between global products, business resources, and market demand. Through market insights, channel capabilities, and resource integration, we help partners achieve sustained growth and enhanced commercial value.",

    // Contact Section
    "contact.eyebrow": "Contact Us",
    "contact.title": "Get In Touch",
    "contact.intro":
      "We'd love to hear from you. Reach out to discuss partnership opportunities and market expansion strategies.",
    "contact.address_label": "Address",
    "contact.address_value": "New York, USA",
    "contact.address_sub": "United States, New York",
    "contact.email_label": "Email",
    "contact.email_value": "partnerships@gma-global.com",
    "contact.email_sub": "Business Inquiries",
    "contact.phone_label": "Phone",
    "contact.phone_value": "+1 (212) 555-0147",
    "contact.phone_sub": "Mon–Fri, 9AM–6PM EST",
    "contact.footer_text": "Global Management Alliance INC",
    "contact.footer_sub": "Connecting global products, resources, and market opportunities.",
    "contact.form_name": "Full Name",
    "contact.form_name_placeholder": "Your Name",
    "contact.form_company": "Company",
    "contact.form_company_placeholder": "Company Name",
    "contact.form_type": "Partnership Type",
    "contact.form_type_placeholder": "Select partnership type",
    "contact.form_message": "Message",
    "contact.form_message_placeholder": "Please describe your partnership needs or inquiry...",
    "contact.form_submit": "Submit",
    "contact.form_required": "required",
    "contact.form_success_title": "Thank You",
    "contact.form_success_desc":
      "We've received your inquiry and will be in touch within 1-2 business days.",
    "contact.form_reset": "Submit Another",
    "contact.form_privacy":
      "By submitting, you agree we may contact you regarding partnership opportunities.",
    "contact.type_distribution": "Product Distribution",
    "contact.type_channel": "Channel & Resource Matching",
    "contact.type_expansion": "Brand Market Expansion",
    "contact.type_events": "Premium Events Partnership",
    "contact.type_other": "Other Business Cooperation",

    // Footer
    "footer.brand": "Global Management Alliance INC",
    "footer.tagline": "Connecting global products, resources, and market opportunities.",
    "footer.location": "New York · Global",
    "footer.nav": "Navigation",
    "footer.contact": "Contact",
    "footer.copyright": "© 2026 Global Management Alliance INC. All rights reserved.",
    "footer.location_full": "New York · USA",
  },
  zh: {
    // Navigation
    "nav.about": "公司介绍",
    "nav.solutions": "核心业务",
    "nav.model": "商业模式",
    "nav.advantages": "我们的优势",
    "nav.contact": "联系我们",
    "nav.initiate": "发起合作",

    // Hero Section
    "hero.eyebrow": "Global Management Alliance INC · 纽约",
    "hero.title": "连接全球产品、资源与市场机会",
    "hero.subtitle":
      "我们通过跨境分销能力、资源整合与高端网络，助力品牌与合作伙伴拓展国际市场。",
    "hero.cta1": "查看解决方案",
    "hero.cta2": "联系我们",
    "hero.stat1": "纽约",
    "hero.stat1_label": "总部所在地",
    "hero.stat2": "全球",
    "hero.stat2_label": "市场覆盖",
    "hero.stat3": "跨境",
    "hero.stat3_label": "分销能力",

    // About Section
    "about.eyebrow": "About Us",
    "about.title": "我们是谁",
    "about.p1":
      "我们是一家总部位于纽约的跨境商业服务公司，专注于产品布局、渠道拓展与战略合作。",
    "about.p2":
      "通过整合优质产品与高端资源，我们为客户创造真实可落地的商业机会，帮助品牌与合作伙伴进入国际市场。",
    "about.fact1_label": "总部",
    "about.fact1_value": "美国纽约",
    "about.fact2_label": "专注领域",
    "about.fact2_value": "跨境商业服务",
    "about.fact3_label": "核心能力",
    "about.fact3_value": "渠道拓展与资源整合",
    "about.fact4_label": "服务对象",
    "about.fact4_value": "品牌方 · 供应商 · 合作伙伴",
    "about.img_caption": "纽约市 · 全球总部",

    // Solutions Section
    "solutions.eyebrow": "Solutions",
    "solutions.title": "我们的业务",
    "solutions.subtitle": "三大核心业务板块，覆盖产品分销、资源整合与商务合作全链路",
    "solutions.s1_title": "产品与渠道解决方案",
    "solutions.s1_subtitle": "Product & Channel Solutions",
    "solutions.s1_desc":
      "我们协助品牌与合作伙伴制定产品定位与渠道策略，推动产品在国际市场中的分销与落地。从市场分析到上市执行，我们提供全方位的战略支持。",
    "solutions.s1_item1": "跨境渠道搭建",
    "solutions.s1_item2": "产品市场定位",
    "solutions.s1_item3": "分销策略规划",
    "solutions.s1_item4": "市场进入支持",
    "solutions.s2_title": "高端资源与活动",
    "solutions.s2_subtitle": "Premium Resources & Events",
    "solutions.s2_desc":
      "我们提供纽约本地高端活动与商务资源对接，包括优质社交场景与商业机会。帮助客户拓展圈层、提升影响力，并获得更多合作可能。",
    "solutions.s2_item1": "纽约高端商务活动",
    "solutions.s2_item2": "优质社交场景",
    "solutions.s2_item3": "商业资源对接",
    "solutions.s2_item4": "圈层拓展支持",
    "solutions.s3_title": "商务合作与资源对接",
    "solutions.s3_subtitle": "Business Cooperation",
    "solutions.s3_desc":
      "我们为企业对接合适的合作伙伴、渠道与平台，促进跨境商业合作。专注于长期价值与可持续增长。",
    "solutions.s3_item1": "合作伙伴对接",
    "solutions.s3_item2": "渠道与平台整合",
    "solutions.s3_item3": "跨境商业合作",
    "solutions.s3_item4": "长期价值增长",

    // Model Section
    "model.eyebrow": "Business Model",
    "model.title": "我们的商业模式",
    "model.intro":
      "我们与优质品牌、供应商及渠道合作伙伴共同合作，将具有潜力的产品引入全球市场。我们的业务涵盖：",
    "model.item1": "跨境产品分销",
    "model.item2": "线上与线下渠道整合",
    "model.item3": "批发合作",
    "model.item4": "国际市场拓展",
    "model.highlight":
      "我们的业务涵盖从产品采购、渠道整合到国际市场落地的完整链路，致力于为合作伙伴创造可持续的商业价值。",
    "model.img_alt": "全球业务网络",

    // Advantages Section
    "advantages.eyebrow": "Our Advantages",
    "advantages.title": "我们的优势",
    "advantages.subtitle": "五大核心竞争优势，驱动国际商业价值",
    "advantages.a1_title": "跨境资源整合能力",
    "advantages.a1_desc":
      "深度整合全球优质产品资源与市场渠道，构建高效的跨境商业生态。",
    "advantages.a2_title": "国际分销渠道连接能力",
    "advantages.a2_desc":
      "覆盖线上与线下的多元分销网络，助力产品快速触达目标市场。",
    "advantages.a3_title": "产品市场定位经验",
    "advantages.a3_desc":
      "丰富的国际市场定位经验，精准把握不同市场的需求与机会。",
    "advantages.a4_title": "灵活的商业合作模式",
    "advantages.a4_desc":
      "根据合作伙伴需求定制合作方案，实现互利共赢的商业关系。",
    "advantages.a5_title": "聚焦高价值商业机会",
    "advantages.a5_desc":
      "专注于具有长期价值的商业机会，推动可持续增长与价值创造。",
    "advantages.cta_title": "准备好开启国际市场之旅？",
    "advantages.cta_desc":
      "联系我们，了解如何通过我们的网络与能力，加速您的全球业务布局。",
    "advantages.cta_btn": "立即联系",

    // Partner Section
    "partner.eyebrow": "Partnership",
    "partner.title": "合作共赢",
    "partner.p1": "我们欢迎品牌方、供应商及合作伙伴共同探索国际市场机会。",
    "partner.p2": "无论是产品分销还是商业合作，我们都可以为您提供支持。",
    "partner.cta": "发起合作",
    "partner.about_eyebrow": "About GMA",
    "partner.about_desc":
      "我们致力于搭建全球产品、商业资源与市场需求之间的桥梁。通过市场洞察、渠道能力与资源整合，我们帮助合作伙伴实现持续增长与商业价值提升。",

    // Contact Section
    "contact.eyebrow": "Contact Us",
    "contact.title": "联系我们",
    "contact.intro":
      "欢迎联系我们，了解更多合作机会与市场拓展方案。",
    "contact.address_label": "地址",
    "contact.address_value": "美国纽约",
    "contact.address_sub": "United States, New York",
    "contact.email_label": "邮箱",
    "contact.email_value": "partnerships@gma-global.com",
    "contact.email_sub": "Business Inquiries",
    "contact.phone_label": "电话",
    "contact.phone_value": "+1 (212) 555-0147",
    "contact.phone_sub": "Mon–Fri, 9AM–6PM EST",
    "contact.footer_text": "Global Management Alliance INC",
    "contact.footer_sub": "连接全球产品、资源与市场机会。",
    "contact.form_name": "姓名",
    "contact.form_name_placeholder": "您的姓名",
    "contact.form_company": "公司",
    "contact.form_company_placeholder": "公司名称",
    "contact.form_type": "合作类型",
    "contact.form_type_placeholder": "请选择合作类型",
    "contact.form_message": "需求说明",
    "contact.form_message_placeholder": "请描述您的合作需求或问题...",
    "contact.form_submit": "提交",
    "contact.form_required": "必填",
    "contact.form_success_title": "感谢您的联系",
    "contact.form_success_desc":
      "我们已收到您的信息，将在 1–2 个工作日内与您联系。",
    "contact.form_reset": "重新提交",
    "contact.form_privacy":
      "提交即表示您同意我们与您就合作事宜进行联系。",
    "contact.type_distribution": "产品分销合作",
    "contact.type_channel": "渠道资源对接",
    "contact.type_expansion": "品牌市场拓展",
    "contact.type_events": "高端活动合作",
    "contact.type_other": "其他商务合作",

    // Footer
    "footer.brand": "Global Management Alliance INC",
    "footer.tagline": "连接全球产品、资源与市场机会。",
    "footer.location": "纽约 · 全球",
    "footer.nav": "导航",
    "footer.contact": "联系方式",
    "footer.copyright": "© 2026 Global Management Alliance INC. 版权所有。",
    "footer.location_full": "纽约 · 美国",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Check localStorage for saved language preference
    const saved = localStorage.getItem("gma_language") as Language | null;
    if (saved && (saved === "en" || saved === "zh")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("gma_language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
