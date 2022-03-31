import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  font-size: 18x;
  background-color: rgb(0, 50, 100);
  height: 40px;
  width: 100%;
  padding-top: 21px;
  border-radius: 10px;
  text-align: center;
`;

export const NavElement = styled(NavLink)`
  color: white;
  margin-left: 30px;
  padding: 10px;
  border-radius: 15px;
  text-decoration: none;
  &.active {
    color: white;
    border: 1px solid blue;
    background-color: forestgreen;
  }
`;
