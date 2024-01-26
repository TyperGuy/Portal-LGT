import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import { Socialmedia } from "../header/data";

export const Footer = () => {
  return (
    <Box as="footer" bg="#2b2d31" color="white" p="64px 0" w="100%">
      <Container maxW="1200px">
        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
          gap="24px"
        >
          {/* Coluna 1 - Logotipo e Descrição */}
          <Box>
            {/* Adicione seu logotipo aqui */}
            <Image
              alt=""
              width={270}
              height={20}
              src="/assets/thumbs-logo-maptss-white.png"
            />
            <Text mt="16px" maxW="330px">
              Seu guia abrangente para normas, direitos e regulamentações no
              mundo do trabalho
            </Text>
          </Box>

          {/* Coluna 2 - Navegação */}

          <VStack align="flex-start" w="200px">
            <Heading size="md" fontWeight="bold" mb="2">
              Navegação
            </Heading>
            <Link>Documentos</Link>
            <Link>Notícias</Link>
            <Link>Seminários</Link>
          </VStack>

          {/* Coluna 3 - Links Úteis */}
          <VStack align="flex-start" w="200px">
            <Heading size="md" fontWeight="bold" mb="2">
              Links úteis
            </Heading>
            <Link>MAPTSS</Link>
            <Link>INQ</Link>
            <Link>IGT</Link>
          </VStack>

          {/* Coluna 4 - Redes Sociais */}
          <VStack align="flex-start" w="200px">
            <Heading size="md" fontWeight="bold" mb="2">
              Redes Sociais
            </Heading>
            <Flex gap="16px">
              {" "}
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
          </VStack>
        </Flex>
        <Flex w="100%" mt={10} justify="center">
          {" "}
          <Text color="rgba(255,255,255,.7)" fontSize=".9em">
            © Copyright 2024 | Ministério da Administração Pública Trabalho e
            Segurança Social - MAPTSS
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
