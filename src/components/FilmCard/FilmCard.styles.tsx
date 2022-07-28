import styled, { css, keyframes } from 'styled-components';

const shadowDrop = keyframes`
0% {
  -webkit-transform: translateZ(0);
          transform: translateZ(0);
  -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
}
100% {
  -webkit-transform: translateZ(50px);
          transform: translateZ(50px);
  -webkit-box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35), 0 12px 20px -12px rgba(0, 0, 0, 0.35);
          box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35), 0 12px 20px -12px rgba(0, 0, 0, 0.35);
}
`;

export const Wrapper = styled.div`
  width: 350px;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 1rem 2rem 0;
  background: rgb(250, 235, 215);
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    ${css`
      background: rgb(255, 224, 184);
      -webkit-animation: ${shadowDrop} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      animation: ${shadowDrop} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
  }
`;
export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`;
export const Subtitle = styled.div`
  font-size: 0.5rem;
  font-weight: 300;
`;
export const ImageDiv = styled.div`
  margin: 0.5rem 0;
  img {
    width: 350px;
    border-radius: 5px;
  }
`;
export const DescriptionDiv = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0;
`;
export const DescriptionTextBox = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  white-space: initial;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  height: 128px;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoTitle = styled.div`
  margin-top: 0.5rem;
  font-weight: 700;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
`;
