import { Box, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../style/QuantyBtn.css";

function QuantityBtn({ tcount }) {
  const [count, setCount] = useState(0);

  const Dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    // tcount(count)
  };
  const Inc = () => {
    setCount(count + 1);
    // tcount(count)
  };

  useEffect(() => {
    tcount(count);
  }, [count]);

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
