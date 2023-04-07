import React, { useContext } from "react";
import {
  Modal,
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  ModalOverlay,
  ModalContent,
  Radio,
  FormHelperText,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  useToast,
  CloseButton,
  Button,
} from "@chakra-ui/react";

import { CartContext } from "../Context/Cart/CartContextProvider";

const OrderCancelModal = (id, name) => {
  const { dispatch } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const cancelOrder = ({ id, name }) => {
    dispatch({
      type: "CANCEL_ORDER",
      payload: id,
    });
    toast({
      title: "Deleted",
      description: `${name} Order Canceled`,
      status: "error",
      duration: 6000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <CloseButton size="md" onClick={onOpen} />
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reason For Cancel</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl as="fieldset">
              <FormLabel
                as="legend"
                style={{
                  marginLeft: "130px",
                  color: "teal",
                  fontSize: "18px",
                }}
              >
                Choose Appropriate Option
              </FormLabel>
              <RadioGroup defaultValue="Itachi">
                <HStack spacing="30px">
                  <Radio value="Sasuke">Already_Ordered</Radio>
                  <Radio value="Nagato">Over_Price</Radio>
                  <Radio value="Itachi">Quality</Radio>
                  <Radio value="Sage of the six Paths">Others</Radio>
                </HStack>
              </RadioGroup>
              <FormHelperText
                style={{
                  marginLeft: "180px",
                  color: "red",
                  fontSize: "15px",
                }}
              >
                Are You Sure 🥱?
              </FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {/* <Link to="/products"> */}
            <Button
              size="lg"
              colorScheme="pink"
              mr={3}
              onClick={() => cancelOrder(id, name)}
            >
              Confirm
            </Button>
            {/* </Link> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrderCancelModal;
