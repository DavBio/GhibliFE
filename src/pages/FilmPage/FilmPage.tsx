import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components';
import { Film } from '../../types/film';
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
  const [loading, setLoading] = React.useState<boolean>(false);
  const [film, setFilm] = React.useState<Film>({
    _id: '',
    title: '',
    original_title: '',
    movie_banner: '',
    description: '',
    director: '',
    producer: '',
    release_date: '',
  });

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://ghibli-be.herokuapp.com/film/${params.filmId}`)
      .then((response) => {
        if (response.data.data.film) {
          setFilm(response.data.data.film);
        }
        setLoading(false);
      });
  }, [params.filmId]);

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
        <Title>{film.title} </Title>
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
