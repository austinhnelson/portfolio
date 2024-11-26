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
      <div className="flex flex-col w-2/4 p-4 space-y-4">
        <div className="about-me h-1/2 p-2 flex justify-center">About Me</div>
        <div className="about-me h-1/2 p-2 flex justify-center"></div>
      </div>

      <div className="flex-1 p-4">
        <div className="experience h-full p-4">Experience</div>
      </div>
    </ResizablePanel>
  );
};
