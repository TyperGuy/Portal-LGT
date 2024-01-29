"use client";
import { FC, createContext, useContext } from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "./sections/header";
import { HeroSection } from "./sections/hero-section";
import { Objectives } from "./sections/objectives";
import { Seminars } from "./sections/seminars";
import { Footer } from "./sections/footer";
import { Providers } from "../providers/providers";
import {
  contentfullResponseType,
  seminarType,
} from "./sections/seminars/seminars.types";

const HomePageContext = createContext({} as any);

const HomePage: FC<{ data: contentfullResponseType[] }> = ({ data }) => {
  console.log("Vamos ver o que temos aqui:", data);

  return (
    <Providers>
      <HomePageContext.Provider value={data}>
        <Flex align="center" w="100%" flexDir="column">
          <Header />
          <HeroSection />
          <Seminars />
          <Objectives />
          <Footer />
        </Flex>
      </HomePageContext.Provider>
    </Providers>
  );
};
export default HomePage;

export const useHomePageContext = () => useContext(HomePageContext);
