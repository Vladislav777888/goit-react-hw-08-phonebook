import { Stack, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Stack direction="row" spacing="15px" alignItems="center">
      <Link
        as={NavLink}
        px={4}
        py={2}
        borderRadius="15px"
        _hover={{ bg: '#f08282', color: '#fff' }}
        _activeLink={{ bg: '#f08282', color: '#fff' }}
        to="/register"
      >
        Register
      </Link>

      <Link
        as={NavLink}
        px={4}
        py={2}
        borderRadius="15px"
        _hover={{ bg: '#f08282', color: '#fff' }}
        _activeLink={{ bg: '#f08282', color: '#fff' }}
        to="/login"
      >
        Log in
      </Link>
    </Stack>
  );
};
