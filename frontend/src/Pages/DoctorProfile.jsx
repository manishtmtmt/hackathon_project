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
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  bookAppointment,
  getDoctorsData,
  getPatientQueueLength,
} from "../AppReducer/action";
import BookAppoitment from "../components/BookAppoitment";
import { loadData } from "../hoc/LocalStorage";

export const DoctorProfile = () => {
  const toast = useToast();
  let email = loadData("email");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [specilization, setSpecilization] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const doctors = useSelector((state) => state.app.doctors);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [signleDoctor, setSingleDoctor] = useState({});
  const [noOfPatient, setNoOfPatient] = useState(0);
  const [patient, setPatient] = useState({
    email,
    completed: false,
  });
  const { queue, patients } = useSelector((state) => state.app);
  console.log(queue, patients);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // toast({
    //   title: "Booking successful",
    //   position: "top",
    //   isClosable: true,
    // })
    dispatch(bookAppointment(id, patient));
    onClose();
    window.location.reload();
  };

  const queueVal = () => {
    let no = 0;
    queue.map((ele, i) => {
      if (ele.email === email) {
        no = i + 1;
      }
    });
    return no;
  };

  useEffect(() => {}, [queue.length]);

  // getting the doctors data while refreshing also
  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(getDoctorsData());
    }
  }, []);

  useEffect(() => {
    dispatch(getPatientQueueLength(id));
  }, [dispatch, queue.length]);

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
            <Text>Patients in Queue : {queue.length}</Text>
          </Box>
        </Flex>
      </Box>
      {/* <Button onClick={onOpen}>Book Appointment</Button> */}
      {/* <Text m={2}>Your number is {queueVal()}</Text> */}
      {queueVal() === 0 ? (
        <Button onClick={onOpen}>Book Appointment</Button>
      ) : (
        <Text m={2}>Your number is {queueVal()}</Text>
      )}
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

      
    </Container>
  );
};
