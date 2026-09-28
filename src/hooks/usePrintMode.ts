import { useState, useEffect } from "react";

export const usePrintMode = () => {
  const [isPrint, setIsPrint] = useState(false);

  useEffect(() => {
    const onBefore = () => setIsPrint(true);
    const onAfter = () => setIsPrint(false);

    window.addEventListener("beforeprint", onBefore);
    window.addEventListener("afterprint", onAfter);

    return () => {
      window.removeEventListener("beforeprint", onBefore);
      window.removeEventListener("afterprint", onAfter);
    };
  }, []);

  return isPrint;
};