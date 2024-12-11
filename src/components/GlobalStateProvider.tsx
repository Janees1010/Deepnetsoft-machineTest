import { createContext, ReactNode, useState } from "react";
import { InitialMenu } from "../types/types";// Define this type as necessary
import { menuItems } from "../types/types"; // Ensure `menuItems` is a proper TypeScript type

// Define the type for the context value
type Item = {
  description: string;
  menuItems: menuItems[]; // Array of menuItems
};


type GlobalContextType = {
  items: Item; // The structure for your `items`
  setItems: React.Dispatch<React.SetStateAction<Item>>; // Setter for items
  menus: InitialMenu[]; // Add `menus` if you're storing menus in context
  setMenus: React.Dispatch<React.SetStateAction<InitialMenu[]>>; // Setter for menus
};


// Create the context with a default value
export const GlobalContext = createContext<GlobalContextType | null>(null);

// Define the props for the provider
interface GlobalStateProviderProps {
  children: ReactNode; // Allows any valid React children
}

const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Item>({
    description: "", // Initial empty description
    menuItems: [], // Initial empty array for menuItems
  });

  const [menus, setMenus] = useState<InitialMenu[]>([
    {
      _id:'',
      name: "",
      description: "",
    },
  ]);

  return (
    <GlobalContext.Provider value={{ items, setItems, menus, setMenus }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateProvider;
