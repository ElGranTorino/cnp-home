import { cn } from "@/utils/lib";
import { HTMLAttributes } from "react";

function Header({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      className={cn(
        "h-20 bg-darkest/80 backdrop-blur-[50px] flex items-center justify-start z-40  top-0 m-0 fixed w-full",
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
}
export { Header };
