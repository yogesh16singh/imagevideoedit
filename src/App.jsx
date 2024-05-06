import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageMain from "./components/ImageMain";
import VideoMain from "./components/VideoMain";
export default function App() {
  const [active, setActive] = useState("image");
  return (
    <div className="App bg-[#f5f5fa] min-h-screen">
      <Navbar active={active} setActive={setActive} />
      {active == "image" && <ImageMain />}
      {active == "video" && <VideoMain />}
    </div>
  );
}
