/*
 * Footer — GMA Editorial Luxury
 * Dark footer with brand info, nav links, copyright
 */

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer style={{ background: "#050810", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div
                className="font-display text-2xl font-semibold tracking-tight"
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
              连接全球产品、资源与市场机会的跨境商业服务公司，总部位于纽约。
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
                New York · Global
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-body text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              导航
            </h4>
            <nav className="space-y-3">
              {[
                { label: "公司介绍", href: "#about" },
                { label: "核心业务", href: "#solutions" },
                { label: "商业模式", href: "#model" },
                { label: "我们的优势", href: "#advantages" },
                { label: "合作共赢", href: "#partner" },
                { label: "联系我们", href: "#contact" },
              ].map((link) => (
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
              联系方式
            </h4>
            <div className="space-y-4">
              {[
                { label: "地址", value: "美国纽约" },
                { label: "邮箱", value: "info@yourcompany.com" },
                { label: "电话", value: "+1 XXX XXX XXXX" },
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
            © {new Date().getFullYear()} Global Management Alliance INC. All rights reserved.
          </p>
          <p
            className="font-body text-xs tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            New York · USA
          </p>
        </div>
      </div>
    </footer>
  );
}
