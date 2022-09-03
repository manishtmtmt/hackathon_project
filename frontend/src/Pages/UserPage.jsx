import React, { useEffect } from "react";
import {
  Container,
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorsData } from "../AppReducer/action";

export const UserPage = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.app.doctors); // getting the doctors data from redux store
  const location = useLocation();
  console.log(location)

  useEffect(() => {
    dispatch(getDoctorsData()); // dispatching the doctors data to the store
  }, []);

  return (
    <Container p={5} maxW="100%">
      <Grid gridTemplateColumns="repeat(2,1fr)" w="65%" m="auto" gridGap="20px">
        {doctors.map((doctor) => (
          <Link to={`/doctorprofile/${doctor._id}`} key={doctor._id}>
            <GridItem border="2px solid red">
              <Flex cursor="pointer">
                <Image
                  src={doctor.profileImage}
                  alt="profile"
                  w="150px"
                  h="150px"
                />
                <Box ml="10" lineHeight="30px" textAlign="left">
                  <Text>Name : {doctor.name}</Text>
                  <Text>Specilization : {doctor.specilization}</Text>
                  <Text>Experience : {doctor.experience}</Text>
                </Box>
              </Flex>
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};
