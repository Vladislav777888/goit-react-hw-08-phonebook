import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth.operations';
import { useAuth } from 'hooks';
import { Container, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Container>
  );
};
