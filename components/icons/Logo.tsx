import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <span
      className={`relative inline-flex overflow-hidden rounded-full border border-white/20 bg-white/10 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image src="/logo.webp" alt="Website logo" fill sizes={`${size}px`} className="object-cover" priority />
    </span>
  );
}
