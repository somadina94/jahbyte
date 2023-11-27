import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../main/Header';
import Social from '../main/Social';
import Footer from '../main/Footer';
import Stack from '../main/Stack';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Social />
      <Stack />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
