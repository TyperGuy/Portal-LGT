import { Flex } from "@chakra-ui/react";
import HomePage from "./home";

export default function Home() {
  return (
    <main>
      <Flex justify="center" w="100%">
        <HomePage />
      </Flex>
    </main>
  );
}
