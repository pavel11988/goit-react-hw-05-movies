// import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import { Header, NavElement } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header>
        <NavElement to="/">Home</NavElement>
        <NavElement to="/movies">Movies</NavElement>
      </Header>

      <Outlet />
    </>
  );
};

export default Layout;
