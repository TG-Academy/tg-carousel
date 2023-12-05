import React from "react";
import CarouselSlide from "./CarouselSlide";
import CarouselButton, { CarouselButtonProps } from "./CarouselButton";
import "./style.css";
import ScreenWidthProvider, { useScreenWidth } from "../contexts/ScreenWidth";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: CarouselOptions;
}

export interface CarouselOptions {
  default?: CarouselStyle;
  mediaQueries?: CarouselMediaQueries;
}

export interface CarouselStyle {
  slidesPerPage?: number;
  spacing?: number;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-around";
}

export interface CarouselMediaQueries {
  [minWidth: number]: CarouselStyle;
}

function Carousel({
  children,
  options = { default: { slidesPerPage: 1 }, mediaQueries: {} },
  ...props
}: CarouselProps) {
  const { width: screenWidth } = useScreenWidth();
  const [style, setStyle] = React.useState<CarouselStyle>(options?.default!);
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
    const count = style?.slidesPerPage ?? filterSlides?.length ?? 0;
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

  function setAppropriateStyle() {
    const { default: defaultStyle = {}, mediaQueries = {} } = options;

    let newStyle = defaultStyle;
    const minWidths = Object.keys(mediaQueries).map((width) => parseInt(width));

    for (const width of minWidths) {
      if (width <= screenWidth) {
        newStyle = mediaQueries[width] ?? defaultStyle;
      }
    }

    setStyle(newStyle);
  }
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

  React.useEffect(() => {
    setAppropriateStyle();
  }, [screenWidth]);
  return (
    <div className="carousel" {...props}>
      <div
        ref={slides}
        className="slides"
        style={{ gap: `${style?.spacing}px` }}
      >
        {pages.map((page, index) => (
          <div
            key={index}
            className="page"
            style={{
              gap: `${style?.spacing}px`,
              justifyContent: style?.justifyContent,
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

export default ({ ...props }: CarouselProps) => (
  <ScreenWidthProvider>
    <Carousel {...props} />
  </ScreenWidthProvider>
);
