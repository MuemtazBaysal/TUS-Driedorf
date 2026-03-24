import { IconBallFootball } from "@tabler/icons-react";

type FootballProps = {
  size?: number;
  className?: string;
};

export default function Football({ size = 24, className = "" }: FootballProps) {
  return (
    <IconBallFootball
      size={size}
      stroke={1.8}
      color="currentColor"
      className={className}
    />
  );
}
