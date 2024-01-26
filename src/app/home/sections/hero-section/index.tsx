"use client";

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { MdArrowForward } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import { MdPlayCircle } from "react-icons/md";
import Link from "next/link";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll to the section smoothly
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex bgImage="assets/hero-section-image.jpg" className={styles.container}>
      <div className={styles.heroInnerContainer}>
        <Flex
          w="90%"
          flexDir="column"
          justify="center"
          align="center"
          gap="32px"
        >
          <Flex
            h="42px"
            w="280px"
            borderRadius="50px"
            border="1.5px solid #fff"
            bg="#fff"
            p="8px"
            align="center"
            justify="space-between"
            cursor="pointer"
            transition="all ease-in-out .3s"
            _hover={{
              transform: "scale(1.01)",
            }}
          >
            <Flex
              borderRadius="58px"
              align="center"
              justify="center"
              p="4px 8px"
              color="#000"
              className={styles.tag}
            >
              <Text fontWeight="600" fontSize=".8em" color="#fff">
                Denunciar
              </Text>
            </Flex>
            <Text fontSize=".9em">Faça reclamação aqui</Text>
            <MdArrowForward />
          </Flex>
          <Heading textAlign="center" size="3xl" color="#fff" maxWidth="700px">
            Portal da Lei Geral do Trabalho de Angola
          </Heading>
          <Text textAlign="center" color="#fff" maxWidth="500px">
            Explore o Portal da Lei Geral do Trabalho - Seu guia abrangente para
            normas, direitos e regulamentações no mundo do trabalho
          </Text>
          <Flex gap="16px" justify="center" flexWrap="wrap">
            {" "}
            <Button
              height="46px"
              borderRadius="50px"
              fontWeight="400"
              fontSize=".9rem"
              onClick={() => {
                scrollToSection("#seminarios");
              }}
            >
              Ir para os seminários
            </Button>
            <Flex
              height="46px"
              width="170px"
              border="2px solid #fff"
              align="center"
              borderRadius="50px"
              fontWeight="400"
              fontSize=".9rem"
              justify="space-between"
              p="8px"
              cursor="pointer"
            >
              <MdPlayCircle color="#fff" fontSize="30px" />
              <Text color="#fff"> Assistir tutoriais</Text>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};
