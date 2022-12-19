import { Box, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import "../style/QuantyBtn.css";

function QuantityBtn() {
  const [count, setCount] = useState(0);

  const Dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    
  };
  const Inc = () => {
    setCount(count + 1);
    
  };

  return (
    <Box className="qtyBtn">
      <Button colorScheme="teal" variant="solid" onClick={Dec}>
        -
      </Button>
      <Text as="h1">{count}</Text>
      <Button colorScheme="teal" variant="solid" onClick={Inc}>
        +
      </Button>
    </Box>
  );
}

export default QuantityBtn;
