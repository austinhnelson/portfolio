import "./App.css";
import { LeftSidePanel } from "./components/LeftSidePanel";
import { RightSidePanel } from "./components/RightSidePanel";
import {
  ResizableHandle,
  ResizablePanelGroup,
} from "./components/ui/resizable";

function App() {
  return (
    <div className="w-full h-screen">
      <ResizablePanelGroup direction="horizontal">
        <LeftSidePanel />
        <ResizableHandle withHandle />
        <RightSidePanel />
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
