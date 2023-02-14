import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';

import { ContactItem } from 'components/ContactItem';
import { Box } from '../Box';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <Box mt={10} ml={30} as="ul">
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </Box>
  );
};
