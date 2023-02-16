import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';
import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from '@chakra-ui/react';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/contacts.selectors';

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

    if (name.value.trim() === '') {
      setContactName('');
      return toast.warning('Form fields must not be empty', {
        autoClose: 1500,
      });
    }

    if (number.value.trim() === '') {
      setContactNumber('');
      return toast.warning('Form fields must not be empty', {
        autoClose: 1500,
      });
    }

    const contact = {
      id: nanoid(),
      name: name.value,
      number: '+380-' + number.value,
    };

    const contactsInclude = contacts.some(el => el.name === name.value);

    if (contactsInclude) {
      toast.error(`${name.value} is already in contacts`, {
        autoClose: 1500,
      });
      setContactName('');
      setContactNumber(number.value);
      return;
    }

    dispatch(addContact(contact));
    toast.success(`${name.value} add to your contacts`, {
      autoClose: 1500,
    });

    setContactNumber('');
    setContactName('');
  }

  return (
    <>
      <FormControl as="form" onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing="10px">
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            variant="outline"
            value={contactName}
            onChange={handleInputChange}
            w="300px"
          />

          <InputGroup w="300px">
            <InputLeftAddon children="+380" />
            <Input
              type="tel"
              name="number"
              id="number"
              placeholder="Phone number"
              variant="outline"
              value={contactNumber}
              onChange={handleInputChange}
            />
          </InputGroup>

          <Box display="flex" justifyContent="center" w="300px">
            <Button type="submit" maxW="100px" colorScheme="yellow" mt="20px">
              Add contact
            </Button>
          </Box>
        </Stack>
      </FormControl>
    </>
  );
}
