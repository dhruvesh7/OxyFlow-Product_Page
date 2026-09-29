import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";
import { IMAGES } from "@/lib/constants";

const sizes = {
  sm: { width: 100, height: 32, className: "h-8 w-auto" },
  md: { width: 140, height: 44, className: "h-11 w-auto" },
  lg: { width: 200, height: 64, className: "h-16 w-auto" },
};

interface LogoProps {
  size?: keyof typeof sizes;
  className?: string;
  muted?: boolean;
  linkToTop?: boolean;
}

export function Logo({
  size = "md",
  className,
  muted = false,
  linkToTop = false,
}: LogoProps) {
  const { width, height, className: sizeClass } = sizes[size];

  const image = (
    <Image
      src={IMAGES.logo}
      alt="OxyFlow logo"
      width={width}
      height={height}
      className={cn(sizeClass, muted && "opacity-80", className)}
      priority={size === "lg"}
    />
  );

  if (linkToTop) {
    return (
      <Link href="#top" className="shrink-0 transition-opacity hover:opacity-90">
        {image}
      </Link>
    );
  }

  return image;
}
