import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); 
  };

  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg={"#f6f7f8"}
    >
      <Heading
        display="inline-block"
        as="h1"
        size="4xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="2xl" mt={3} mb={2}>
        الصفحة غير موجودة
      </Text>
      <Text color="gray.500" mb={6}>
        الصفحة التي تبحث عنها غير متاحة حالياً
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        onClick={goHome}
      >
        العودة إلى الصفحة الرئيسية
      </Button>
    </Box>
  );
};

export default NotFoundPage;
