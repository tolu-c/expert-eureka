import { Box } from "./components/Box";
import { DragBox } from "./components/DragBox";
import { VariantBox } from "./components/VariantBox";

export default function App() {
  return (
    <main className="p-16 flex flex-col gap-10">
      <Box />
      <DragBox />
      <VariantBox />
    </main>
  );
}
