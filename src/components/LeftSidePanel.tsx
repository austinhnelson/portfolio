import { ResizablePanel } from "./ui/resizable";
import { Separator } from "./ui/separator";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const LeftSidePanel = () => {
  return (
    <ResizablePanel
      defaultSize={25}
      className="left-side-panel flex flex-col text-left p-20"
    >
      <div className="text-7xl">
        Hello,
        <br />
        I'm Austin.
      </div>
      <div className="text-3xl pt-10">
        <br />
        Take a look around and get to know me.
      </div>
      <Separator className="my-4" />
      <div className="text-section text-muted-foreground">About Me</div>
      <div className="text-section text-muted-foreground">Experience</div>
      <div className="text-section text-muted-foreground">Projects</div>
      <div className="flex pt-4 flex-row space-x-6 text-4xl mt-auto">
        <a
          href="https://www.linkedin.com/in/austinhnelson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-inherit"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/austinhnelson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-inherit"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="mailto:nelsonhaustin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-inherit"
        >
          <IoIosMail className="icon" />
        </a>
      </div>
    </ResizablePanel>
  );
};
