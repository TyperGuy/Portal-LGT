import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Spotlite } from "@/widgets/spotlite/index";
import { DrawerWidget } from "@/widgets/drawer";
import { categoriesFilters as categories } from "@/constants/navMenu";

export const Header = () => {
  return (
    <Flex
      align="center"
      w="100%"
      gap="40px"
      bg="#fff"
      h="80px"
      justify="center"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
      className={styles.container}
    >
      <div className={styles.innerContainer}>
        <Flex h="100%" align="center" gap="10px">
          {" "}
          <Image alt="" width={270} height={20} src="/assets/minis.png" />
          <div className={styles.navMenu}>
            {categories.map((title, key) => {
              return title !== "Tudo" ? (
                <Text cursor="pointer" key={key} fontSize=".9em">
                  {" "}
                  {title}
                </Text>
              ) : null;
            })}
          </div>
        </Flex>

        <Flex gap="10px" h="100%" align="center">
          <Box className={styles.spotlite}>
            <Spotlite />
          </Box>
          <DrawerWidget />
        </Flex>
      </div>
    </Flex>
  );
};
