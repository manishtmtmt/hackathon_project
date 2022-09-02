import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Logoutapi } from "../AuthReducer/action";

const Navbar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(Logoutapi())
    }

  return (
    <Flex justify={"space-between"} bg="teal.200">
      <Text m="1">Home</Text>
      <Flex justify={"space-evenly"}>
        <Text
          m="1"
          
          _hover={{
            textDecoration: "none",
            color: "white",
            bg: "",
            cursor: "pointer",
          }}
        >
          {" "}
          Login
        </Text>
        <Text
          m="1"
          ml="3"
          _hover={{
            textDecoration: "none",
            color: "white",
            bg: "",
            cursor: "pointer",
          }}
        >
          Signup
        </Text>
        <Text
          m="1"
          ml="3"
          _hover={{
            textDecoration: "none",
            color: "white",
            bg: "",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        >
          Logout
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
