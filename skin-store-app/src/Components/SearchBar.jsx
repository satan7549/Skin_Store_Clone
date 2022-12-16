import React, { useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { fetchDataBySearch } from "../data/fetchData";

export const Searchbar = () => {
  const [query, setQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();
  // useEffect(()=>{
  //  fetchDataBySearch(query);
  // },[query])
  return (
    <>
      <SearchIcon fontSize="xl" color="black" onClick={onOpen} />

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent mt="50px" p="10px">
          {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
          <DrawerBody>
            <InputGroup>
              <Input
                type="search"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a product or brand..."
              />
              <InputRightElement
                children={
                  <IconButton
                    aria-label="Search database"
                    bg="none"
                    onClick={() => console.log(query)}
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
