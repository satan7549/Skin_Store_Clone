import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  CloseButton,
} from "@chakra-ui/react";
import { useState } from "react";

export const Searchbar = () => {
    const [text,setText]=useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <SearchIcon color="black" onClick={onOpen} />

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent mt={20} p="10px" >
          {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
          <DrawerBody>
            <InputGroup>
              <Input type="search" onChange={(e)=>setText(e.target.value)} placeholder="Search for a product or brand..." />
              <InputRightElement
                children={
                  <IconButton
                    aria-label="Search database"
                    bg="none"
                    onClick={()=>console.log(text)}
                    icon={<SearchIcon />}
                  />
                }
              />
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
