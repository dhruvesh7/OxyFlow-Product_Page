import {
  Activity,
  AlertTriangle,
  Anchor,
  BarChart3,
  Bell,
  Building2,
  CheckCircle2,
  CircleDot,
  ClipboardList,
  Cloud,
  Cpu,
  Droplets,
  Eye,
  FileX,
  Lock,
  Monitor,
  Shield,
  ShieldCheck,
  Stethoscope,
  ToggleLeft,
  TrendingUp,
  Wifi,
  Wind,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  AlertTriangle,
  Anchor,
  BarChart3,
  Bell,
  Building2,
  CheckCircle2,
  CircleDot,
  ClipboardList,
  Cloud,
  Cpu,
  Droplets,
  Eye,
  FileX,
  Lock,
  Monitor,
  Shield,
  ShieldCheck,
  Stethoscope,
  ToggleLeft,
  TrendingUp,
  Wifi,
  Wind,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = iconMap[name] ?? Activity;
  return <Icon className={className} />;
}
