import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  text-align: center;
`;

export const InfoTitle = styled.h3`
  margin-top: 50px;
  text-align: center;
  font-style: italic;
`;

export const SearchForm = styled.form`
  text-align: center;
`;

export const QueryInput = styled.input`
  height: 35px;
  width: 220px;
  font-size: 16px;
  padding-left: 10px;
  padding-right: 5px;
`;

export const SearchInput = styled.input`
  height: 35px;
  width: 90px;
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  background-color: #4d4dff;
  color: white;
  &:hover {
    background-color: #0000b3;
  }
  padding: 0;
  margin-bottom: 30px;
`;

export const MovieList = styled.ul`
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
  width: 220px;
  height: 300px;
  text-align: center;
  margin-bottom: 15px;
  text-decoration: none;
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

export const Item = styled.li`
  padding-top: 10px;
  width: 220px;
  height: 300px;
`;

export const Poster = styled.img`
  border-radius: 20px;
  object-fit: cover;
  width: 150px;
  height: 225px;
`;

export const TitleMovie = styled.h4`
  color: balck;
`;
