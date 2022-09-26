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
  border: 0.0625rem solid black;
  padding: 0.875rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  background: #f8f8ff;
  border-radius: 0.625rem;
  height: 22%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  :hover {
    background: #f0f8ff;
  }
`;

export const LoadingDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;
