import React from "react";

export interface CarouseLSlideProps
  extends React.HTMLAttributes<HTMLDivElement> {}
const CarouselSlide = React.forwardRef<HTMLDivElement, CarouseLSlideProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  }
);
CarouselSlide.displayName = "CarouselSlide";
export default CarouselSlide;
