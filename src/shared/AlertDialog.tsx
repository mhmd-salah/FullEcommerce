import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React from "react";

export default function CustomAlertDialog({
  isOpen,
  onOpen,
  onClose,
  title,
  desc,
  cancelTxt = "cancel",
  okTxt = "Ok"
}: {
  isOpen: any;
  onOpen: any;
  onClose: any;
  title:string;
  desc:string;
  cancelTxt:string;
  okTxt:string;
}) {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button onClick={onOpen}>Discard</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay backdropBlur={88}/>

        <AlertDialogContent>
          <AlertDialogHeader>{title}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            {desc}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {cancelTxt}
            </Button>
            <Button colorScheme="red" ml={3}>
              {okTxt}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
