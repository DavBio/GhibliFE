import React from 'react';
import {
  Wrapper,
  Title,
  Subtitle,
  ImageDiv,
  DescriptionDiv,
  Text,
  InfoDiv,
  InfoTitle,
  DescriptionTextBox,
} from './FilmCard.styles';
import { FilmCardProps } from './types';

export const FilmCard: React.FC<FilmCardProps> = ({ film, onClick }: FilmCardProps) => {
  const {
    title,
    original_title,
    movie_banner,
    description,
    director,
    producer,
    release_date,
  } = film;

  return (
    <Wrapper onClick={onClick}>
      <Title>{title} </Title>
      <Subtitle> {original_title} </Subtitle>

      <ImageDiv>
        <img src={movie_banner} alt={`${title} movie banner`} />
      </ImageDiv>

      <DescriptionDiv>
        <DescriptionTextBox>{description}</DescriptionTextBox>
      </DescriptionDiv>

      <InfoDiv>
        <InfoTitle>Director: </InfoTitle>
        <Text>{director}</Text>
        <InfoTitle>Producer: </InfoTitle>
        <Text>{producer}</Text>
        <InfoTitle>Release date: </InfoTitle>
        <Text>{release_date}</Text>
      </InfoDiv>
    </Wrapper>
  );
};
