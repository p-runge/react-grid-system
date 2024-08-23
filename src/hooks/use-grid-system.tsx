import { createContext, useContext } from "react";

const GridSystemContext = createContext({
  columns: 12,
} as GridSystem);
type GridSystem = {
  columns: ValidColumns;
};

type ValidColumns = 12 | 10;

export const GridSystemProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: GridSystem;
}) => {
  return (
    <GridSystemContext.Provider value={value}>
      {children}
    </GridSystemContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGridSystem = () => {
  return useContext(GridSystemContext);
};
