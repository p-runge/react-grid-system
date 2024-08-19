import GridContainer from "./components/grid-container";

function App() {
  return (
    <GridContainer>
      <header className="col-span-12 bg-gray-200 p-4">Header</header>
      <aside className="col-span-3 bg-gray-100 p-4">Sidebar</aside>
      <main className="col-span-9 bg-gray-300 p-4">Content</main>
      <footer className="col-span-12 bg-gray-200 p-4">Footer</footer>
    </GridContainer>
  );
}

export default App;
