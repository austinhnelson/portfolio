import { useState } from "react";
import "./App.css";
import { LeftSidePanel } from "./components/LeftSidePanel";
import { RightSidePanel } from "./components/RightSidePanel";
import {
  ResizableHandle,
  ResizablePanelGroup,
} from "./components/ui/resizable";

export type Section = "about-me" | "projects" | "experience" | null;

function App() {
  const [activeSelection, setActiveSelection] = useState<Section>(null);

  return (
    <div className="w-full h-screen">
      <ResizablePanelGroup direction="horizontal">
        <LeftSidePanel
          activeSelection={activeSelection}
          setActiveSelection={setActiveSelection}
        />
        <ResizableHandle withHandle />
        <RightSidePanel activeSelection={activeSelection} />
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
