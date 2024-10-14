import { cn } from "@/utils/lib";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

type ButtonVariant = "default" | "accent";
type ButtonSize = "default" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  endContent?: string | ReactNode;
};

const buttonVariants = cva(
  "font-kharkiv border text-lightest/90 uppercase text-sm leading-5 duration-200 font-normal",
  {
    variants: {
      variant: {
        default: "border-lightGray hover:border-accent",
        accent: "border-accent hover:border-lightest  hover:text-accent",
      },
      size: {
        default: "px-5 pt-2.5 pb-2",
        lg: "text-[30px] py-3.5 !px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, endContent, variant, size, className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          "flex items-center justify-center",
          buttonVariants({ variant, size, className })
        )}
      >
        {children}
        {endContent}
      </button>
    );
  }
);

export { Button };
