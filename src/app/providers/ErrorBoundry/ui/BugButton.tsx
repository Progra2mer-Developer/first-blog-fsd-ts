import React, { useEffect, useState } from "react";
import Button from "shared/ui/Button/Button";

interface IBugButtonProps {}

const BugButton: React.FC<IBugButtonProps> = (props) => {
  const [error, setError] = useState(false);
  const toggleThrow = () => {
    setError(true);
  };
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={toggleThrow}>throw error</Button>;
};

export default BugButton;
