const GridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
      {children}
    </div>
  );
};

export default GridContainer;
