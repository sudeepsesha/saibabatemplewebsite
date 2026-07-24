/**
 * OrnamentDivider
 * Signature visual motif for the temple site: a row of repeating
 * temple-arch / diya-flame shapes rendered in the primary gold tone.
 * Used to separate sections instead of a plain hairline rule.
 */
function OrnamentDivider({ className = "" }) {
  return (
    <div className={`flex w-full justify-center overflow-hidden py-2 ${className}`} aria-hidden="true">
      <svg
        width="240"
        height="18"
        viewBox="0 0 240 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 20 + 4} 16 C ${i * 20 + 4} 8, ${i * 20 + 10} 2, ${i * 20 + 16} 16`}
            stroke="#C48A1D"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={i % 3 === 1 ? 1 : 0.4}
          />
        ))}
      </svg>
    </div>
  );
}

export default OrnamentDivider;
