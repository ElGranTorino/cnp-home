import { cn } from "@/utils/lib";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

type TitleSize = "sm" | "md" | "lg" | "xl";
type TitleVariant = "light" | "dark" | "accent";

type TitleProps = ButtonHTMLAttributes<HTMLHeadingElement> & {
  size?: TitleSize;
  variant?: TitleVariant;
  endContent?: string | ReactNode;
};

const buttonVariants = cva("font-kharkiv leading-none tracking-normal", {
  variants: {
    variant: {
      dark: "text-darkest",
      light: "text-lightest",
      accent: "text-accent",
    },
    size: {
      sm: "text-[81px] leading-[110%]",
      md: "text-[90px]",
      lg: "text-[113px] leading-[110%]",
      xl: "text-[126px] leading-[100%]",
    },
  },
  defaultVariants: {
    variant: "light",
    size: "md",
  },
});

function Title({
  children,
  className,
  size,
  variant,
  color,
  ...props
}: TitleProps) {
  return (
    <h2 className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </h2>
  );
}

export { Title };
