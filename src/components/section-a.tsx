import { useGridSystem } from "../hooks/use-grid-system";
import { cn } from "../utils/cn";

const tiles = [
  { title: "Tile 1", content: "Content 1" },
  { title: "Tile 2", content: "Content 2" },
  { title: "Tile 3", content: "Content 3" },
  { title: "Tile 4", content: "Content 4" },
  { title: "Tile 5", content: "Content 5" },
  { title: "Tile 6", content: "Content 6" },
];

export default function SectionA() {
  const { columns } = useGridSystem();

  return (
    <>
      <div
        className={cn(
          "bg-gray-200 p-4",
          columns === 12 && "col-span-3 md:col-span-6 lg:col-span-12",
          columns === 10 && "col-span-3 md:col-span-6 lg:col-span-10"
        )}
      >
        Always full width
      </div>
      <div
        className={cn(
          "bg-gray-200 p-4",
          columns === 12 && "col-span-3 md:col-span-6 lg:col-span-6",
          columns === 10 && "col-span-3 md:col-span-6 lg:col-span-10"
        )}
      >
        Half width on desktop
      </div>
      <div className="col-span-full bg-gray-200 p-4">Fillter</div>
      {tiles.map((tile, index) => (
        <div
          key={index}
          className={cn(
            "bg-gray-200 p-4",
            columns === 12 && "col-span-3 lg:span-6",
            columns === 10 && "col-span-3 lg:span-5"
          )}
        >
          <h2>{tile.title}</h2>
          <p>{tile.content}</p>
        </div>
      ))}
    </>
  );
}
