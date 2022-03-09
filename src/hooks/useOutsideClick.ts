import { useEffect, useState } from "react";

const useOutsideClick = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleOutsideClick = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    document.getElementById("root")!.addEventListener("mousedown", handleOutsideClick);
  }, []);

  return { isClicked, setIsClicked };
};

export default useOutsideClick;
