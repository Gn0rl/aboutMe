import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-12 border-t border-[#414754]/15 bg-[#131313]">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-4">
        <div className="font-['Inter'] text-[10px] tracking-widest uppercase text-[#C1C6D7]">
          {t("footer.copyright")}
        </div>
        <div className="flex gap-8">
          <a
            className="font-['Inter'] text-[10px] tracking-widest uppercase text-[#C1C6D7] hover:text-[#E2E2E2] underline-offset-4 hover:underline transition-opacity duration-500"
            href="https://github.com/Gn0rl"
          >
            {t("footer.github")}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
