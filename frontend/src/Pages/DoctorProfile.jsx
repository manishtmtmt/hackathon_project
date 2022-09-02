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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bookAppointment, getDoctorsData } from "../AppReducer/action";
import BookAppoitment from "../components/BookAppoitment";
import { loadData } from "../hoc/LocalStorage";

export const DoctorProfile = () => {
  let email = loadData("email");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [specilization, setSpecilization] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const doctors = useSelector((state) => state.app.doctors);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [signleDoctor, setSingleDoctor] = useState({});
  const [patient, setPatient] = useState({
    email,
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const currentDoctor = doctors.find((doctor) => doctor._id === id);
    setPatient({ ...patient, specilization: currentDoctor.specilization });
    const callback = (x) => {
      console.log(x);
    };

    callback(patient);
    // console.log(signleDoctor.specilization);
    // setSpecilization(signleDoctor.specilization);
    // console.log(specilization);
    // dispatch(bookAppointment(patient));
  };

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
      <Button onClick={onOpen}>Book Appointment</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book an Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Patient name</FormLabel>
              <Input
                placeholder="Patient name"
                name="patientname"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Book
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
