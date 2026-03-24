type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="18" fill="currentColor" opacity="0.1" />
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 8 L23 15 L30 16 L25 21 L26 28 L20 24 L14 28 L15 21 L10 16 L17 15 Z"
        fill="currentColor"
        opacity="0.2"
      />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fill="currentColor"
        fontSize="16"
        fontWeight="bold"
        fontFamily="'Space Grotesk', sans-serif"
      >
        TuS
      </text>
    </svg>
  );
}
