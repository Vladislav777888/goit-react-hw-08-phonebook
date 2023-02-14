import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import {
  ListItem,
  ContactsText,
  ContactsNumber,
  Button,
} from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem key={id}>
      <ContactsText>{name}:</ContactsText>
      <ContactsNumber>{phone}</ContactsNumber>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
