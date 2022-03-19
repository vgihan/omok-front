import reactDom from "react-dom";

const Portal: React.FC = ({ children }) => {
  const el = document.getElementById("portal")!;
  return reactDom.createPortal(children, el);
};

export default Portal;
