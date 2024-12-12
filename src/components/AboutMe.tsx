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
    <div>
      <div className="text-xl font-bold">About Me</div>
      <div className="flex flex-row items-center space-x-4">
        <img
          src="pfp.jpg"
          alt="Profile Picture"
          className="rounded-full border-2 border-gray-300 w-32 h-32"
        />
        <p className="text-sm mt-2">
          I'm a software engineer who enjoys solving complex problems and
          continuously learning throughout that process. I have experience
          building full-stack applications, encompassing everything from DevOps
          to domain design, as well as developing desktop applications using the
          .NET Framework. I thrive in collaborative environments and embrace
          challenges as huge opportunities for growth. Outside of work, I enjoy
          lifting heavy weights, going on long runs, playing chess, as well as
          experimenting with unfamiliar technologies.
        </p>
      </div>
      <div className="px-3 py-1">
        <div className="font-semibold text-left">Favorite Technologies:</div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2">
          <TooltipProvider>
            <div className="flex justify-center items-center">
              <Tooltip>
                <TooltipTrigger>
                  <SiDotnet className="text-purple-700" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-center">
                    <div>ASP.NET Core</div>
                    <div>.NET Framework</div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex justify-center items-center">
              <Tooltip>
                <TooltipTrigger>
                  <FaDocker className="text-blue-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-center">Docker</div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex justify-center items-center">
              <Tooltip>
                <TooltipTrigger>
                  <FaJenkins className="text-red-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-center">Jenkins</div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex justify-center items-center">
              <Tooltip>
                <TooltipTrigger>
                  <AiOutlineKubernetes className="text-blue-600" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-center">Kubernetes</div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex justify-center items-center">
              <Tooltip>
                <TooltipTrigger>
                  <FaReact className="text-blue-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-center">React</div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex justify-center items-center">
              <Tooltip>
                <TooltipTrigger>
                  <SiTypescript className="text-blue-700" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-center">TypeScript</div>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};
