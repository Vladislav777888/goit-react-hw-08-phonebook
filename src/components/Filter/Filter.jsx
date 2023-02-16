import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import { contactsSearchAction } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filter.selectors';
import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';

export const Filter = () => {
  const contacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(contactsSearchAction(evt.target.value));
  };

  const handleReset = () => {
    dispatch(contactsSearchAction(''));
  };

  return (
    <>
      {(contacts.length > 0 || filter.length > 0) && (
        <>
          <InputGroup>
            <Input
              type="text"
              value={filter}
              onChange={changeFilter}
              placeholder="Find contact by name"
            />
            <InputRightElement width="4.5rem">
              {filter.length > 0 && (
                <Button
                  h="1.75rem"
                  size="sm"
                  variant={'ghost'}
                  onClick={handleReset}
                >
                  <CloseIcon />
                </Button>
              )}
            </InputRightElement>
          </InputGroup>
        </>
      )}
    </>
  );
};
