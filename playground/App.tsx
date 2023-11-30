import React from "react";
import { Carousel, CarouselSlide } from "../src/index";

import "./style.css";

type Props = {
  image: string;
  title: string;
  description: string;
};
function Card({ image, title, description }: Props) {
  return (
    <div className="card">
      <img src={image} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <Carousel options={{ default: { slidesPerPage: 1, justifyContent: "center" }, mediaQueries: {
        "680": {
            slidesPerPage: 2,
            justifyContent: "space-around",
        },
        "720": {
            slidesPerPage: 3,
            justifyContent: "space-around",
        }
      } }}>
        <CarouselSlide className="slide">
          <Card
            image="/1.jpg"
            title="First Gaming Setuo"
            description="gaming aesthetic gaming aesthetics game aesthetic gaming tattoo game tattoo games tattoo gamer tattoos gamer tattoo gaming tattoos gamers tattoo gaming wallpapers gaming wallpaper gaming quotes games aesthetic gamers aesthetic gamer aesthetic game quotes gamers wallpaper games wallpaper gamer wallpapers game wallpaper gamer wallpaper games game night aesthetic gaming anime"
          />
        </CarouselSlide>
        <CarouselSlide className="slide">
          <Card
            image="/2.jpg"
            title="First Gaming Setuo"
            description="gaming aesthetic gaming aesthetics game aesthetic gaming tattoo game tattoo games tattoo gamer tattoos gamer tattoo gaming tattoos gamers tattoo gaming wallpapers gaming wallpaper gaming quotes games aesthetic gamers aesthetic gamer aesthetic game quotes gamers wallpaper games wallpaper gamer wallpapers game wallpaper gamer wallpaper games game night aesthetic gaming anime"
          />
        </CarouselSlide>
        <CarouselSlide className="slide">
          <Card
            image="/3.jpg"
            title="First Gaming Setuo"
            description="gaming aesthetic gaming aesthetics game aesthetic gaming tattoo game tattoo games tattoo gamer tattoos gamer tattoo gaming tattoos gamers tattoo gaming wallpapers gaming wallpaper gaming quotes games aesthetic gamers aesthetic gamer aesthetic game quotes gamers wallpaper games wallpaper gamer wallpapers game wallpaper gamer wallpaper games game night aesthetic gaming anime gaming aesthetic gaming aesthetics game aesthetic gaming tattoo game tattoo games tattoo gamer tattoos gamer tattoo gaming tattoos gamers tattoo gaming wallpapers gaming wallpaper gaming quotes games aesthetic gamers aesthetic gamer aesthetic game quotes gamers wallpaper games wallpaper gamer wallpapers game wallpaper gamer wallpaper games game night aesthetic gaming anime"
          />
        </CarouselSlide>
        <CarouselSlide className="slide">
          <Card
            image="/4.jpg"
            title="First Gaming Setuo"
            description="gaming aesthetic gaming aesthetics game aesthetic gaming tattoo game tattoo games tattoo gamer tattoos gamer tattoo gaming tattoos gamers tattoo gaming wallpapers gaming wallpaper gaming quotes games aesthetic gamers aesthetic gamer aesthetic game quotes gamers wallpaper games wallpaper gamer wallpapers game wallpaper gamer wallpaper games game night aesthetic gaming anime"
          />
        </CarouselSlide>
      </Carousel>
    </main>
  );
}
