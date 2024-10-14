import { HTMLAttributes } from "react";
import { BlurPanel } from "@/components";
import { cn } from "@/utils/lib";

function HeroBlurPanels({
  quantity = 23,
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { quantity?: number }) {
  return (
    <div className={cn("flex relative", className)} {...props}>
      {Array.from({ length: quantity }).map((panel, i) => (
        <BlurPanel className="h-[1000px] w-[40px]" key={i} />
      ))}
    </div>
  );
}

export { HeroBlurPanels };
