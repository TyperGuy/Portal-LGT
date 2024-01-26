import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  useDisclosure,
  Text,
  ListItem,
  Divider,
  OrderedList,
} from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { FC } from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import Image from "next/image";

const Objectives = [
  "Proceder a apresentação da nova Lei e harmonizar a interpretação das inovações/medidas,reformas introduzidas na Lei n.° 12/23, de 27 de Dezembro - Lei Geral do Trabalho;",
  "Destacar as principais inovações/medidas de reforma a introduzi-las;",
  "Clarificar a ratio legis dos diferentes princípios e normas respeitantes, ao actual Regime da Relação Jurídico-Laboral;",
  "Reforçar os conhecimentos no domínio das várias garantias dos trabalhadores e dos empregadores,sejam elas graciosas ou contenciosas;",
  "Incentivar e promover o cumprimento das normas da Lei Geral do Trabalho.",
];

interface PropsType {
  key: number;
}
export const SeminarCard: FC<PropsType> = ({ key }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        key={key}
        flexDir="column"
        borderRadius="12px"
        backdropFilter="blur(10px)"
        cursor="pointer"
        transition="all ease-in-out .3s"
        gap="8px"
        boxShadow=" rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
        w="100%"
        _hover={{
          borderColor: "#171923",
          transform: "scale(1.02)",
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
        onClick={() => onOpen()}
      >
        <Skeleton isLoaded={true} borderRadius="8px">
          <Box
            className={styles.seminarCover}
            bgImage="/seminarios/seminario.jpeg"
            w="100%"
            h="500px"
            borderRadius="8px"
          ></Box>
        </Skeleton>
      </Flex>
      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0,0,0,.4)" />
        <ModalContent minH="400px">
          <ModalHeader
            borderTopRadius="6px"
            bgPosition="center"
            bgSize="cover"
            alignItems="center"
            bgImage="/seminarios/hero.jpg"
            overflow="hide"
            borderBottom="4px solid #4299E1"
          >
            <ModalCloseButton borderRadius="50%" />
            <Flex
              height="400px"
              align="flex-start"
              flexDir="column"
              color="#fff"
              justify="center"
            ></Flex>
          </ModalHeader>
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            color="#333"
            pt="20px"
          >
            <Heading>Formação para jornalistas</Heading>
            <Flex h="60px" bg="#fff" mt="16px" borderRadius="12px" gap="16px">
              <Flex
                h="40px"
                gap="8px"
                align="center"
                borderRadius="50px"
                bg="#f0f3f7"
                p="8px"
              >
                <Image
                  width={17}
                  height={17}
                  src="/icon/calendar-tick.svg"
                  alt=""
                />
                <Text fontSize=".9em">29 - Janeiro - 2024</Text>
              </Flex>
              <Flex
                h="40px"
                gap="8px"
                align="center"
                borderRadius="50px"
                bg="#f0f3f7"
                p="8px"
              >
                <Image width={17} height={17} src="/icon/timer.svg" alt="" />
                <Text fontSize=".9em">09h00</Text>
              </Flex>
              <Flex
                h="40px"
                gap="8px"
                align="center"
                borderRadius="50px"
                bg="#f0f3f7"
                p="8px"
              >
                <Image width={17} height={17} src="/icon/location.svg" alt="" />
                <Text fontSize=".9em">Ed. MAPTSS, Piso 3</Text>
              </Flex>
            </Flex>
            <Heading size="md" mt="16px">
              Objectivos da formação
            </Heading>
            <Flex color="#333" flexDir="column" gap="10px" mt="10px">
              <OrderedList spacing={3}>
                {Objectives.map((objective) => {
                  return <ListItem key={objective}>{objective}</ListItem>;
                })}
              </OrderedList>
            </Flex>
            <Divider m="32px 0" />
            <Heading size="md">Publico alvo</Heading>
            <Text>Jornalistas de órgãos públicos e privados</Text>
            <Flex w="100%" justify="flex-end">
              <Flex
                height="46px"
                width="180px"
                border="2px solid #fff"
                align="center"
                borderRadius="50px"
                fontWeight="400"
                fontSize=".9rem"
                p="8px"
                cursor="pointer"
                bg="#333"
                mt="64px"
              >
                <IoMdArrowRoundDown color="#fff" fontSize="25px" />
                <Text ml="8px" justifySelf="center" color="#fff">
                  {" "}
                  Baixar programa
                </Text>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
