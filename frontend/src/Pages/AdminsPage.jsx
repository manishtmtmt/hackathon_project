import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPatientQueueLength,
  singleDoctor,
  updateStatus,
} from "../AppReducer/action";
import { loadData } from "../hoc/LocalStorage";

const AdminsPage = () => {
  const { username, role } = useSelector((state) => state.login);
  const { singledoc } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const { queue } = useSelector((state) => state.app);

  useEffect(() => {
    let email = loadData("email");
    dispatch(singleDoctor(email));
  }, []);

  useEffect(() => {
    if(queue.length === 0) {
      dispatch(getPatientQueueLength(singledoc._id));
    }
  }, [dispatch, queue.length]);

  return (
    <>
      <Flex>
        <Box w="20rem" border="1px" m="4" h="20rem">
          <Image
            src={singledoc.profileImage}
            rounded={"md"}
            w="20rem"
            alt="profileImage"
          />
        </Box>
        <Box m="4" textAlign="start">
          <Box>
            <Text fontSize="4xl" as="b">
              Name: {singledoc.name}
            </Text>
          </Box>
          <Box textAlign="start" mt="4">
            <Text fontSize="2xl" as="b" textAlign={"start"}>
              Experience: {singledoc.experience}
            </Text>
          </Box>
          <Box textAlign="start" mt="4">
            <Text fontSize="2xl" as="b">
              Specialization: {singledoc.specilization}
            </Text>
          </Box>
          <Box textAlign="start" mt="6" fontSize="2xl" as="mark">
            <Link to={`/schedule`}>Check Todays Appointment</Link>
          </Box>
        </Box>
      </Flex>
      
    </>
  );
};

export default AdminsPage;
