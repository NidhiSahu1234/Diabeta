function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
