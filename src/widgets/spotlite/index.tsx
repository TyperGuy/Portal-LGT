"use-client";
import { categoriesFilters as categories } from "@/constants/navMenu";
import { osfunction } from "@/utils/osDetection";
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
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { PiCommandDuotone } from "react-icons/pi";
import styles from "./styles.module.scss";

export const Spotlite = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState("Tudo");
  const [isMacos, setIsmac] = useState(false);
  const [searchParam, setsearchParam] = useState("");
  useEffect(() => {
    setIsmac(osfunction());
  }, []);

  const handleKeyPressed = useCallback((event: KeyboardEvent) => {}, []);
  const handupdateSearchParam = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setsearchParam(searchParam + event.target.value);
  };

  return (
    <>
      <Flex
        borderRadius="50px"
        padding="16px"
        maxWidth="260px"
        onClick={() => onOpen()}
        gap="10px"
        height=" 50px"
        align="center"
        border=" 2px solid #fff"
        cursor="pointer"
        backgroundColor=" #f0f3f7"
        color="rgb(87, 87, 87)"
        transition=" all ease-in-out 0.4s"
        justify="flex-start"
        className={styles.box}
      >
        <BiSearch className={styles.icon} />
        <span className={styles.placeholder}> {"Procurar por algo"}</span>
        <div className={styles.keyboardEvent}>
          {isMacos ? (
            <Flex h="100%" gap="2px" align="center">
              <PiCommandDuotone />
              <Heading size="sm">+ c</Heading>
            </Flex>
          ) : (
            <Heading size="sm">ctr + c</Heading>
          )}
        </div>
      </Flex>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0,0,0,.2)" />
        <ModalContent minH="400px">
          <ModalHeader alignItems="center">
            <Flex borderBottom="2px solid #f1f1f1" p="16px 0" mt="20px">
              <InputGroup display="flex" alignItems="center">
                <InputLeftElement h="100%" pointerEvents="none">
                  <BiSearch className={styles.icon} />
                </InputLeftElement>
                <Input
                  onChange={handupdateSearchParam}
                  variant="unstyled"
                  placeholder="Esqcreva aqui o que procura"
                  size="md"
                />
              </InputGroup>
              <Text
                color="#575757"
                bg="#f0f3f7"
                p="2px 7px"
                borderRadius="5px"
                fontFamily="Open Sans"
                fontWeight="normal"
                fontSize="0.8em"
                cursor="pointer"
                onClick={() => onClose()}
              >
                {"esc"}
              </Text>
            </Flex>

            <Flex w="100%" mb="10px" gap="10px" mt="20px" flexWrap="wrap">
              {categories.map((title, key) => {
                return (
                  <Box
                    key={key}
                    cursor="pointer"
                    p="5px 16px"
                    transition="all ease-in-out .4s"
                    border={`2px solid ${category === title ? "#333" : "#fff"}`}
                    borderRadius="50px"
                    bg={category === title ? "#fff" : "#f0f3f7"}
                    onClick={() => setCategory(title)}
                  >
                    <Text fontSize="0.6em"> {title}</Text>
                  </Box>
                );
              })}
            </Flex>
          </ModalHeader>
          <ModalBody></ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
