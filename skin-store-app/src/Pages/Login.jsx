import {
  Button,
  Center,
  Container,
  FormControl,
  Heading,
  Input,
  VStack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { loginFailureAction, loginSucessAction } from "../Context/Action";
import { AuthContext } from "../Context/AuthContextProvider";

export const getToken = (loginDetails) => {
  return axios({
    method: "POST",
    url: `https://reqres.in/api/login`,
    data: loginDetails,
  });
};

const initState = {
  email: "",
  password: "",
};

export const Login = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [loginDetails, setLoginDetails] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLogin = () => {
    getToken(loginDetails)
      .then((res) => {
        console.log(res.data.token);
        dispatch(loginSucessAction(res.data.token));
      })
      .catch(() => {
        dispatch(loginFailureAction());
      });
  };

  if (state.isAuth) {
    return <Navigate to="/" />;
  }
  if (state.isError) {
    return (
      <Container
        width={{
          base: "full",
          sm: "full",
          md: "container.xl",
          lg: "container.lg",
        }}
        centerContent={true}
      >
        <Alert
          status="error"
          py={{ base: 4, sm: 4, md: 4, lg: 6 }}
          my={{ base: 24, sm: 24, md: 28, lg: 40 }}
          px={{ base: 1, sm: 1, md: 4, lg: 6 }}
        >
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>Somthing Went Wrong.</AlertDescription>
        </Alert>
      </Container>
    );
  }

  const { email, password } = loginDetails;
  return (
    <Container
      width={{
        base: "full",
        sm: "full",
        md: "container.xl",
        lg: "container.lg",
      }}
      centerContent={true}
    >
      <VStack
        width="full"
        boxShadow="lg"
        py={{ base: 4, sm: 4, md: 4, lg: 6 }}
        my={{ base: 24, sm: 24, md: 28, lg: 40 }}
        px={{ base: 2, sm: 1, md: 4, lg: 6 }}
      >
        <FormControl p={2}>
          <Heading
            fontWeight="bolder"
            alignItems="left"
            fontSize="20px"
            mt="-20px"
            mb="20px"
          >
            Existing Customers
          </Heading>
          <Input
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            borderRadius="none"
          />
        </FormControl>
        <FormControl p={2}>
          <Input
            name="password"
            value={password}
            onChange={handleChange}
            pr="4.5rem"
            type="password"
            placeholder="Enter password"
            borderRadius="none"
          />
        </FormControl>
        <FormControl>
          <Text _hover={{ textDecoration: "underline" }}>
            Forgot Password ?{" "}
          </Text>
        </FormControl>
        <FormControl>
          <Center>
            <Button
              width="full"
              p={4}
              borderRadius="none"
              colorScheme="black"
              bg="black"
              color="white"
              _hover={{
                bg: "teal.300",
                color: "white",
                textDecoration: "underline",
              }}
              variant="outline"
              mt={4}
              onClick={handleLogin}
              isLoading={state.isLoading}
            >
              SIGN IN
            </Button>
          </Center>
        </FormControl>
        <FormControl p={2}>
          <Heading
            fontWeight="bolder"
            alignItems="left"
            fontSize="20px"
            mt="10px"
            mb="20px"
          >
            New User
          </Heading>
          <Center>
            <Button
              width="full"
              p={4}
              borderRadius="none"
              colorScheme="black"
              bg="black"
              color="white"
              _hover={{
                bg: "teal.300",
                color: "white",
                textDecoration: "underline",
              }}
              variant="outline"
              mt={4}
              // onClick={handleLogin}
              // isLoading={state.isLoading}
            >
              REGISTER
            </Button>
          </Center>
        </FormControl>
      </VStack>
    </Container>
  );
};
