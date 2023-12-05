import React from "react";

interface ContextProps {
  width: number;
}
const ScreenWidthContext = React.createContext<ContextProps>({ width: 0 });

export const useScreenWidth = () => React.useContext(ScreenWidthContext);

interface ProviderProps {
  children: React.ReactNode;
}
export default function ScreenWidthProvider({ children }: ProviderProps) {
  const [width, setWidth] = React.useState(() =>
    window ? window?.innerWidth : 0
  );
  React.useEffect(() => {
    if (window) {
      const widthListener = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", widthListener);
      return () => window.removeEventListener("resize", widthListener);
    }
  }, []);
  return (
    <ScreenWidthContext.Provider value={{ width }}>
      {children}
    </ScreenWidthContext.Provider>
  );
}
