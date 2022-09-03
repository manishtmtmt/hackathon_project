import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../AuthReducer/action";
import { saveData } from "../hoc/LocalStorage";

export default function Login() {
  const [form, Setform] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, role } = useSelector((state) => state.login);

  const handleChange = (e) => {
    let { name, value } = e.target;
    Setform({
      ...form,
      [name]: value,
    });
  };

  const handleClick = () => {
    console.log(form);
    saveData("email", form.email);
    dispatch(loginApi(form));
  };

  if (isAuth && role == "doctor") {
    navigate("/adminpage");
  } else if (isAuth && role == "user") {
    navigate("/userpage");
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                {/* <Link color={'blue.400'}>Forgot password?</Link> */}
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleClick}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={2}>
              <Text align={"center"}>
                Does not have an account?{" "}
                <Link onClick={()=>navigate("/signup")}>
                  <span style={{ color: "blue" }}>Create one</span>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
