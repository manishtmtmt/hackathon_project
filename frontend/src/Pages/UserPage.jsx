import React from "react";
import {
  Container,
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";

const doctors = [
  {
    profileImage: "",
    name: "john",
    specilization: "cordiologist",
    experience: "10 years",
    queue: "5 patients",
  },
  {
    profileImage: "",
    name: "john",
    specilization: "cordiologist",
    experience: "10 years",
    queue: "5 patients",
  },
  {
    profileImage: "",
    name: "doe",
    specilization: "dentist",
    experience: "10 years",
    queue: "5 patients",
  },
  {
    profileImage: "",
    name: "vikram",
    specilization: "cordiologist",
    experience: "10 years",
    queue: "5 patients",
  },
  {
    profileImage: "",
    name: "rolex",
    specilization: "Allergist",
    experience: "10 years",
    queue: "5 patients",
  },
  {
    profileImage: "",
    name: "vinay",
    specilization: "Dermatologists",
    experience: "10 years",
    queue: "5 patients",
  },
  {
    profileImage: "",
    name: "nani",
    specilization: "Endocrinologists",
    experience: "10 years",
    queue: "5 patients",
  },
];
export const UserPage = () => {
  return (
    <Container border="2px solid red" maxW="100%">
      <Grid gridTemplateColumns="repeat(2,1fr)" w="65%" m="auto" gridGap="20px">
        {doctors.map((doctor) => (
          <GridItem border="2px solid red">
            <Flex cursor="pointer">
              <Image
                src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                alt="profile"
                w="150px"
                h="150px"
              />
              <Box m="auto" lineHeight="30px" textAlign="left">
                <Text>Name : {doctor.name}</Text>
                <Text>Specilization : {doctor.specilization}</Text>
                <Text>Experience : {doctor.experience}</Text>
                <Text>Patients in Queue : {doctor.queue}</Text>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};