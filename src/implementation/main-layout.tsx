import Footer from "./footer";
import GridContainer from "../components/grid-container";
import Header from "./header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Header />
      <main className="bg-gray-300 py-4 flex-grow overflow-y-auto">
        <GridContainer>{children}</GridContainer>
      </main>
      <Footer />
    </div>
  );
}
