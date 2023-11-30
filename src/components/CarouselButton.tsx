import React from "react";

export interface CarouselButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  scrollType: "next" | "previous";
}
const CarouselButton = React.forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
CarouselButton.displayName = "CarouselButton";
export default CarouselButton;
