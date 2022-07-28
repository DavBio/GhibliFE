import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 27px 1px #000;
  padding: 1rem;
  background: antiquewhite;
`;

export const Arrow = styled.div<{ position: 'left' | 'right' }>`
  cursor: pointer;
  ${({ position }) => position === 'right' && 'transform: rotate(180deg)'};

  img {
    width: 20px;
    height: 20px;
  }
`;
export const NumberDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
`;
export const NumberButton = styled.div`
  cursor: pointer;
  :hover {
    text-decoration: underline;
    font-weight: 800;
  }
`;
