import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/40 backdrop-blur-xl shadow-2xl shadow-black/40">
      <div className="flex justify-between items-center px-8 h-16 w-full max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-xl font-black tracking-tighter text-[#E2E2E2] hover:opacity-80 transition-opacity"
        >
          GN0RL.GITHUB.IO
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-['Inter'] tracking-tighter uppercase text-xs font-medium">
          <Link
            className={`transition-colors ${
              isActive("/")
                ? "text-[#E2E2E2] border-b border-[#C6C6C7] pb-1"
                : "text-[#C1C6D7] hover:text-[#E2E2E2]"
            }`}
            to="/"
          >
            {t("nav.home")}
          </Link>
          <Link
            className={`transition-colors ${
              isActive("/frontend")
                ? "text-[#E2E2E2] border-b border-[#C6C6C7] pb-1"
                : "text-[#C1C6D7] hover:text-[#E2E2E2]"
            }`}
            to="/frontend"
          >
            {t("nav.frontend")}
          </Link>
          <Link
            className={`transition-colors ${
              isActive("/backend")
                ? "text-[#E2E2E2] border-b border-[#C6C6C7] pb-1"
                : "text-[#C1C6D7] hover:text-[#E2E2E2]"
            }`}
            to="/backend"
          >
            {t("nav.backend")}
          </Link>
          <Link
            className={`transition-colors ${
              isActive("/devops")
                ? "text-[#E2E2E2] border-b border-[#C6C6C7] pb-1"
                : "text-[#C1C6D7] hover:text-[#E2E2E2]"
            }`}
            to="/devops"
          >
            {t("nav.devops")}
          </Link>
          <Link
            className={`transition-colors ${
              isActive("/gamedev")
                ? "text-[#E2E2E2] border-b border-[#C6C6C7] pb-1"
                : "text-[#C1C6D7] hover:text-[#E2E2E2]"
            }`}
            to="/gamedev"
          >
            {t("nav.gamedev")}
          </Link>
        </nav>
        <div className="flex items-center gap-4 text-[#C6C6C7]">
          <div className="w-px h-6 bg-outline-variant/30 mx-2"></div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
