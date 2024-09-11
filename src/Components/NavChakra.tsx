import {
  Box,
  Flex,
  Avatar,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  color,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink as RouterLink } from "react-router-dom";
import cookieService from "@/services/cookieService";
import { useAppSelector } from "@/App/Hooks";
import { selectCartProduct } from "@/App/feathers/cartSlice";

interface Props {
  children: React.ReactNode;
}

const Links = ["Products", "Categories", "Team"];

const NavLink = ({ children }: Props) => {
  return (
    <Link
      as={RouterLink}
      to={`/${(children as string).toLowerCase()}`}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Link>
  );
};

export default function NavChakra() {
  const {cartProducts} =  useAppSelector(selectCartProduct)
  const { colorMode, toggleColorMode } = useColorMode();
  const token = cookieService.get("jwt");
  const logoutHandler = () => {
    cookieService.remove("jwt");
    window.location.reload();
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.700")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <RouterLink to={"/"}>Home</RouterLink>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button onClick={()=>{}}>Cart ({cartProducts.length})</Button>

              {token ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>

                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Button as={RouterLink} to={"/login"}>
                  Login
                </Button>
              )}

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
