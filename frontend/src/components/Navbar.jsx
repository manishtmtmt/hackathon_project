import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logoutapi } from "../AuthReducer/action";
import { loadData } from "../hoc/LocalStorage";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = loadData("isAuth");

  const handleLogout = () => {
    dispatch(Logoutapi());
    navigate("/login");
  };

  return (
    <Flex justify={"space-between"} bg="teal.200">
      <Text m="1">Home</Text>
      {!isAuth ? (
        <Flex justifyContent={"space-evenly"}>
          <Link to="/login">
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
          </Link>
          <Link to={"/signup"}>
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
          </Link>
        </Flex>
      ) : (
        <Flex justify={"space-evenly"}>
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
      )}
      {/* <Flex justify={"space-evenly"}>
        <Link to="/login">
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
        </Link>
        <Link to={"/signup"}>
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
        </Link>
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
      </Flex> */}
    </Flex>
  );
};

export default Navbar;
