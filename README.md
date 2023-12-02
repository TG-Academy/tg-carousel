# TG Carousel: React Component Library for Component Sliding

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/tg-carousel/blob/main/LICENSE)
[![Node.js Package](https://github.com/TG-Academy/tg-carousel/actions/workflows/npm-publish.yml/badge.svg?branch=main)](https://github.com/TG-Academy/tg-carousel/actions/workflows/npm-publish.yml)

`tg-carousel` is a versatile React component library designed to provide a simple and flexible solution for implementing sliding carousels in your React applications. It addresses the challenge of precise control over sliding buttons and offers a range of customization options.

## Features

- **Responsive Design:** Automatically adjusts to different screen sizes with customizable slides per page for an optimal viewing experience.

- **Media Query Support:** Define specific settings for different screen widths using media queries, ensuring your carousel looks great across various devices.

- **Easy Integration:** Integrate the carousel effortlessly into your React projects with a minimal setup process.

## Installation

Install `tg-carousel` using npm:

```bash
npm install @tg-academy/carousel
```

## Usage

````ts
import React from "react";
import { Carousel, CarouselSlide } from "@tg-academy/carousel";

import "@tg-academy/carousel/css";

// Your custom Card component
import Card from "./Card";

function App() {
  return (
    <main>
      <Carousel
        options={{
          default: {
            slidesPerPage: 1,
            justifyContent: "center",
          },
          mediaQueries: {
            "680": {
              slidesPerPage: 2,
              justifyContent: "space-around",
            },
            "720": {
              slidesPerPage: 3,
              justifyContent: "space-around",
            },
          },
        }}
      >
        {/* Your CarouselSlides with custom Card components */}
        <CarouselSlide className="slide">
          <Card
            image="/1.jpg"
            title="First Gaming Setup"
            description="Your custom description here."
          />
        </CarouselSlide>
        {/* ... Add more slides here */}
      </Carousel>
    </main>
  );
}

export default App;
````
