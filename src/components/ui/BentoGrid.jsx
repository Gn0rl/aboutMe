// wideCard = {
//   title: string,
//   description: string,
//   icon?: string (material symbol),
//   footer?: ReactNode,
//   accentColor?: string,
//   colSpan?: number (default 2),
//   children?: ReactNode — полностью кастомный контент,
// }
function WideCard({
  title,
  description,
  icon,
  footer,
  accentColor = "text-secondary",
  colSpan = 2,
  children,
}) {
  if (children) {
    return (
      <div
        className={`md:col-span-${colSpan} bg-surface-container-low p-8 rounded-lg bg-[#212121] hover:bg-[#2c2c2c] transition-all group`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`md:col-span-${colSpan} bg-surface-container-low p-8 rounded-lg bg-[#212121] hover:bg-[#2c2c2c] transition-all group`}
    >
      <div>
        {icon && (
          <span
            className={`material-symbols-outlined ${accentColor} mb-4`}
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            {icon}
          </span>
        )}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-on-surface-variant text-sm">{description}</p>
      </div>
      {footer && <div className="mt-8">{footer}</div>}
    </div>
  );
}

// project = {
//   title: string,
//   description: string,
//   icon: string (material symbol name),
//   tags: string[],
// }
function ProjectCard({ project, accentColor = "text-secondary" }) {
  return (
    <div className="bg-surface-container-low p-6 bg-[#212121] hover:bg-[#2c2c2c] transition-all group">
      <span
        className={`material-symbols-outlined ${accentColor} mb-4 group-hover:scale-110 transition-transform`}
      >
        {project.icon}
      </span>
      <h4 className="text-sm font-bold uppercase tracking-widest mb-2">
        {project.title}
      </h4>
      <p className="text-[10px] text-on-surface-variant leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-0.5 bg-surface-container-highest text-[8px] font-bold uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// MainProjectCard = {
//   title: string,
//   description: string,
//   icon?: string (material symbol, default "dashboard"),
//   tags: string[],
//   accentColor: string (default "text-secondary"),
//   gradientFrom: string (default "from-secondary"),
// }
function MainProjectCard({
  title,
  description,
  icon = "dashboard",
  tags,
  accentColor = "text-secondary",
  gradientFrom = "from-secondary",
  borderColor,
  className = "",
}) {
  const derivedBorderColor =
    borderColor || gradientFrom.replace("from-", "border-");

  return (
    <div
      className={`md:col-span-2 md:row-span-2 relative overflow-hidden group bg-gradient-to-br from-[#212121] hover:from-[#262626] border-l-8 ${derivedBorderColor} ${className}`}
    >
      <div className="relative z-10 p-8">
        <span
          className={`material-symbols-outlined ${accentColor} mb-4`}
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          {icon}
        </span>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-on-surface-variant text-sm mb-8 max-w-xs">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-12">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 bg-surface-container-highest border-l-4 ${derivedBorderColor} text-[10px] font-bold uppercase tracking-widest`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 opacity-10 group-hover:opacity-20 transition-opacity">
        <div
          className={`w-full h-full bg-gradient-to-br ${gradientFrom} to-transparent`}
        ></div>
      </div>
    </div>
  );
}

// BentoGrid = {
//   mainCard?: { title, description, icon?, tags } | null,
//   wideCards?: Array<WideCard props>,
//   cards?: Array<ProjectCard props>,
//   accentColor?: string,
//   gradientFrom?: string,
//   sectionClassName?: string,
// }
function BentoGrid({
  mainCard,
  wideCards = [],
  cards = [],
  accentColor = "text-secondary",
  gradientFrom = "from-secondary",
  sectionClassName = "mb-20",
}) {
  return (
    <section className={sectionClassName}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {mainCard && (
          <MainProjectCard
            {...mainCard}
            accentColor={accentColor}
            gradientFrom={gradientFrom}
          />
        )}
        {wideCards.map((wideCard, index) => (
          <WideCard key={index} {...wideCard} accentColor={accentColor} />
        ))}
        {cards.map((card, index) =>
          card.render ? (
            <div key={index}>{card.render()}</div>
          ) : (
            <ProjectCard key={index} project={card} accentColor={accentColor} />
          ),
        )}
      </div>
    </section>
  );
}

export { ProjectCard, MainProjectCard, WideCard };
export default BentoGrid;
