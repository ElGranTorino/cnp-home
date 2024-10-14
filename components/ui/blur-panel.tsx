import { cn } from "@/utils/lib";
import { HTMLAttributes } from "react";

function BlurPanel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("blur-panel", className)} {...props}></div>;
}

export { BlurPanel };
