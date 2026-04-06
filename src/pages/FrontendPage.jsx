import { useTranslation } from "react-i18next";
import PageHero from "../components/ui/PageHero";
import BentoGrid from "../components/ui/BentoGrid";
import TechnologyGrid from "../components/ui/TechnologyGrid";

import viteSvg from "../assets/vite.svg";
import reactSvg from "../assets/react.svg";
import typescriptSvg from "../assets/typescript.svg";
import scssSvg from "../assets/scss.svg";
import react_routerSvg from "../assets/react-router.svg";
import vitestSvg from "../assets/vitest.svg";

function FrontendPage() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("frontend.projects.stateManagementTitle"),
      description: t("frontend.projects.stateManagementDescription"),
      icon: "storage",
      tags: ["Zustand", "Context", "Redux"],
    },
    {
      title: t("frontend.projects.performanceOptimizationTitle"),
      description: t("frontend.projects.performanceOptimizationDescription"),
      icon: "speed",
      tags: ["Vite", "Lazy", "Memo"],
    },
    {
      title: t("frontend.projects.accessibilityFirstTitle"),
      description: t("frontend.projects.accessibilityFirstDescription"),
      icon: "accessibility_new",
      tags: ["A11y", "WCAG", "ARIA"],
    },
    {
      title: t("frontend.projects.UIUXDesignTitle"),
      description: t("frontend.projects.UIUXDesignDescription"),
      icon: "design_services",
      tags: ["UI", "UX", "Design"],
    },
  ];

  const technologies = [
    {
      name: t("frontend.technologies.react.name"),
      icon: reactSvg,
      description: t("frontend.technologies.react.description"),
      shadowColor: "rgb(97, 218, 251)",
    },
    {
      name: t("frontend.technologies.vite.name"),
      icon: viteSvg,
      description: t("frontend.technologies.vite.description"),
      shadowColor: "rgb(153, 0, 255)",
    },
    {
      name: t("frontend.technologies.typescript.name"),
      icon: typescriptSvg,
      description: t("frontend.technologies.typescript.description"),
      shadowColor: "rgb(0,123,255)",
    },
    {
      name: t("frontend.technologies.scss.name"),
      icon: scssSvg,
      description: t("frontend.technologies.scss.description"),
      shadowColor: "rgb(233, 30, 165)",
    },
    {
      name: t("frontend.technologies.reactRouter.name"),
      icon: react_routerSvg,
      description: t("frontend.technologies.reactRouter.description"),
      shadowColor: "rgb(167, 40, 40)",
    },
    {
      name: t("frontend.technologies.vitest.name"),
      icon: vitestSvg,
      description: t("frontend.technologies.vitest.description"),
      shadowColor: "rgb(96, 193, 66)",
    },
  ];

  return (
    <>
      <PageHero
        statusLabel={t("hero.status")}
        title={
          <>
            {t("frontend.hero.title")}
            <br />
            <span className="text-secondary">
              {t("frontend.hero.subtitle")}
            </span>
          </>
        }
        description={t("frontend.hero.description")}
        metrics={[
          {
            label: t("frontend.metrics.stack"),
            value: t("frontend.metrics.stackValue"),
          },
          {
            label: t("frontend.metrics.build"),
            value: t("frontend.metrics.buildValue"),
          },
          {
            label: t("frontend.metrics.performance"),
            value: t("frontend.metrics.performanceValue"),
            valueClassName: "text-secondary font-mono text-sm",
          },
        ]}
      />

      <BentoGrid
        mainCard={{
          title: t("frontend.componentSystems.title"),
          description: t("frontend.componentSystems.description"),
          icon: "dashboard",
          tags: t("frontend.componentSystems.tags", { returnObjects: true }),
          borderColor: "border-blue-600",
        }}
        cards={projects.slice(0, 4)}
        accentColor="text-secondary"
        gradientFrom="from-secondary"
      />

      <TechnologyGrid
        title={t("frontend.technologyStack")}
        technologies={technologies}
        accentColor="text-secondary"
      />
    </>
  );
}

export default FrontendPage;
