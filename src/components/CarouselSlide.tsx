import React from "react";

type Props = {
  children?: React.ReactNode;
};
export default function CarouselSlide({ children }: Props) {
  return <div /*className={styles.slide}*/>{children}</div>;
}
