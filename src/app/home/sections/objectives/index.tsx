import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FcFinePrint } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import styles from "./styles.module.scss";
import { Mail } from "@/widgets/mail";

const objectives = [
  {
    id: 1,
    title: "Documentos acessiveis",
    subtitle:
      " Documentos acessiveis a todos. Baixe de forma prática e simples a nova lei geral do trabalho.",
    ico: FcDocument,
  },
  {
    id: 2,
    title: "Pesquisa simplificada",
    subtitle:
      "Encontre de forma rápida a informação que precisa. A clareza, acessibilidade e coezão dos é tida como prioridade",
    ico: FcFinePrint,
  },
  {
    id: 3,
    title: "Fale com especialistas",
    subtitle:
      "Tenha um atendimento guiado para esclarecimentos de dúvidas e ajuda na compreensão da nova lei geral do trabalho",
    ico: FcCollaboration,
  },
];

export const Objectives = () => {
  return (
    <Flex w="90%" maxWidth="1200px" p="128px 0" gap="48px" flexDir="column">
      <Flex flexDir="column" gap="8px">
        <Heading fontSize="45px">Uma lei justa para todos</Heading>
        <Text maxW="700px">
          {" "}
          Informe-se, compreenda seus direitos e mantenha-se atualizado com as
          últimas mudanças legais que impactam sua carreira e ambiente
          profissional
        </Text>
      </Flex>
      <Flex width="100%" gap="16px" className={styles.cardContainer}>
        {objectives.map((objective) => {
          return (
            <Flex
              key={objective.id}
              width="100%"
              height="350px"
              flexDir="column"
              border="2px solid #A0AEC0"
              borderRadius="12px"
              backdropFilter="blur(10px)"
              p="24px"
              justify="space-between"
              cursor="pointer"
              transition="all ease-in-out .3s"
              _hover={{
                borderColor: "#171923",
                transform: "scale(1.02)",
                boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
              }}
            >
              {<objective.ico fontSize="3em" />}
              <Box>
                <Heading size="md">{objective.title}</Heading>
                <Text mt="16px">{objective.subtitle}</Text>
              </Box>
              <IoArrowForwardCircle
                fontSize="2em"
                style={{
                  alignSelf: "flex-end",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  borderRadius: "50%",
                }}
              />
            </Flex>
          );
        })}
      </Flex>
      <Mail />
    </Flex>
  );
};
