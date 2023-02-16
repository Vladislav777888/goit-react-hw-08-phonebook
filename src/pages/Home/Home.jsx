import { NavLink } from 'react-router-dom';
import { Box, Button, ButtonGroup, Container, Heading } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { useAuth } from 'hooks';

export default function Home() {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldShown = isLoggedIn && !isRefreshing;

  return (
    <Box as="section" backgroundColor="#f0f3d6">
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxW="500px"
        minHeight={'calc(100vh - 72px)'}
      >
        <Heading textAlign={'center'} mb={8} as={'h1'}>
          {shouldShown
            ? 'Welcome to the Phonebook APP. Try to create your phone book.'
            : 'Welcome to the Phonebook APP. Create a new account or log into your account'}
        </Heading>

        {shouldShown ? (
          <Button
            as={NavLink}
            to="/contacts"
            rightIcon={<ArrowForwardIcon />}
            colorScheme="yellow"
            variant="solid"
          >
            Try it
          </Button>
        ) : (
          <ButtonGroup gap="20px">
            <Button
              as={NavLink}
              rightIcon={<ArrowForwardIcon />}
              colorScheme="yellow"
              to="/register"
            >
              Registration
            </Button>
            <Button
              as={NavLink}
              rightIcon={<ArrowForwardIcon />}
              colorScheme="yellow"
              to="/login"
            >
              Log in
            </Button>
          </ButtonGroup>
        )}
      </Container>
    </Box>
  );
}
