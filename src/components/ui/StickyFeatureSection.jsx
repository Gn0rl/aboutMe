// StickyFeatureSection — секция с липким сайдбаром и контентом.
// sidebar = {
//   title: string | ReactNode,
//   description: string,
//   badge?: { label: string, colorClass?: string },
//   codeBlock?: string,
// }
// children — ReactNode (контент справа)
function StickyFeatureSection({ sidebar, children, sectionClassName = "mb-32" }) {
  return (
    <section className={sectionClassName}>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 sticky top-24">
          <h2
            className="text-3xl font-black tracking-tight mb-6"
            dangerouslySetInnerHTML={{ __html: sidebar.title }}
          />
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
            {sidebar.description}
          </p>
          {sidebar.badge && (
            <div className="p-6 bg-surface-container-lowest border border-outline-variant/15 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2 h-2 rounded-full ${sidebar.badge.colorClass || "bg-tertiary"} animate-pulse`}></div>
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  {sidebar.badge.label}
                </span>
              </div>
              {sidebar.codeBlock && (
                <code className="text-[11px] text-on-surface-variant block font-mono whitespace-pre-line">
                  {sidebar.codeBlock}
                </code>
              )}
            </div>
          )}
        </div>
        <div className="md:w-2/3">{children}</div>
      </div>
    </section>
  );
}

export default StickyFeatureSection;
