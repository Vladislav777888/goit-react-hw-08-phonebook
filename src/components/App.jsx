import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Box } from './Box';

import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Loader } from './Loader';
import { NotFound } from './NotFound/NotFound';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
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

      <ToastContainer />
    </Box>
  );
}
