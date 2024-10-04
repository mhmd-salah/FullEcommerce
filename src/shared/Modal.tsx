import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Modal as ChakraModal } from "@chakra-ui/react";
import {  ReactNode } from "react";

interface IProps {
  title: string;
  okText: string;
  cancelText: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => any;
  onOkClick:any;
}

function Modal({
  title,
  okText,
  cancelText,
  children,
  isOpen,
  onClose,
  onOkClick
}: IProps) {
  return (
    <ChakraModal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay backdropFilter={"blur(3px)"} bg={"blackAlpha.600"}/>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            {cancelText}
          </Button>
          <Button colorScheme="blue" onClick={onOkClick}>{okText}</Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
}

export default Modal;
