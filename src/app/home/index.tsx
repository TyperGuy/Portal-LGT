"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Header } from "./sections/header";

import { HeroSection } from "./sections/hero-section";

import { Objectives } from "./sections/objectives";
import { Seminars } from "./sections/seminars";
import { Footer } from "./sections/footer";

export default function HomePage() {
  return (
    <Flex align="center" w="100%" flexDir="column">
      <Header />
      <HeroSection />
      <Seminars />
      <Objectives />
      <Footer />
    </Flex>
  );
}
