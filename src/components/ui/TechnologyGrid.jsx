// TechnologyCard = {
//   name: string,
//   description: string,
//   icon: string (SVG path or material symbol name),
//   shadowColor?: string (for SVG glow effect),
//   accentColor?: string (for material symbols),
// }
function TechnologyCard({
  name,
  description,
  icon,
  shadowColor,
  accentColor = "text-secondary",
}) {
  const isSvg = icon.startsWith("http") || icon.includes("svg");

  return (
    <div
      style={shadowColor ? { "--glow": shadowColor } : undefined}
      className="group flex flex-col items-center p-6 bg-surface-container-low rounded-lg bg-[#212121] hover:bg-[#2c2c2c] transition-all duration-300 cursor-default"
    >
      {isSvg ? (
        <img
          src={icon}
          alt={name}
          className="w-12 h-12 mb-4 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-[filter,opacity,transform] duration-300 group-hover:[filter:drop-shadow(0_0_15px_var(--glow))]"
        />
      ) : (
        <span
          className={`material-symbols-outlined text-4xl ${accentColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </span>
      )}
      <span className="font-black text-sm tracking-tighter text-on-surface mb-1">
        {name}
      </span>
      <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">
        {description}
      </span>
    </div>
  );
}

// TechnologyGrid = {
//   title: string,
//   technologies: Array<{ name, description, icon, shadowColor? }>,
//   accentColor?: string,
//   sectionClassName?: string,
// }
function TechnologyGrid({
  title,
  technologies,
  accentColor = "text-secondary",
  sectionClassName = "py-8",
}) {
  return (
    <section className={sectionClassName}>
      <h2 className="text-2xl font-black tracking-tight mb-12 text-on-surface">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={index}
            name={tech.name}
            description={tech.description}
            icon={tech.icon}
            shadowColor={tech.shadowColor}
            accentColor={accentColor}
          />
        ))}
      </div>
    </section>
  );
}

export { TechnologyCard };
export default TechnologyGrid;
