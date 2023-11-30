import React from "react";
//import styles from "./style.module.css";
import CarouselSlide from "./CarouselSlide";
import CarouselButton, { CarouselButtonProps } from "./CarouselButton";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: CarouselOptions;
}

export interface CarouselOptions {
  slidesPerPage?: number;
  spacing?: number;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-around";
};

export default function Carousel({ children, options, ...props }: CarouselProps) {
  const slides = React.useRef<HTMLDivElement>(null);

  const filterSlides = (() =>
    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === CarouselSlide)
        return child;
      return null;
    }))();

  const pages = (() => {
    const pages = [];
    let start = 0;
    const count = options?.slidesPerPage ?? filterSlides?.length!;
    while (start <= filterSlides?.length! - count) {
      pages.push(filterSlides?.slice(start, (start += count)));
    }
    if (start !== filterSlides?.length!) {
      pages.push(filterSlides?.slice(start));
    }
    return pages;
  })();

  const buttons = (() =>
    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === CarouselButton) {
        const button = child as React.ReactElement<CarouselButtonProps>;
        return React.cloneElement(button, {
          onClick: button.props.scrollType === "next" ? next : previous,
        });
      }
      return null;
    }))();

  function next() {
    slides.current?.scrollBy({
      left: slides.current.clientWidth,
      behavior: "smooth",
    });
  }
  function previous() {
    slides.current?.scrollBy({
      left: -slides.current.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <div /*className={styles.carousel}*/ {...props}>
      <div
        ref={slides}
        // className={styles.slides}
        style={{ gap: `${options?.spacing}px` }}
      >
        {pages.map((page, index) => (
          <div
            key={index}
            // className={styles.page}
            style={{
              gap: `${options?.spacing}px`,
              justifyContent: options?.justifyContent,
            }}
          >
            {page}
          </div>
        ))}
      </div>
      {buttons}
    </div>
  );
}
