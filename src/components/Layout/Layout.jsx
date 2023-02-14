import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AppBar } from 'components/AppBar/AppBar';
import { Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Wrapper>
  );
};
