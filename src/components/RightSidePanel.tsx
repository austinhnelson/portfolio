import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ResizablePanel } from "./ui/resizable";

export const RightSidePanel = () => {
  return (
    <ResizablePanel className="right-side-panel flex">
      <div className="flex flex-col w-1/3 p-4 space-y-4">
        <div className="h-[400px]">About Me</div>
        <Carousel className="h-[400px]">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="flex-1 p-4">Experience</div>
    </ResizablePanel>
  );
};
