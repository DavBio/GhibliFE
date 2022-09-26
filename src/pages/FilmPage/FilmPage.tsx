import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components';
import { useFilm } from '../../utils/useFilm';
import {
  Description,
  ImageDiv,
  Title,
  Content,
  Wrapper,
  BackButton,
  LoadingDiv,
} from './FilmPage.styles';

export const FilmPage = () => {
  let params = useParams();
  const navigate = useNavigate();
  const { loading, film } = useFilm(params.filmId);

  return (
    <Wrapper>
      <Header />
      <Content>
        <BackButton onClick={() => navigate(-1)}>
          <img
            src="/icons/ios-arrow-back-logo-icon-png-svg.png"
            alt="previous page"
          />{' '}
          Back
        </BackButton>
        {loading && <LoadingDiv>...Loading</LoadingDiv>}
        <Title data-testid="FilmPage-Title">{film.title} </Title>
        <ImageDiv>
          {!loading && (
            <img src={film.movie_banner} alt={`${film.title} movie banner`} />
          )}
        </ImageDiv>
        <Description>{film.description}</Description>
      </Content>
    </Wrapper>
  );
};
