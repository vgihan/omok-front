import React, { useEffect, useState } from "react";

const useOutsideClick = (ref: React.RefObject<HTMLElement>) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleOutsideClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
  }, []);

  return { isClicked, setIsClicked };
};

export default useOutsideClick;
