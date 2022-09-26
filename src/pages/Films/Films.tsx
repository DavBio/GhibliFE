import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header, FilmCard, PaginationFooter } from '../../components';
import { apiURL } from '../../constants/apiUrl';
import { Film } from '../../types/film';
import { PaginationParams } from '../../types/pagination';
import { Wrapper, Content, PopulateDB, LoadingDiv } from './Films.styles';

export const Films = () => {
  const navigate = useNavigate();
  let params = useParams();
  const [filmList, setFilmList] = React.useState<Array<Film>>([]);
  const [update, setUpdate] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [paginationParams, setPaginationParams] =
    React.useState<PaginationParams>({
      totalItems: 0,
      pageSize: 0,
      isValidPage: false,
      totalPages: 0,
      currentPage: 0,
      hasPrevPage: false,
      hasNextPage: false,
    });

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}?page=${params.page || 1}`);
      if (response.data.data.films) {
        setFilmList(response.data.data.films);
      }

      if (response.data.data) {
        setPaginationParams(response.data.data.pagination);
      }

      setLoading(false);
      if (update) {
        setUpdate(false);
      }
    };

    fetchData().catch(error => console.log(error));

  }, [params.page, update]);

  const handleFilmClick = (filmId: string) => {
    navigate(`../film/${filmId}`);
  };

  const handlePopulateDB = async () => {
    setLoading(true);
    await axios.post(`${apiURL}populate`).then((response) => {
      setUpdate(true);
    });
  };
  return (
    <Wrapper>
      <Header>
        <PopulateDB onClick={() => handlePopulateDB()}>
          Refresh Database
        </PopulateDB>
      </Header>
      {loading && <LoadingDiv>...Loading</LoadingDiv>}
      <Content>
        {filmList.length > 0 &&
          filmList.map((film) => {
            return (
              <FilmCard
                key={film._id}
                onClick={() => handleFilmClick(film._id)}
                film={film}
              />
            );
          })}
      </Content>
      <PaginationFooter
        pageCount={paginationParams.totalPages}
        current={paginationParams.currentPage}
        hasNext={paginationParams.hasNextPage}
        hasPrevious={paginationParams.hasPrevPage}
      />
    </Wrapper>
  );
};
