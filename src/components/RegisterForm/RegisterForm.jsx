import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';

import { register } from 'redux/auth/auth.operations';
import { selectAuthStatus } from 'redux/auth/auth.selectors';

import { STATUS } from 'constants';
import { Loader } from 'components/Loader';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector(selectAuthStatus);

  const handleClick = () => setShow(!show);

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    const { name, email, password } = evt.currentTarget;

    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    try {
      await dispatch(register(newUser)).unwrap();
      setName('');
      setEmail('');
      setPassword('');
      toast.success('Success', {
        autoClose: 1500,
      });
    } catch {
      toast.error('This email already exists or the password is invalid', {
        autoClose: 1500,
      });
    }
  };

  return (
    <>
      {status === STATUS.loading && <Loader />}
      <FormControl as="form" onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing="10px">
          <Input
            type="text"
            name="name"
            value={name}
            id="name"
            placeholder="Name"
            variant="outline"
            onChange={handleInputChange}
          />

          <Input
            type="email"
            name="email"
            value={email}
            id="email"
            placeholder="Email"
            variant="outline"
            onChange={handleInputChange}
          />

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              name="password"
              value={password}
              id="password"
              placeholder="Password"
              variant="outline"
              onChange={handleInputChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Box display="flex" justifyContent="center">
            <Button maxW="100px" colorScheme="yellow" mt="20px" type="submit">
              Register
            </Button>
          </Box>
        </Stack>
      </FormControl>
    </>
  );
};
