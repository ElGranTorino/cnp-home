import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/utils/lib";

type ExtendedSectionProps = {
  topAngle?: number;
  bottomAngle?: number;
  backgroundColor?: "light" | "dark";
  hasTopClip?: boolean;
  hasBottomClip?: boolean;
};

const Section = forwardRef<
  HTMLElement,
  HTMLAttributes<HTMLElement> & ExtendedSectionProps
>(
  (
    {
      topAngle,
      bottomAngle,
      backgroundColor = "dark",
      hasTopClip = false,
      hasBottomClip = false,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const bottomClip = hasBottomClip ? "83%" : "100%";
    const topClip = hasTopClip ? "17%" : "0%";

    return (
      <section
        ref={ref}
        className={cn("section", className)}
        style={{
          clipPath: `polygon(0 0, 100% ${topClip}, 100% 100%, 0 ${bottomClip})`,
          ...style,
        }}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
