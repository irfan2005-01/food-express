export default function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
      )}
    </div>
  );
}