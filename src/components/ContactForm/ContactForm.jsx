import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/contacts.selectors';

import {
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledForm,
} from './ContactForm.styled';

export function ContactForm() {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setContactName(value);
        break;

      case 'number':
        setContactNumber(value);
        break;

      default:
        return;
    }
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    const {
      elements: { number, name },
    } = evt.target;

    const contact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    const contactsInclude = contacts.some(el => el.name === name.value);

    if (contactsInclude) {
      toast.error(`${name.value} is already in contacts`);
      setContactName('');
      setContactNumber(number.value);
      return;
    }

    dispatch(addContact(contact));

    setContactNumber('');
    setContactName('');
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            name="name"
            value={contactName}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>

        <StyledLabel>
          Number
          <StyledInput
            type="tel"
            name="number"
            value={contactNumber}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabel>

        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </>
  );
}
