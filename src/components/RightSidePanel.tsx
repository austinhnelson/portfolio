import { Section } from "@/App";
import { AboutMe } from "./AboutMe";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ResizablePanel } from "./ui/resizable";

interface RightSidePanelProps {
  activeSelection: Section;
}

export const RightSidePanel: React.FC<RightSidePanelProps> = ({
  activeSelection,
}) => {
  return (
    <ResizablePanel className="right-side-panel flex">
      <div className="flex flex-col w-2/4 p-4 space-y-4">
        <div
          className={`about-me h-1/2 p-2 flex flex-col overflow-y-scroll justify-between ${
            activeSelection === "about-me" ? "active" : ""
          }`}
        >
          <AboutMe />
        </div>
        <div className="projects h-1/2 p-2 flex flex-col items-center justify-start">
          <div className="p-1">Projects</div>
          <Carousel className="p-4 w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex items-center justify-center">
                      <div className="text-4xl font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>
        </div>
      </div>

      <div className="flex-1 py-4">
        <div className="experience h-full p-4">Experience</div>
      </div>
    </ResizablePanel>
  );
};
