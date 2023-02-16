import { Box, Container } from '@chakra-ui/react';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      as="header"
      bg="#d2d5ff"
      fontSize="24"
      boxShadow="2px 2px 4px 1px #e0e2ff"
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mr="auto"
        ml="auto"
        p={4}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Box>
  );
};
