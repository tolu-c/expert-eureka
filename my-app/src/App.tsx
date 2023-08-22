import { AnimateBox } from "./components/Animation";
import { Box } from "./components/Box";
import { DragBox } from "./components/DragBox";
import { KeyFrameBox } from "./components/KeyFrameBox";
import { VariantBox } from "./components/VariantBox";

export default function App() {
  return (
    <main className="p-16 flex flex-col gap-10">
      <KeyFrameBox />
      <Box />
      <DragBox />
      <VariantBox />
      <AnimateBox />
    </main>
  );
}
