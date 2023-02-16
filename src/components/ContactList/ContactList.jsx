import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/contacts.selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { selectFilter } from 'redux/filter/filter.selectors';

import { ContactItem } from 'components/ContactItem';
import { Loader } from 'components/Loader';

export const ContactList = ({ redirect }) => {
  const contacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="ul" display="flex" gap="10px" mt="15px" flexDirection="column">
      {!isLoading && contacts.length === 0 && filter.length === 0 && (
        <>
          <Text textAlign="center" fontSize="3xl">
            You don't have contacts
          </Text>
          <Box display="flex" justifyContent="center">
            <Button
              as={NavLink}
              to="/contacts"
              onClick={redirect}
              leftIcon={<ArrowBackIcon />}
              colorScheme="yellow"
              variant="solid"
              maxW="150px"
            >
              Back
            </Button>
          </Box>
        </>
      )}
      {isLoading && !error && <Loader />}
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
    </Box>
  );
};

ContactList.propTypes = {
  redirect: PropTypes.func,
};
