import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import type { Bot } from "~/utils/types";
import BotCard from "./BotCard";

export default ({ bots }: { bots: Bot[] }) => (
  <div className="not-content flex justify-center">
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        AutoScroll({
          speed: 0.75,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
          startDelay: 0,
        }),
      ]}
      className="w-11/12 md:w-full"
    >
      <CarouselContent>
        {bots.map((bot) => (
          <CarouselItem key={bot.id} className="pl-6 md:basis-1/2">
            <BotCard bot={bot} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
);
