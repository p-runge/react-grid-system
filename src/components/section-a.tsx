export default function SectionA() {
  const tiles = [
    { title: "Tile 1", content: "Content 1" },
    { title: "Tile 2", content: "Content 2" },
    { title: "Tile 3", content: "Content 3" },
    { title: "Tile 4", content: "Content 4" },
    { title: "Tile 5", content: "Content 5" },
    { title: "Tile 6", content: "Content 6" },
  ];

  return (
    <>
      {tiles.map((tile, index) => (
        <div key={index} className="col-span-4 bg-gray-200 p-4">
          <h2>{tile.title}</h2>
          <p>{tile.content}</p>
        </div>
      ))}
    </>
  );
}
