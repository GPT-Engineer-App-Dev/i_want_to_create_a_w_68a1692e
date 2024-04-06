import React from "react";
import { Box, Button, Flex, Heading, Input, Stack, Text, VStack, Image, SimpleGrid, Radio, RadioGroup, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import { FaMapMarkedAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1">Eventinder</Heading>
        <SimpleGrid columns={2} spacing={4}>
          <Button leftIcon={<FaSignInAlt />} colorScheme="blue">
            Log In
          </Button>
          <Button leftIcon={<FaUserPlus />} colorScheme="green">
            Sign Up
          </Button>
        </SimpleGrid>
      </Flex>

      <VStack spacing={6}>
        <Button colorScheme="teal" size="lg" leftIcon={<FaMapMarkedAlt />}>
          Browse Upcoming Events
        </Button>
        <Text>or</Text>
        <Heading as="h2" size="lg">
          Member Options
        </Heading>
        <Button colorScheme="purple" size="lg">
          Join an Event
        </Button>
        <Button colorScheme="orange" size="lg">
          Create a New Event
        </Button>

        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          <FormControl>
            <FormLabel>Create Your Own Event</FormLabel>
            <Input placeholder="Event Name" mb={3} />
            <Input placeholder="Event Location" mb={3} />
            <Input type="datetime-local" placeholder="Event Date & Time" mb={3} />
            <FormLabel>How many people will participate?</FormLabel>
            <RadioGroup defaultValue="1">
              <Stack spacing={5} direction="row">
                <Radio colorScheme="red" value="1">
                  Alone
                </Radio>
                <Radio colorScheme="green" value="2">
                  With 1 friend
                </Radio>
                <Radio colorScheme="blue" value="3">
                  With 2 friends
                </Radio>
              </Stack>
            </RadioGroup>
            <FormHelperText>Select the number of people including you.</FormHelperText>
            <Button mt={4} colorScheme="pink" isFullWidth>
              Create Event
            </Button>
          </FormControl>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
