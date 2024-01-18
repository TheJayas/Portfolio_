import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: shivam181106@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/TheJayas",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/shivam-jaiswal-54088a266/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={9}>
            {
              socials.map(function(props){
                return(
                  <a href={props.url}><FontAwesomeIcon icon={props.icon} size="2x"/></a>
                )})
            }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {<a href="/#contactme-section " onClick={handleClick("contactme")}>Contact Me</a>}
              {<a href="/#projects-section" onClick={handleClick("projects")}>Projects</a>}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
