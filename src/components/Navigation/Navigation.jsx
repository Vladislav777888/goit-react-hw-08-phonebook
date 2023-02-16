import { Link, Stack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Stack as="ul" direction="row" spacing="15px">
        <li>
          <Link
            as={NavLink}
            px={4}
            py={2}
            borderRadius="15px"
            _hover={{ bg: '#f08282', color: '#fff' }}
            _activeLink={{ bg: '#f08282', color: '#fff' }}
            to={'/'}
          >
            Home
          </Link>
        </li>
        <li>
          {isLoggedIn && (
            <Link
              as={NavLink}
              px={4}
              py={2}
              borderRadius="15px"
              _hover={{ bg: '#f08282', color: '#fff' }}
              _activeLink={{ bg: '#f08282', color: '#fff' }}
              to={'/contacts'}
            >
              Contacts
            </Link>
          )}
        </li>
      </Stack>
    </nav>
  );
};
