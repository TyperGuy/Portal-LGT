"use-client";
import { categoriesFilters as categories } from "@/constants/navMenu";
import { osfunction } from "@/utils/osDetection";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export const Mail = () => {
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

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressed);
  }, [handleKeyPressed]);

  return (
    <>
      <Flex className={styles.report}>
        <Flex
          h="100%"
          w="100%"
          bg="#2b2d31"
          borderRadius="8px"
          cursor="pointer"
          gap="32px"
          p="24px"
          align="center"
          className={styles.reportInnerContainer}
        >
          <Image
            width={100}
            height={100}
            src="/assets/backoffice.jpg"
            className={styles.image}
            alt="Call center image"
          />
          <Box color="#fff" w="100%">
            <Heading size="md">Tenha suporte de especialistas</Heading>
            <Text mt="16px">
              Conte com o apoio de especialistas: tenha acesso a orientações
              personalizadas e conhecimentos especializados para resolver suas
              dúvidas e desafios.
            </Text>
          </Box>
          <Button
            minW="230px"
            minH="46px"
            p="0 32px"
            borderRadius="50px"
            fontWeight="400"
            fontSize=".9rem"
            border="2px solid #fff"
            color="#fff"
            bg="#2b2d31"
            _hover={{
              color: "#2b2d31",
              bg: "#fff",
            }}
            onClick={() => onOpen()}
          >
            Fale com um especialista
          </Button>
        </Flex>
      </Flex>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0,0,0,.2)" />
        <ModalContent minH="400px">
          <ModalHeader
            borderTopRadius="6px"
            bgPosition="center"
            bgSize="cover"
            alignItems="center"
            bgImage="/assets/patterns.png"
            overflow="hide"
          >
            <ModalCloseButton borderRadius="50%" />
            <Flex
              height="100px"
              align="flex-start"
              flexDir="column"
              color="#fff"
              justify="center"
            >
              <Heading>Fale com um especialista</Heading>
              <Text fontWeight="400">
                Envie um email para a nossa equipe de especialistas
              </Text>
            </Flex>
          </ModalHeader>
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Stack p="32px 0" spacing={3}>
              <Box>
                {" "}
                <Text>Nome</Text>
                <Input
                  h="48px"
                  borderWidth="2px"
                  variant="unstyled"
                  placeholder="Escreva aqui o seu nome"
                  pl={4}
                  _focus={{
                    outlineColor: "#2b2d31",
                    borderColor: "#fff",
                  }}
                />
              </Box>
              <Box>
                {" "}
                <Text>Email</Text>
                <Input
                  h="48px"
                  borderWidth="2px"
                  variant="unstyled"
                  placeholder="Escreva aqui o seu email"
                  pl={4}
                  _focus={{
                    outlineColor: "#2b2d31",
                    borderColor: "#fff",
                  }}
                />
              </Box>
              <Box>
                {" "}
                <Text>Número de telefone</Text>
                <Input
                  h="48px"
                  borderWidth="2px"
                  variant="unstyled"
                  placeholder="Escreva aqui o seu telefone"
                  pl={4}
                  _focus={{
                    outlineColor: "#2b2d31",
                    borderColor: "#fff",
                  }}
                />
              </Box>

              <Box>
                {" "}
                <Text>Mensagem</Text>
                <Textarea
                  borderWidth="2px"
                  minH="170px"
                  placeholder="Escreva aqui a tua mensagem"
                  variant="unstyled"
                  pl={4}
                  _focus={{
                    outlineColor: "#2b2d31",
                    borderColor: "#fff",
                  }}
                />
              </Box>
              <Button
                w="100%"
                height="48px"
                mt="16px"
                borderRadius="50px"
                fontWeight="400"
                fontSize=".9rem"
                border="2px solid #fff"
                color="#fff"
                bg="#2b2d31"
                boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
                _hover={{
                  transform: "scale(1.01)",
                }}
              >
                Enviar mensagem
              </Button>
            </Stack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
