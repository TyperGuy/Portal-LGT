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
  UnorderedList,
} from "@chakra-ui/react";
import styles from "./styles.module.scss";
import { FC } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import Image from "next/image";
import { seminarType } from "./seminars.types";
import Link from "next/link";

interface PropsType {
  key: string;
  seminar: seminarType;
}
export const SeminarCard: FC<PropsType> = ({ key, seminar }) => {
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
            bgImage={seminar.cover.fields.file.url}
            w="100%"
            h="400px"
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
            bgImage={seminar.cover.fields.file.url}
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
            <Heading>{seminar.title}</Heading>
            <Flex h="60px" bg="#fff" mt="16px" borderRadius="12px" gap="16px">
              <Flex
                h="40px"
                gap="8px"
                align="center"
                borderRadius="6px"
                bg="#f0f3f7"
                p="8px"
              >
                <Image
                  width={16}
                  height={16}
                  src="/icon/calendar-tick.svg"
                  alt=""
                />
                <Text fontSize=".8em">
                  {new Date(seminar.date).getDate() +
                    "-" +
                    new Date(seminar.date).getMonth() +
                    "-" +
                    new Date(seminar.date).getFullYear()}
                </Text>
              </Flex>
              <Flex
                h="40px"
                gap="8px"
                align="center"
                borderRadius="6px"
                bg="#f0f3f7"
                p="8px"
              >
                <Image width={16} height={16} src="/icon/timer.svg" alt="" />
                <Text fontSize=".8em">{seminar.time}</Text>
              </Flex>
              <Flex
                h="40px"
                gap="8px"
                align="center"
                borderRadius="6px"
                bg="#f0f3f7"
                p="8px"
              >
                <Image width={16} height={16} src="/icon/location.svg" alt="" />
                <Text fontSize=".8em">{seminar.address}</Text>
              </Flex>
            </Flex>
            <Heading size="md" mt="16px">
              Objectivos da formação
            </Heading>
            <Flex color="#333" flexDir="column" gap="10px" mt="10px">
              <OrderedList spacing={3}>
                {seminar.objectives.map((objective) => {
                  return <ListItem key={objective}>{objective}</ListItem>;
                })}
              </OrderedList>
            </Flex>
            <Divider m="32px 0" />
            <Heading size="md">Publico alvo</Heading>
            <Flex color="#333" flexDir="column" gap="10px" mt="10px">
              <UnorderedList spacing={3}>
                {seminar.targetAudience.map((target) => {
                  return <ListItem key={target}>{target}</ListItem>;
                })}
              </UnorderedList>
            </Flex>
            <Flex w="100%" justify="flex-end">
              <Link
                target="blank"
                href={
                  seminar.program != undefined
                    ? seminar.program.fields.file.url
                    : ""
                }
              >
                {" "}
                <Flex
                  height="46px"
                  border="2px solid #fff"
                  align="center"
                  borderRadius="50px"
                  fontWeight="400"
                  fontSize=".9rem"
                  p="8px 12px"
                  cursor="pointer"
                  bg="#333"
                  mt="64px"
                  justify="center"
                >
                  <IoDocumentTextOutline color="#fff" fontSize="16px" />
                  <Text ml="8px" justifySelf="center" color="#fff">
                    Ver programa
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
