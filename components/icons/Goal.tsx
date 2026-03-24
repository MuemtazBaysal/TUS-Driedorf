type GoalProps = {
  size?: number;
  className?: string;
};

export default function Goal({ size = 24, className = "" }: GoalProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 20 L3 10 L12 6 L21 10 L21 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M3 20 L21 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 12 L6 20 M9 11 L9 20 M12 10 L12 20 M15 11 L15 20 M18 12 L18 20"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <path
        d="M3 12 L21 12 M3 15 L21 15 M3 18 L21 18"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  );
}
