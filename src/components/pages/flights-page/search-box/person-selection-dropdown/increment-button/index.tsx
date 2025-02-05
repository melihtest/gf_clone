import { Button } from "@/components/atoms/button";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function IncrementButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { children, className, ...buttonProps } = props;

  return (
    <Button
      {...buttonProps}
      className={cn(
        `w-8 h-8 bg-blue-50 hover:bg-blue-100 shadow-none ${
          buttonProps.disabled && "bg-gray-200"
        }`,
        className
      )}
    >
      {children}
    </Button>
  );
}
