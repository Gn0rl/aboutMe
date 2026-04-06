import { useTranslation } from "react-i18next";
import PageHero from "../components/ui/PageHero";
import BentoGrid from "../components/ui/BentoGrid";
import TechnologyGrid from "../components/ui/TechnologyGrid";
import StickyFeatureSection from "../components/ui/StickyFeatureSection";

function DevOpsPage() {
  const { t } = useTranslation();

  const technologies = [
    {
      name: t("devops.technologies.kubernetes.name"),
      icon: "cloud",
      description: t("devops.technologies.kubernetes.description"),
    },
    {
      name: t("devops.technologies.docker.name"),
      icon: "deployed_code",
      description: t("devops.technologies.docker.description"),
    },
    {
      name: t("devops.technologies.terraform.name"),
      icon: "layers",
      description: t("devops.technologies.terraform.description"),
    },
    {
      name: t("devops.technologies.aws.name"),
      icon: "cloud_queue",
      description: t("devops.technologies.aws.description"),
    },
    {
      name: t("devops.technologies.gcp.name"),
      icon: "cloud_circle",
      description: t("devops.technologies.gcp.description"),
    },
    {
      name: t("devops.technologies.argocd.name"),
      icon: "sync",
      description: t("devops.technologies.argocd.description"),
    },
  ];

  return (
    <>
      <PageHero
        statusLabel={t("hero.status")}
        title={
          <>
            {t("devops.hero.title")}
            <br />
            <span className="text-secondary">{t("devops.hero.subtitle")}</span>
          </>
        }
        titleGradient="from-purple-600 to-blue-500"
        description={t("devops.hero.description")}
        metrics={[
          {
            label: t("devops.metrics.coreProtocol"),
            value: t("devops.metrics.coreProtocolValue"),
          },
          {
            label: t("devops.metrics.cloudFabric"),
            value: t("devops.metrics.cloudFabricValue"),
          },
          {
            label: t("devops.metrics.performanceMetrics"),
            value: t("devops.metrics.uptime"),
            valueClassName: "text-secondary font-mono text-sm",
          },
        ]}
      />

      <BentoGrid
        mainCard={{
          title: t("devops.iac.title"),
          description: t("devops.iac.description"),
          icon: "architecture",
          tags: t("devops.iac.tags", { returnObjects: true }),
          borderColor: "border-purple-600",
        }}
        wideCards={[
          {
            title: t("devops.automation.title"),
            description: t("devops.automation.description"),
            footer: (
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs">
                      cyclone
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs">
                      rocket_launch
                    </span>
                  </div>
                </div>
                <button className="text-xs tracking-[0.2em] font-bold text-secondary uppercase hover:underline underline-offset-8 transition-all">
                  {t("devops.automation.viewLogs")}
                </button>
              </div>
            ),
          },
        ]}
        cards={[
          {
            render: () => (
              <div className="bg-surface-container-low p-6 bg-[#212121] hover:bg-[#2c2c2c] transition-colors group">
                <div className="h-2 w-full bg-surface-container-highest mb-6 overflow-hidden rounded">
                  <div className="h-full bg-tertiary w-3/4 group-hover:w-full transition-all duration-500"></div>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-2">
                  {t("devops.scaling.title")}
                </h4>
                <p className="text-[10px] text-on-surface-variant leading-relaxed">
                  {t("devops.scaling.description")}
                </p>
              </div>
            ),
          },
          {
            title: t("devops.observability.title"),
            description: t("devops.observability.description"),
            icon: "insights",
            tags: [],
          },
        ]}
        accentColor="text-secondary"
        gradientFrom="from-secondary"
        sectionClassName="mb-32"
      />

      <StickyFeatureSection
        sidebar={{
          title: t("devops.scalability.title"),
          description: t("devops.scalability.description"),
          badge: {
            label: t("devops.scalability.activeTuning"),
            colorClass: "bg-tertiary",
          },
          codeBlock: `replicaCount: 12
strategy: RollingUpdate
maxSurge: 25%
maxUnavailable: 0`,
        }}
      >
        <div className="bg-surface-container-low overflow-hidden group rounded-lg">
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {t("devops.trafficManager.title")}
              </h3>
              <span className="text-[10px] font-mono text-secondary">
                {t("devops.trafficManager.proto")}
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              {t("devops.trafficManager.description")}
            </p>
          </div>
        </div>
      </StickyFeatureSection>

      <TechnologyGrid
        title={t("devops.technologyStack")}
        technologies={technologies}
        accentColor="text-secondary"
      />
    </>
  );
}

export default DevOpsPage;
