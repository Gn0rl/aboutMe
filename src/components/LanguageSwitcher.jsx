import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
    >
      {i18n.language === "en" ? "RU" : "EN"}
    </button>
  );
}

export default LanguageSwitcher;
