import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const GoBackButton = styled.button`
  height: 40px;
  width: 100px;
  &:span {
    color: red;
  }
  font-size: 15px;
  border: none;
  border-radius: 10px;
  background-color: #336600;
  color: white;
  margin-top: 20px;
  margin-left: 20px;

  &:hover {
    background-color: #80ff00;
    color: black;
  }
`;

export const Arrow = styled.span`
  font-size: 20px;
`;

export const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MovieInfo = styled.div`
  width: 650px;
  margin-left: 50px;
`;

export const MoviePoster = styled.img`
  width: 300px;
  height: 500px;
  object-fit: cover;
`;
export const MovieTitle = styled.h2`
  font-size: 30px;
`;

export const MovieOverview = styled.p`
  font-size: 19px;
`;

export const MovieLinks = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
`;

export const OptionLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  background-color: #ccb3ff;
  padding: 8px;
  border-radius: 10px;
  &:first-of-type {
    margin-right: 20px;
  }
  &:hover {
    background-color: #884dff;
  }
  &.active {
    background-color: #7733ff;
  }
`;
