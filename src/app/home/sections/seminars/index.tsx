"use Client";

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { FcDocument } from "react-icons/fc";
import styles from "./styles.module.scss";
import { SeminarCard } from "./seminar.card";
import { seminarType, contentfullResponseType } from "./seminars.types";
import { useHomePageContext } from "../..";

const objectives = [
  {
    id: 1,
    title: "Seminário mensal sobre enquadramento legal da LGT",
    subtitle:
      " Documentos acessiveis a todos. Baixe de forma prática e simples a nova lei geral do trabalho.",
    ico: FcDocument,
  },
  {
    id: 1,
    title: "Seminário mensal sobre enquadramento legal da LGT",
    subtitle:
      " Documentos acessiveis a todos. Baixe de forma prática e simples a nova lei geral do trabalho.",
    ico: FcDocument,
  },
];

export const Seminars = async () => {
  const data = useHomePageContext() as contentfullResponseType[];

  console.log("Vamos ver a data no filho: ", data[0].fields);
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
          {data.map((seminar) => {
            console.log("O que tem aqui ?" + data);
            return (
              <SeminarCard
                key={seminar.fields.title}
                seminar={seminar.fields}
              />
            );
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
        <Button
          height="46px"
          bg="#E2E8F0"
          borderRadius="50px"
          fontWeight="400"
          fontSize=".9rem"
          alignSelf="center"
          rightIcon={<BiChevronRight fontSize="1.5em" />}
          onClick={() => {}}
        >
          Ver todos
        </Button>
      </Flex>
    </Flex>
  );
};
