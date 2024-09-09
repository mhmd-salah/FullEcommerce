import { selectLogin, userLogin } from "@/App/feathers/loginSlice";
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
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();
  const {loading,data,error} = useSelector(selectLogin)
  console.log(data)
  const [user, setUser] = useState({
    identifier: "",
    password: "",
  });
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // handler
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // const validateInput=(input:string)=>{
  //   if(!input){
  //     `set${input.toLowerCase()}`
  //   }
  // }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.identifier && !user.password) {
      setIsEmail(true);
      setIsPassword(true);
      return;
    }
    if (!user.identifier) {
      setIsEmail(true);
      return;
    } else setIsEmail(false);
    if (!user.password) {
      setIsPassword(true);
    } else setIsPassword(false);

    dispatch(userLogin(user));
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
                name="identifier"
                type="email"
                focusBorderColor={isPassword ? "red.600" : "teal.400"}
                value={user.identifier}
                isInvalid={isEmail}
                onChange={changeHandler}
              />
              {isEmail ? (
                <FormHelperText color="red.300">
                  Enter Your Email
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  focusBorderColor={isPassword ? "red.600" : "teal.400"}
                  value={user.password}
                  isInvalid={isPassword}
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
              {isPassword ? (
                <FormHelperText color="red.300">Enter Your Pass</FormHelperText>
              ) : null}
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
                bg={isEmail || isPassword ? "red.500" : "teal.400"}
                color={"white"}
                _hover={{
                  bg: isEmail || isPassword ? "red.600" : "teal.400",
                }}
                type="submit"
                isLoading={loading}
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
