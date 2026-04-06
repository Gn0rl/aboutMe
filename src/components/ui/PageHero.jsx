// metric = { labelKey, valueKey, valueClassName? }
function MetricItem({
  label,
  value,
  valueClassName = "text-on-surface font-bold",
}) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] tracking-widest text-outline uppercase">
        {label}
      </span>
      <span className={valueClassName}>{value}</span>
    </div>
  );
}

// PageHero = {
//   statusLabel: string,
//   statusClassName: string (default "text-secondary"),
//   title: string | ReactNode,
//   titleGradient: string (default "from-blue-600 to-green-400"),
//   description: string,
//   metrics: Array<{ label: string, value: string, valueClassName?: string }>,
//   sectionClassName?: string,
// }
function PageHero({
  statusLabel,
  statusClassName = "text-secondary",
  title,
  titleGradient = "from-blue-600 to-green-400",
  description,
  metrics,
  sectionClassName = "mb-32",
}) {
  return (
    <section className={sectionClassName}>
      <div className="flex items-end lg:items-start justify-between">
        <div className="lg:col-span-8">
          <span
            className={`label-md font-medium tracking-[0.2em] uppercase mb-6 block ${statusClassName}`}
          >
            {statusLabel}
          </span>
          <h1
            className={`bg-gradient-to-r ${titleGradient} text-transparent bg-clip-text text-[3.5rem] leading-[1.1] font-black tracking-tighter mb-8`}
          >
            {title}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
            {description}
          </p>
        </div>
        {metrics && metrics.length > 0 && (
          <div className="lg:col-span-4 flex flex-col gap-4 border-l border-outline-variant/20 pl-8">
            {metrics.map((metric, index) => (
              <MetricItem
                key={index}
                label={metric.label}
                value={metric.value}
                valueClassName={metric.valueClassName}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export { MetricItem };
export default PageHero;
