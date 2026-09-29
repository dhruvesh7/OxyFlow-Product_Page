import Link from "next/link";
import { cn } from "cn";
import { Button } from "@/components/ui/button";

interface GradientButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  download?: boolean;
  size?: "default" | "lg";
  variant?: "gradient" | "outline";
  as?: "link" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function GradientButton({
  href = "#",
  children,
  className,
  download,
  size = "default",
  variant = "gradient",
  as = "link",
  onClick,
  type = "button",
  disabled = false,
}: GradientButtonProps) {
  const sizeClasses =
    size === "lg" ? "h-11 px-6 text-base" : "h-9 px-5 text-sm";

  if (variant === "outline") {
    return (
      <Button
        nativeButton={as !== "link"}
        render={as === "link" ? <Link href={href} download={download} /> : <button type={type} onClick={onClick} disabled={disabled} />}
        variant="outline"
        className={cn(
          "border-[var(--oxy-navy)] text-[var(--oxy-navy)] hover:bg-[var(--oxy-blue-tint)]",
          sizeClasses,
          className,
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {children}
      </Button>
    );
  }

  if (as === "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium text-white shadow-md transition-all bg-gradient-cta hover:shadow-lg active:translate-y-px",
          sizeClasses,
          className,
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      download={download}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium text-white shadow-md transition-all bg-gradient-cta hover:shadow-lg active:translate-y-px",
        sizeClasses,
        className
      )}
    >
      {children}
    </Link>
  );
}
