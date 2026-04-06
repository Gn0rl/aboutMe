import { useTranslation } from "react-i18next";
import PageHero from "../components/ui/PageHero";
import BentoGrid from "../components/ui/BentoGrid";
import TechnologyGrid from "../components/ui/TechnologyGrid";
import StickyFeatureSection from "../components/ui/StickyFeatureSection";

function GamedevPage() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("gamedev.projects.unity.title"),
      description: t("gamedev.projects.unity.description"),
      icon: "videogame_asset",
      tags: ["Unity", "C#", "3D"],
    },
    {
      title: t("gamedev.projects.unreal.title"),
      description: t("gamedev.projects.unreal.description"),
      icon: "memory",
      tags: ["Unreal", "C++", "Blueprints"],
    },
    {
      title: t("gamedev.projects.architecture.title"),
      description: t("gamedev.projects.architecture.description"),
      icon: "category",
      tags: ["ECS", "OOP", "Patterns"],
    },
    {
      title: t("gamedev.projects.multiplayer.title"),
      description: t("gamedev.projects.multiplayer.description"),
      icon: "public",
      tags: ["Networking", "Server", "Sync"],
    },
  ];

  const technologies = [
    {
      name: t("gamedev.technologies.unity.name"),
      icon: "videogame_asset",
      description: t("gamedev.technologies.unity.description"),
    },
    {
      name: t("gamedev.technologies.unreal.name"),
      icon: "memory",
      description: t("gamedev.technologies.unreal.description"),
    },
    {
      name: t("gamedev.technologies.csharp.name"),
      icon: "code",
      description: t("gamedev.technologies.csharp.description"),
    },
    {
      name: t("gamedev.technologies.cpp.name"),
      icon: "terminal",
      description: t("gamedev.technologies.cpp.description"),
    },
    {
      name: t("gamedev.technologies.blender.name"),
      icon: "3d_rotation",
      description: t("gamedev.technologies.blender.description"),
    },
    {
      name: t("gamedev.technologies.photon.name"),
      icon: "wifi",
      description: t("gamedev.technologies.photon.description"),
    },
  ];

  return (
    <>
      <PageHero
        statusLabel={t("hero.status")}
        statusClassName="text-tertiary"
        title={
          <>
            {t("gamedev.hero.title")}
            <br />
            <span className="text-tertiary">{t("gamedev.hero.subtitle")}</span>
          </>
        }
        titleGradient="from-green-600 to-emerald-500"
        description={t("gamedev.hero.description")}
        metrics={[
          {
            label: t("gamedev.metrics.engines"),
            value: t("gamedev.metrics.enginesValue"),
          },
          {
            label: t("gamedev.metrics.languages"),
            value: t("gamedev.metrics.languagesValue"),
          },
          {
            label: t("gamedev.metrics.shipped"),
            value: t("gamedev.metrics.shippedValue"),
            valueClassName: "text-tertiary font-mono text-sm",
          },
        ]}
      />

      <BentoGrid
        mainCard={{
          title: t("gamedev.projects.interactiveWorlds.title"),
          description: t("gamedev.projects.interactiveWorlds.description"),
          icon: "sports_esports",
          tags: t("gamedev.projects.interactiveWorlds.tags", {
            returnObjects: true,
          }),
          borderColor: "border-green-600",
        }}
        cards={projects.slice(0, 3)}
        accentColor="text-tertiary"
        gradientFrom="from-tertiary"
        sectionClassName="mb-32"
      />

      <StickyFeatureSection
        sidebar={{
          title: t("gamedev.features.title"),
          description: t("gamedev.features.description"),
          badge: {
            label: t("gamedev.features.activeDevelopment"),
            colorClass: "bg-tertiary",
          },
          codeBlock: `class Player : Entity {
  health: 100
  inventory: Item[]
  quests: Quest[]
}`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/5">
            <span className="material-symbols-outlined text-tertiary text-3xl mb-4">
              animation
            </span>
            <h3 className="text-lg font-bold mb-2">
              {t("gamedev.systems.animation.title")}
            </h3>
            <p className="text-sm text-on-surface-variant">
              {t("gamedev.systems.animation.description")}
            </p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/5">
            <span className="material-symbols-outlined text-tertiary text-3xl mb-4">
              light_mode
            </span>
            <h3 className="text-lg font-bold mb-2">
              {t("gamedev.systems.lighting.title")}
            </h3>
            <p className="text-sm text-on-surface-variant">
              {t("gamedev.systems.lighting.description")}
            </p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/5">
            <span className="material-symbols-outlined text-tertiary text-3xl mb-4">
              volume_up
            </span>
            <h3 className="text-lg font-bold mb-2">
              {t("gamedev.systems.audio.title")}
            </h3>
            <p className="text-sm text-on-surface-variant">
              {t("gamedev.systems.audio.description")}
            </p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/5">
            <span className="material-symbols-outlined text-tertiary text-3xl mb-4">
              touch_app
            </span>
            <h3 className="text-lg font-bold mb-2">
              {t("gamedev.systems.input.title")}
            </h3>
            <p className="text-sm text-on-surface-variant">
              {t("gamedev.systems.input.description")}
            </p>
          </div>
        </div>
      </StickyFeatureSection>

      <TechnologyGrid
        title={t("gamedev.technologyStack")}
        technologies={technologies}
        accentColor="text-tertiary"
      />
    </>
  );
}

export default GamedevPage;
