import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts.selectors';
import { Box } from 'components/Box';
import { NotFound } from 'components/NotFound';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <Box px={20} pt={10}>
        <h1>Phonebook</h1>
        <ContactForm />

        {error && <NotFound />}
        {!error && (
          <Box mt={20}>
            <h2>Contacts</h2>
            <Filter />
            {isLoading && !error && <Loader />}
            <ContactList />
          </Box>
        )}
      </Box>
    </>
  );
}
