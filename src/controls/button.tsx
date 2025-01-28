import React from "react";
import Button from 'react-bootstrap/Button';

interface Props {
  children?: any;
  className?: any;
}

const SYButton: React.FC<Props> = ({
  children,
  className
}) => {
  return (
    <>
      <Button className={className}>
        {children}
      </Button>
    </>
  );
};

export default SYButton;