import type { LucideIcon } from "lucide-react";

const TONES = {
  primary: {
    bg: "bg-primary-100",
    blob: "bg-primary-200/60",
    icon: "text-primary-600",
  },
  secondary: {
    bg: "bg-secondary-100",
    blob: "bg-secondary-200/60",
    icon: "text-secondary-700",
  },
  gold: {
    bg: "bg-gold-100",
    blob: "bg-gold-200/60",
    icon: "text-gold-600",
  },
} as const;

export default function ActivityIllustration({
  icon: Icon,
  tone = "primary",
  className = "",
}: {
  icon: LucideIcon;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  const t = TONES[tone];
  return (
    <div
      className={`relative h-40 w-full overflow-hidden rounded-2xl ${t.bg} ${className}`}
    >
      <div
        aria-hidden
        className={`absolute -left-8 -top-10 h-32 w-32 rounded-full ${t.blob} blur-md`}
      />
      <div
        aria-hidden
        className={`absolute -right-10 -bottom-12 h-36 w-36 rounded-full ${t.blob} blur-md`}
      />
      <div className="relative flex h-full items-center justify-center">
        <Icon className={`h-14 w-14 ${t.icon}`} strokeWidth={1.5} />
      </div>
    </div>
  );
}
