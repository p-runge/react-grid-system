import MainLayout from "./implementation/main-layout";
import SectionA from "./implementation/section-a";
import { GridSystemProvider } from "./hooks/use-grid-system";

function App() {
  const is_narrow = false;
  const columns = is_narrow ? 10 : 12;

  return (
    <GridSystemProvider value={{ columns }}>
      <MainLayout>
        <SectionA />
      </MainLayout>
    </GridSystemProvider>
  );
}

export default App;
