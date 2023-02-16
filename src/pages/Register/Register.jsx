import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@chakra-ui/react';

import { RegisterForm } from 'components/RegisterForm';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Box as="section">
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxW="350px"
          py="6"
        >
          <RegisterForm />
        </Container>
      </Box>
    </>
  );
}
