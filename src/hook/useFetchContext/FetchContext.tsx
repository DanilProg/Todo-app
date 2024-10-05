import { createContext, ReactNode, useRef, useState } from "react";
type Data = Record<string, unknown>;
interface ContextType {
  data: Data;
  setItems: (items: (prevContext: Data) => Data) => void;
  getData: (fetching: () => Promise<unknown>, key: string) => Promise<void>;
}
export const FetchContext = createContext<ContextType | null>(null);

export const FetchProvider = ({ children }: { children: ReactNode }) => {
  const keyStatus = useRef<Record<string, "pending" | "fullfiled">>({});
  const [items, setItems] = useState<Data>({});
  const getData = async (fetching: () => Promise<unknown>, key: string) => {
    if (keyStatus.current[key] !== "pending") {
      keyStatus.current = { [key]: "pending" };
      const res = await fetching();
      setItems((prevContext) => ({
        ...prevContext,
        [key]: res,
      }));
    }
  };
  return (
    <FetchContext.Provider value={{ data: items, setItems, getData }}>
      {children}
    </FetchContext.Provider>
  );
};
