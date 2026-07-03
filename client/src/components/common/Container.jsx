/**
 * Reusable Container Component
 *
 * Keeps content centered with a consistent maximum width.
 */

function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
