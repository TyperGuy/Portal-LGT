"use client";

import { Box, Skeleton, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FcFinePrint } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import styles from "./styles.module.scss";
import { SeminarCard } from "./seminar.card";

const objectives = [
  {
    id: 1,
    title: "Seminário mensal sobre enquadramento legal da LGT",
    subtitle:
      " Documentos acessiveis a todos. Baixe de forma prática e simples a nova lei geral do trabalho.",
    ico: FcDocument,
  },
];

export const Seminars = () => {
  return (
    <Flex id="#seminarios" w="100%" justify="center" bg="#f0f3f7">
      <Flex w="90%" maxWidth="1200px" p="128px 0" gap="48px" flexDir="column">
        <Flex flexDir="column" gap="8px">
          <Heading fontSize="45px">Seminários e formações</Heading>
          <Text maxW="700px">
            {" "}
            Explore nossa variedade de seminários e formações especializadas,
            projetadas para aprimorar seus conhecimentos.
          </Text>
        </Flex>
        <Flex width="100%" gap="32px" className={styles.seminarMainContainer}>
          {objectives.map((objective) => {
            return <SeminarCard key={objective.id} />;
          })}
        </Flex>
        {/*
        <Flex>
          <IoArrowForwardCircle
            fontSize="46px"
            cursor="pointer"
            style={{ transform: "rotate(-180deg)" }}
          />
          <IoArrowForwardCircle fontSize="46px" cursor="pointer" />
        </Flex>
        */}
      </Flex>
    </Flex>
  );
};
