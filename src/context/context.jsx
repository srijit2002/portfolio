import { useContext, createContext,useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isInsideALink, setIsInsideALink] = useState(false);
  return (
    <AppContext.Provider value={{ isInsideALink, setIsInsideALink }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext=()=>useContext(AppContext);