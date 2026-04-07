import { useTranslation } from "react-i18next";
import PageHero from "../components/ui/PageHero";
import DomainCard from "../components/ui/DomainCard";
import heroImage from "../assets/hero.webp";

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        statusLabel={t("hero.status")}
        statusClassName="neon-glow-secondary label-md font-medium tracking-[0.2em] text-secondary uppercase mb-6 block"
        title={
          <>
            {t("hero.title1")} <br />
            <span className="text-outline">{t("hero.title2")}</span>
          </>
        }
        titleGradient="from-white to-gray-600"
        description={t("hero.description")}
        metrics={[
          {
            label: t("hero.coreProtocol"),
            value: t("hero.coreProtocolValue"),
          },
          {
            label: t("hero.performanceMetrics"),
            value: t("hero.uptime"),
          },
          {
            label: t("hero.currentPosition"),
            value: t("hero.currentPositionValue"),
            valueClassName: "text-secondary font-mono text-sm",
          },
        ]}
        sectionClassName="mb-32 h-[300px]"
      />

      {/* Hero Image */}
      <section className="relative w-[100vw] left-1/2 -translate-x-1/2 mb-32">
        <div className="relative w-full">
          <img
            src={heroImage}
            alt="Hero - Digital Architecture"
            className="w-full h-[400px] object-cover opacity-80 hover:opacity-100 transition-all duration-500 shadow-[0_0_1000px_rgba(255,255,255,0.1)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mb-32">
        <h2 className="text-2xl font-black tracking-tight mb-8 text-on-surface">
          {t("home.exploreDomains")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DomainCard
            to="/frontend"
            icon="code"
            iconColor="text-secondary"
            title="Frontend"
            description={t("home.domainDescriptions.frontend")}
          />
          <DomainCard
            to="/backend"
            icon="server"
            iconColor="text-tertiary"
            title="Backend"
            description={t("home.domainDescriptions.backend")}
          />
          <DomainCard
            to="/devops"
            icon="cloud_sync"
            iconColor="text-secondary"
            title="DevOps"
            description={t("home.domainDescriptions.devops")}
          />
          <DomainCard
            to="/gamedev"
            icon="sports_esports"
            iconColor="text-tertiary"
            title="Gamedev"
            description={t("home.domainDescriptions.gamedev")}
          />
        </div>
      </section>
    </>
  );
}

export default HomePage;