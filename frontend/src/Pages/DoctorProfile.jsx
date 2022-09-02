import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Image,
  Text,
  Flex,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  Tr,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorsData } from "../AppReducer/action";

// const patients = [
//   {
//     id: 1,
//     name: "user1",
//     description: "about the disease",
//   },
//   {
//     id: 1,
//     name: "user1",
//     description: "about the disease",
//   },
//   {
//     id: 1,
//     name: "user1",
//     description: "about the disease",
//   },
//   {
//     id: 1,
//     name: "user1",
//     description: "about the disease",
//   },
//   {
//     id: 1,
//     name: "user1",
//     description: "about the disease",
//   },
// ];
// const doctors = [
//   {
//     id: 1,
//     profileImage: "",
//     name: "john",
//     specilization: "cordiologist",
//     experience: "10 years",
//     queue: "5 patients",
//   },
//   {
//     id: 2,
//     profileImage: "",
//     name: "john",
//     specilization: "cordiologist",
//     experience: "10 years",
//     queue: "5 patients",
//   },
//   {
//     id: 3,
//     profileImage: "",
//     name: "doe",
//     specilization: "dentist",
//     experience: "10 years",
//     queue: "5 patients",
//   },
//   {
//     id: 4,
//     profileImage: "",
//     name: "vikram",
//     specilization: "cordiologist",
//     experience: "10 years",
//     queue: "5 patients",
//   },
//   {
//     id: 5,
//     profileImage: "",
//     name: "rolex",
//     specilization: "Allergist",
//     experience: "10 years",
//     queue: "5 patients",
//   },
//   {
//     id: 6,
//     profileImage: "",
//     name: "vinay",
//     specilization: "Dermatologists",
//     experience: "10 years",
//     queue: "5 patients",
//   },
//   {
//     profileImage: "",
//     name: "nani",
//     specilization: "Endocrinologists",
//     experience: "10 years",
//     queue: "5 patients",
//   },
// ];

export const DoctorProfile = () => {
  const doctors = useSelector((state) => state.app.doctors);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [signleDoctor, setSingleDoctor] = useState({});

  // getting the doctors data while refreshing also
  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(getDoctorsData());
    }
  }, []);

  // finding the doctor using id with useParams
  useEffect(() => {
    if (id) {
      const currentDoctor = doctors.find((doctor) => doctor._id === id);
      currentDoctor && setSingleDoctor(currentDoctor);
    }
  }, [id, doctors]); // while changing the id it should be re-render the single doctor
  return (
    <Container maxW="100%" border="2px solid red">
      <Box border="1px solid green" w="60%" m="auto">
        <Flex>
          <Image src={signleDoctor.profileImage} alt="profile" h="300px" />
          <Box m="auto" textAlign="left" fontSize="20px" fontWeight="bold">
            <Text>Name : {signleDoctor.name}</Text>
            <Text>Specilization : {signleDoctor.specilization}</Text>
            <Text>Experience : {signleDoctor.experience}</Text>
          </Box>
        </Flex>
      </Box>

      {/* <Table border="1px solid red" w="60%" m="auto" mt="10">
        <Thead>
          <Th textAlign="center">ID</Th>
          <Th textAlign="center">name</Th>
          <Th textAlign="center">description</Th>
          <Th textAlign="center">Delete</Th>
        </Thead>
        <Tbody>
          {patients.map((patient) => (
            <Tr>
              <Td textAlign="center">{patient.id}</Td>
              <Td textAlign="center">{patient.name}</Td>
              <Td textAlign="center">{patient.description}</Td>
              <Td textAlign="center">
                <Button>Remove</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table> */}
      
    </Container>
  );
};
