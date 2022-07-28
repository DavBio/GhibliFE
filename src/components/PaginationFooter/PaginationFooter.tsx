import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Arrow,
  Container,
  NumberButton,
  NumberDiv,
} from './PaginationFooter.styles';
import { PaginationFooterProps } from './types';

export const PaginationFooter: React.FC<PaginationFooterProps>  = ({
  pageCount,
  current,
  hasNext,
  hasPrevious,
}: PaginationFooterProps) => {
  const navigate = useNavigate();
  const arr = Array.from(Array(pageCount + 1).keys()).slice(1);
  return (
    <Container>
      {hasPrevious && (
        <Arrow position={'left'} onClick={() => navigate(`/${current - 1}`)}>
          <img src="/icons/ios-arrow-back-logo-icon-png-svg.png" alt='previous page' />
        </Arrow>
      )}
      <NumberDiv>
        {arr.map((n) => {
          return (
            <NumberButton onClick={() => navigate(`/${n}`)}>{n}</NumberButton>
          );
        })}
      </NumberDiv>
      {hasNext && (
        <Arrow position={'right'} onClick={() => navigate(`/${current + 1}`)}>
          <img src="/icons/ios-arrow-back-logo-icon-png-svg.png" alt='next page' />
        </Arrow>
      )}
    </Container>
  );
};
