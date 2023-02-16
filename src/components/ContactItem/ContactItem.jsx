import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Link, Stack, Text } from '@chakra-ui/react';

import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Stack direction={'row'} spacing="20px" alignItems={'center'} as="li">
      <Avatar
        justifyContent={'center'}
        boxSize="20px"
        bg={'green.400'}
        _hover={{ bg: '#f08282' }}
      />
      <Text color="red" fontWeight="bold" ml="30px" w="500px">
        {name}:{' '}
        <Link href="tel:+{number} " color="teal.500">
          {number}
        </Link>
      </Text>
      <Button
        colorScheme="yellow"
        variant="solid"
        onClick={handleDelete}
        h="25px"
      >
        Delete
      </Button>
    </Stack>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
