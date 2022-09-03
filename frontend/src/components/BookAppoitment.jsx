import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { loadData } from "../hoc/LocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { bookAppointment } from "../AppReducer/action";

const BookAppoitment = ({Specilization}) => {
    const doctors = useSelector((state) => state.app.doctors);
    console.log(doctors)
    let val = Specilization
    const dispatch = useDispatch();
    let email = loadData("email")
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(Specilization)
  const [patient, setPatient] = useState({
    email,
    completed: false,
    Specilization: val
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  


  const handleSubmit = () => {
    // console.log(patient)
    // dispatch(bookAppointment(patient))
  }

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
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
    </>
  );
};

export default BookAppoitment;
