import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 1000px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Item = styled.li`
  padding-top: 10px;
  width: 220px;
  height: 300px;
  text-align: center;
  margin-bottom: 15px;
  color: black;
  border-radius: 20px;
  -webkit-box-shadow: 0px -1px 86px -19px rgba(3, 0, 189, 0.2) inset;
  -moz-box-shadow: 0px -1px 86px -19px rgba(3, 0, 189, 0.2) inset;
  box-shadow: 0px -1px 86px -19px rgba(3, 0, 189, 0.2) inset;

  &:hover {
    -webkit-box-shadow: 0px -1px 86px -19px rgba(3, 0, 189, 1) inset;
    -moz-box-shadow: 0px -1px 86px -19px rgba(3, 0, 189, 1) inset;
    box-shadow: 0px -1px 86px -19px rgba(3, 0, 189, 1) inset;
  }

  &:not(:nth-of-type(4n)) {
    margin-right: 25px;
  }
`;

export const Poster = styled.img`
  border-radius: 20px;
  object-fit: cover;
`;

export const TitleMovie = styled.h4`
  color: balck;
`;
