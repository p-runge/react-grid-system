import Footer from "./footer";
import GridContainer from "../components/grid-container";
import Header from "./header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col text-shadow-normal">
      <Header />
      <main className="bg-gray-300 py-4 flex-grow">
        <GridContainer>{children}</GridContainer>
      </main>
      <Footer />
    </div>
  );
}
