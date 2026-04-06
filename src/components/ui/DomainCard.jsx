import { Link } from "react-router-dom";

// DomainCard = {
//   to: string (route),
//   icon: string (material symbol name),
//   iconColor: string (tailwind class),
//   title: string,
//   description: string,
// }
function DomainCard({ to, icon, iconColor, title, description }) {
  return (
    <Link
      to={to}
      className="group bg-surface-container-low p-8 rounded-lg hover:bg-surface-container-high transition-all duration-300 hover:-translate-y-1"
    >
      <span
        className={`material-symbols-outlined ${iconColor} text-4xl mb-4 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </span>
      <h3 className="text-lg font-bold mb-2 text-on-surface">{title}</h3>
      <p className="text-sm text-on-surface-variant">{description}</p>
    </Link>
  );
}

export default DomainCard;
