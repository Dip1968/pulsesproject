import React from "react";
import { Modal } from "react-bootstrap";

interface Props {
  show?: any;
  onHide?: any;
  children?: any;
  className?: any;
}

const SYPopup: React.FC<Props> = ({
  show,
  onHide,
  children,
  className
}) => {
  return (
    <>
      <Modal className={className} show={show} onHide={onHide}>
        {children}
      </Modal>
    </>
  );
};

export default SYPopup;