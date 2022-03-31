import styled from '@emotion/styled';

export const CastsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 300px;
  padding-right: 300px;
  margin-top: 50px;
`;

export const CastsItem = styled.li`
  list-style: none;
  width: 250px;
  height: 430px;
  &:not(:nth-of-type(4n)) {
    margin-right: 25px;
  }
  margin-bottom: 20px;
`;
export const ActorPhoto = styled.img`
  width: 250px;
  height: 375px;
  object-fit: cover;
  border-radius: 10px;
`;
export const ActorName = styled.h3`
  text-align: center;
`;

export const InfoTitle = styled.h3`
  margin-top: 50px;
  text-align: center;
  font-style: italic;
`;
