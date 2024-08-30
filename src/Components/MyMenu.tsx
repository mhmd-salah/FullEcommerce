import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MyMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button}   
      rightIcon={<ChevronDownIcon/>}
      bg={"teal"} opacity={.9} color={"white"} _hover={{
        opacity:1
      }}
      _active={{
        background: "teal",
      }}>
        More
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MyMenu;
