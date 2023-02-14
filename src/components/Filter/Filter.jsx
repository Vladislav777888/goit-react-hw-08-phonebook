import { useDispatch, useSelector } from 'react-redux';

import { contactsSearchAction } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filter.selectors';

import { Box } from '../Box';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(contactsSearchAction(evt.target.value));
  };

  return (
    <Box mt={10}>
      <Label>
        Find contacts by name
        <Input type="text" value={filter} onChange={changeFilter} />
      </Label>
    </Box>
  );
};
