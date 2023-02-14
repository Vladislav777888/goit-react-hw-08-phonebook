import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';
import {
  ListItem,
  ContactsText,
  ContactsNumber,
  Button,
} from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem key={id}>
      <ContactsText>{name}:</ContactsText>
      <ContactsNumber>{number}</ContactsNumber>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
