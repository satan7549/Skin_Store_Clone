import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Stack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context/Cart/CartContextProvider";

const CardComp = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <Card maxW="xs" boxShadow="base">
      <NavLink to={`/products/${item.id}`} >
      <CardBody>
        <Image
          src={item.image_link}
          alt={item.id}
          borderRadius="lg"
          margin="auto"
          width="100%"
          height="300px"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md"> {item.name}</Heading>
          <Text color="black.600" fontWeight="bold" fontSize="2xl">
            {item.category}
          </Text>
          <Text color="blue.600" fontSize="2xl">
          ${item.price}
          </Text>
        </Stack>
      </CardBody>
      </NavLink>
      <Divider />
      <CardFooter>
        <Button
          width="100%"
          p="-1"
          borderRadius="none"
          colorScheme="black"
          _hover={{ bg: "black", color: "white" }}
          variant="outline"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComp;
