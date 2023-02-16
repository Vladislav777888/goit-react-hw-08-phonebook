import { useDispatch } from 'react-redux';
import { Avatar, Button, Stack, Text } from '@chakra-ui/react';
import { toast } from 'react-toastify';

import { logOut } from 'redux/auth/auth.operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
    toast.warning('You are logged out of your account', {
      autoClose: 1500,
    });
  };

  return (
    <>
      <Stack direction={'row'} spacing="20px" alignItems={'center'}>
        <Avatar justifyContent={'center'} boxSize={31} bg={'green.400'} />
        <Text color="red" fontWeight="bold">{`Welcome, ${user.name}`}</Text>
        <Button colorScheme="yellow" variant="solid" onClick={handleLogOut}>
          Log out
        </Button>
      </Stack>
    </>
  );
};
