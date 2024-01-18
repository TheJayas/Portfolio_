import {Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.

  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box backgroundColor="white"
    textColor="black"
    rounded="2xl"
    paddingBottom={4}>
      <VStack spacing={6}>
        <Image src={imageSrc} alt={title} size="md" rounded="2xl"></Image>
        <Text paddingLeft={2}>
          <VStack spacing={4}>
            <Heading size="md" >{title}</Heading>
            <h1>{description}</h1>
            <HStack spacing={1}>
              <Text fontWeight="bold">
                See more 
              </Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon>
            </HStack>
          </VStack>
        </Text>
      </VStack>
    </Box>
  );
};

export default Card;
 