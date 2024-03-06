import React from "react";
import { Box, Flex, Text, VStack, HStack, Image, Button, Link, Heading, Container, Divider, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={6}>
        {/* Hero Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">
            William Taft
          </Heading>
          <Text mt={4} fontSize="lg" color="gray.600">
            Software Engineer | React Specialist | Tech Enthusiast
          </Text>
        </Box>

        {/* Profile Picture */}
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1582219284795-a816567988b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxXaWxsaWFtJTIwVGFmdHxlbnwwfHx8fDE3MDk3NDM1NjR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="William Taft" />

        {/* About Section */}
        <VStack spacing={3} textAlign="center">
          <Heading as="h2" size="xl">
            About Me
          </Heading>
          <Text fontSize="md" color="gray.600">
            I'm a passionate Software Engineer with a love for building beautiful and functional web applications. With a deep knowledge of React and modern web technologies, I create seamless user experiences that are both intuitive and engaging.
          </Text>
        </VStack>

        {/* Skills Section */}
        <Box w="full">
          <Heading as="h3" size="lg" textAlign="center" mb={4}>
            Skills
          </Heading>
          <HStack spacing={4} justifyContent="center">
            <Button leftIcon={<FaUser />} colorScheme="teal" variant="solid">
              React
            </Button>
            <Button leftIcon={<FaUser />} colorScheme="teal" variant="solid">
              JavaScript
            </Button>
            <Button leftIcon={<FaUser />} colorScheme="teal" variant="solid">
              HTML & CSS
            </Button>
          </HStack>
        </Box>

        {/* Contact Section */}
        <VStack spacing={3} textAlign="center" mt={10}>
          <Heading as="h4" size="lg">
            Get In Touch
          </Heading>
          <Flex justify="center" mt={4}>
            <Link href="mailto:william.taft@example.com" isExternal>
              <Button colorScheme="blue" leftIcon={<FaEnvelope />} mr={2}>
                Email
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/williamtaft" isExternal>
              <Button colorScheme="blue" leftIcon={<FaLinkedin />} mr={2}>
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/williamtaft" isExternal>
              <Button colorScheme="blue" leftIcon={<FaGithub />}>
                GitHub
              </Button>
            </Link>
          </Flex>
        </VStack>

        <Divider my={10} />

        {/* Footer */}
        <Box textAlign="center" py={5}>
          <Text fontSize="sm" color="gray.600">
            &copy; {new Date().getFullYear()} William Taft. All rights reserved.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
