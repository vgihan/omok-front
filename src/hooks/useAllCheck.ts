import { useEffect, useState } from "react";

const useOutsideClick = (deps: any[]) => {
  const [isAllCheck, setIsAllCheck] = useState<boolean>(false);

  useEffect(() => {
    if (deps.some((dep) => !dep)) {
      setIsAllCheck(false);
      return;
    }
    setIsAllCheck(true);
  }, [...deps]);

  return isAllCheck;
};

export default useOutsideClick;
