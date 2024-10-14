import { cn } from "@/utils/lib";
import { HTMLAttributes } from "react";

function Container({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("max-w-[1422px] mx-auto", className)} {...props}>
      {children}
    </div>
  );
}

export { Container };
