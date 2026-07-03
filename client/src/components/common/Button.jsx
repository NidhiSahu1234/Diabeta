/**
 * Reusable Button Component
 *
 * Props:
 * children  -> Text or icon inside button
 * variant   -> primary | secondary | outline
 * size      -> sm | md | lg
 * onClick   -> Click handler
 * type      -> button | submit | reset
 * disabled  -> true / false
 * className -> Additional Tailwind classes
 */

function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  // Button Variants
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
  };

  // Button Sizes
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg
        font-semibold
        transition-all
        duration-300
        shadow-md
        hover:shadow-lg
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
