import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
`;

export const BackButton = styled.a`
  margin: 2rem 0;
  cursor: pointer;
  font-weight: 700;
  align-self: flex-start;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
export const ImageDiv = styled.div`
  margin: 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
    border-radius: 5px;
  }
`;

export const Description = styled.div`
  font-size: 1.25rem;
  margin-top: 0.625rem;
`;

export const LoadingDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;
