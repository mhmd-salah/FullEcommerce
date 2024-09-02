import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isUsername, setIsUsername] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // handler 
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name,value} = e.target;
    setUser({...user,[name]:value})
  };

  const submitHandler= (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user)
  };
  return (
    <Flex
      minH={"90vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          {/* <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Text color={"teal.400"}>features</Text> ✌️
          </Text> */}
        </Stack>
        <Box
          as="form"
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          onSubmit={submitHandler}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                focusBorderColor="teal.400"
                value={user.email}
                onChange={changeHandler}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  focusBorderColor="teal.400"
                  value={user.password}
                  onChange={changeHandler}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox colorScheme="teal">Remember me</Checkbox>
                <Text color={"teal.400"}>Forgot password?</Text>
              </Stack>
              <Button
                bg={"teal.400"}
                color={"white"}
                _hover={{
                  bg: "teal.500",
                }}
                type="submit"
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
