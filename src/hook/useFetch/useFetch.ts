import { useContext, useEffect } from "react";
import { FetchContext } from "../useFetchContext/FetchContext.tsx";
interface useFetchProps<T> {
  fetching: () => Promise<T>;
  interval: {
    timer: number;
    active: boolean;
  };
  revalidationTabs: boolean;
  key: string;
}

export const useFetch = <T>({
  fetching,
  interval,
  revalidationTabs,
  key,
}: useFetchProps<T>) => {
  const context = useContext(FetchContext);
  useEffect(() => {
    context?.getData(fetching, key);
    if (revalidationTabs) {
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          context?.getData(fetching, key);
        }
      });
    }
    if (interval.active) {
      const timer = setInterval(() => {
        context?.getData(fetching, key);
      }, interval.timer);
      return () => clearInterval(timer);
    }
  }, []);
  const data = (context?.data[key] as T) || ([] as T);
  return {
    data,
  };
};
