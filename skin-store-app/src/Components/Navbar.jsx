import React from "react";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/navbar.css";
import { Button, Input, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    // <div className="nav"  >
    <>
      {/* <Button ref={btnRef}  color="teal" onClick={onOpen}> */}
      <FontAwesomeIcon className="headerIcons" ref={btnRef}  color="teal" onClick={onOpen} icon={faBars} />
      {/* open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
        border="1px solid red"
        
      >
        <DrawerOverlay />
        <DrawerContent  >
          <DrawerCloseButton  />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      
      {/* <Link to="/">
        <FontAwesomeIcon className="headerIcons" icon={faBars} />
      </Link> */}
      {/* <Link to="/">search</Link>
      <Link to="/">Home</Link>
      <Link to="/">Home</Link> */}
      </>
    // </div>
  );
};
