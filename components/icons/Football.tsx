type FootballProps = {
  size?: number;
  className?: string;
};

export default function Football({ size = 24, className = "" }: FootballProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2.5 L14.5 8 L20.5 8.5 L16 13 L17 19 L12 16 L7 19 L8 13 L3.5 8.5 L9.5 8 Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M12 7 L13.5 10.5 L17 11 L14.5 13.5 L15 17 L12 15 L9 17 L9.5 13.5 L7 11 L10.5 10.5 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
