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
          <Heading size="md">{item.name}</Heading>
          <Text color="black.600" fontWeight="bold" fontSize="2xl">
            {item.category}
          </Text>
          {/* <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text> */}
          <Text color="blue.600" fontSize="2xl">
            ${item.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            QUICK BUY
          </Button>
          <NavLink
            to="/cart"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          >
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </NavLink>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CardComp;
