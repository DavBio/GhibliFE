import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-flow: wrap;
  padding: 5rem;
`;

export const PopulateDB = styled.div`
  border: 1px solid black;
  padding: 2rem;
  cursor: pointer;
`;

export const LoadingDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;
