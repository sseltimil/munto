import { useEffect, useState } from "react";

export function useDebounce<T>(val: T, delay = 500) {
  const [debounceValue, setDebounceValue] = useState<T>(val);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(val);
    }, delay);

    return () => clearTimeout(timeout);
  }, [val, delay]);


  return debounceValue;
}