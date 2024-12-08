import { FaDocker, FaJenkins, FaReact } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { SiDotnet, SiTypescript } from "react-icons/si";
import { AiOutlineKubernetes } from "react-icons/ai";
export const AboutMe = () => {
  return (
    <div className="about-me h-1/2 p-2 flex justify-center">
      <div className="text-center">
        <div className="text-xl font-bold">About Me</div>
        <div className="flex flex-row items-center space-x-4">
          <img
            src="pfp.jpg"
            alt="Profile Picture"
            className="rounded-full border-2 border-gray-300 w-40 h-40"
          />
          <p className="text-sm mt-2">
            I'm a software engineer who enjoys solving complex problems and
            continuously learning throughout that process. I have experience
            building full-stack applications, encompassing everything from
            DevOps to domain design, as well as developing desktop applications
            using the .NET Framework. I thrive in collaborative environments and
            embrace challenges as huge opportunities for growth. Outside of
            work, I enjoy lifting heavy weights, going on long runs, as well as
            experimenting with unfamiliar technologies.
          </p>
        </div>
        <div className="text-lg font-semibold mt-4">Technologies:</div>
        <div className="flex pt-4 flex-wrap justify-center space-x-4 text-2xl">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <FaReact className="icon text-blue-500" />
              </TooltipTrigger>
              <TooltipContent>
                <div>React</div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiTypescript className="icon text-blue-700" />
              </TooltipTrigger>
              <TooltipContent>
                <div>TypeScript</div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiDotnet className="icon text-purple-700" />
              </TooltipTrigger>
              <TooltipContent>
                <div>
                  <div>ASP.NET Core</div>
                  <div>.NET Framework</div>
                </div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaDocker className="icon text-blue-400" />
              </TooltipTrigger>
              <TooltipContent>
                <div>Docker</div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaJenkins className="icon text-green-600" />
              </TooltipTrigger>
              <TooltipContent>
                <div>Jenkins</div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <AiOutlineKubernetes className="icon text-blue-600" />
              </TooltipTrigger>
              <TooltipContent>
                <div>Kubernetes</div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};
