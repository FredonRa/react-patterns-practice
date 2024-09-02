import { useEffect, useState } from "react";
import { Item } from "./IItem";

export const useHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const data: Item[] = [];

    setIsLoading(true);
    try {
      setIsLoading(false);
    } catch (err) {
        /* Catch error */
    } finally {
      setIsLoading(true);
    }

  useEffect(() => {
    /* Make API petition */
    return () => {
        /* Make return function for unmount component */
    };
  }, []);

  return { data, isLoading };
}