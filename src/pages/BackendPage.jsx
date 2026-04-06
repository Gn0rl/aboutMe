import { useTranslation } from "react-i18next";
import PageHero from "../components/ui/PageHero";
import BentoGrid from "../components/ui/BentoGrid";
import TechnologyGrid from "../components/ui/TechnologyGrid";
import StickyFeatureSection from "../components/ui/StickyFeatureSection";

function BackendPage() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("backend.projects.restApiTitle"),
      description: t("backend.projects.restApiDescription"),
      icon: "api",
      tags: ["OpenAPI", "REST", "Swagger"],
    },
    {
      title: t("backend.projects.graphqlTitle"),
      description: t("backend.projects.graphqlDescription"),
      icon: "data_usage",
      tags: ["GraphQL", "Apollo", "Federation"],
    },
    {
      title: t("backend.projects.databaseTitle"),
      description: t("backend.projects.databaseDescription"),
      icon: "database",
      tags: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: t("backend.projects.messageQueuesTitle"),
      description: t("backend.projects.messageQueuesDescription"),
      icon: "mail",
      tags: ["RabbitMQ", "Kafka", "Events"],
    },
  ];

  const technologies = [
    {
      name: t("backend.technologies.nodejs.name"),
      icon: "terminal",
      description: t("backend.technologies.nodejs.description"),
    },
    {
      name: t("backend.technologies.rust.name"),
      icon: "settings",
      description: t("backend.technologies.rust.description"),
    },
    {
      name: t("backend.technologies.postgresql.name"),
      icon: "storage",
      description: t("backend.technologies.postgresql.description"),
    },
    {
      name: t("backend.technologies.redis.name"),
      icon: "memory",
      description: t("backend.technologies.redis.description"),
    },
    {
      name: t("backend.technologies.graphql.name"),
      icon: "data_usage",
      description: t("backend.technologies.graphql.description"),
    },
    {
      name: t("backend.technologies.grpc.name"),
      icon: "swap_horiz",
      description: t("backend.technologies.grpc.description"),
    },
  ];

  return (
    <>
      <PageHero
        statusLabel={t("hero.status")}
        statusClassName="text-tertiary"
        title={
          <>
            {t("backend.hero.title")}
            <br />
            <span className="text-tertiary">{t("backend.hero.subtitle")}</span>
          </>
        }
        titleGradient="from-yellow-600 to-orange-500"
        description={t("backend.hero.description")}
        metrics={[
          {
            label: t("backend.metrics.languages"),
            value: t("backend.metrics.languagesValue"),
          },
          {
            label: t("backend.metrics.architecture"),
            value: t("backend.metrics.architectureValue"),
          },
          {
            label: t("backend.metrics.response"),
            value: t("backend.metrics.responseValue"),
            valueClassName: "text-tertiary font-mono text-sm",
          },
        ]}
      />

      <BentoGrid
        mainCard={{
          title: t("backend.distributedSystems.title"),
          description: t("backend.distributedSystems.description"),
          icon: "dns",
          tags: t("backend.distributedSystems.tags", { returnObjects: true }),
          borderColor: "border-yellow-600",
        }}
        cards={projects.slice(0, 3)}
        accentColor="text-tertiary"
        gradientFrom="from-tertiary"
        sectionClassName="mb-32"
      />

      <StickyFeatureSection
        sidebar={{
          title: t("backend.scalability.title"),
          description: t("backend.scalability.description"),
          badge: {
            label: t("backend.scalability.activeTuning"),
            colorClass: "bg-tertiary",
          },
          codeBlock: `replicaCount: 12
strategy: RollingUpdate
maxSurge: 25%
maxUnavailable: 0`,
        }}
      >
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-surface-container-low overflow-hidden group border border-outline-variant/5 rounded-lg">
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">
                  {t("backend.apiGateway.title")}
                </h3>
                <span className="text-[10px] font-mono text-tertiary">
                  {t("backend.apiGateway.proto")}
                </span>
              </div>
              <p className="text-sm text-on-surface-variant">
                {t("backend.apiGateway.description")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/5">
              <span className="material-symbols-outlined text-tertiary mb-4">
                security
              </span>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-2">
                {t("backend.authentication.title")}
              </h4>
              <p className="text-[10px] text-on-surface-variant leading-relaxed">
                {t("backend.authentication.description")}
              </p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/5">
              <span className="material-symbols-outlined text-tertiary mb-4">
                analytics
              </span>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-2">
                {t("backend.monitoring.title")}
              </h4>
              <p className="text-[10px] text-on-surface-variant leading-relaxed">
                {t("backend.monitoring.description")}
              </p>
            </div>
          </div>
        </div>
      </StickyFeatureSection>

      <TechnologyGrid
        title={t("backend.technologyStack")}
        technologies={technologies}
        accentColor="text-tertiary"
      />
    </>
  );
}

export default BackendPage;
