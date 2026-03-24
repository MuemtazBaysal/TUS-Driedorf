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
      <rect x="4" y="6" width="16" height="14" rx="1.2" fill="currentColor" opacity="0.08" />
      <path d="M4 20V6H20V20" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 20H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7.2 6V20M10.4 6V20M13.6 6V20M16.8 6V20" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <path d="M4 9.5H20M4 13H20M4 16.5H20" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}
