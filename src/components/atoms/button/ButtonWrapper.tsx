import { MouseEventHandler, PropsWithChildren } from "react";

interface Props {
  offModal: MouseEventHandler;
}

const ModalOff: React.FC<PropsWithChildren<Props>> = ({ offModal, children }: PropsWithChildren<Props>) => {
  return <div onClick={offModal}>{children}</div>;
};

export default ModalOff;
