import { useGridSystem } from "../hooks/use-grid-system";
import { cn } from "../utils/cn";

const GridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
      <InnerGridContainer>{children}</InnerGridContainer>
    </div>
  );
};

export default GridContainer;

const InnerGridContainer = ({ children }: { children: React.ReactNode }) => {
  const { columns } = useGridSystem();

  return (
    <div
      className={cn(
        "grid col-span-3 md:col-span-6 grid-cols-3 md:grid-cols-6 gap-4",
        // span over all columns
        columns === 12 && "lg:col-span-12 lg:grid-cols-12",
        // span over the middle 10 columns
        columns === 10 && "lg:col-span-10 lg:grid-cols-10 lg:col-start-2"
      )}
    >
      {children}
    </div>
  );
};
