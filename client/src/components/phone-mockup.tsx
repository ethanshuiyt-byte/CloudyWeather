import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  content: React.ReactNode;
  className?: string;
}

export default function PhoneMockup({ content, className }: PhoneMockupProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="phone-mockup w-80 h-[600px] rounded-[3rem] p-6 relative" data-testid="phone-mockup">
        {content}
      </div>
    </div>
  );
}
