import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-toggle">
      <button
        onClick={() => setLanguage("en")}
        className={language === "en" ? "active" : ""}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("zh")}
        className={language === "zh" ? "active" : ""}
      >
        中文
      </button>
    </div>
  );
}
