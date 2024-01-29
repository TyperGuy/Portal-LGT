import { SlMenu } from "react-icons/sl";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
} from "@chakra-ui/react";
import { Socialmedia } from "@/app/home/sections/header/data";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export const DrawerWidget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={styles.icon} onClick={() => onOpen()}>
        <SlMenu fontSize="1.3em" />
      </div>
      <Drawer size="sm" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="rgba(0,0,0,.2)" />
        <DrawerContent minH="400px">
          <DrawerCloseButton />
          <DrawerHeader alignItems="center"></DrawerHeader>
          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Flex gap="10px">
              {Socialmedia.map((media) => {
                return (
                  <Link href={media.link} key={media.id} target="_blank">
                    <Flex
                      w="30px"
                      h="30px"
                      border="1.5px solid #A0AEC0"
                      justify="center"
                      bg="#fff"
                      cursor="pointer"
                      align="center"
                      borderRadius="50%"
                      transition="all ease-in-out .3s"
                      _hover={{
                        transform: "scale(1.1)",
                        bg: "#EDF2F7",
                      }}
                    >
                      {media.icon}
                    </Flex>
                  </Link>
                );
              })}
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
