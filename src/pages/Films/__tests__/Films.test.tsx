import React from 'react';
import axios from 'axios';
import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import { Films } from '../Films';
import { mockedFilmResponse, mockedFilmEmptyResponse } from '../../../utils/mocks/mockedFilmsResponse';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Test Handle film click', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    mockedAxios.get
      .mockResolvedValueOnce(mockedFilmResponse);
  });

  it('should fire axios and navigation', async () => {
    render(<Films />);
    await screen.findByTestId('PaginationFooter-nextButton');
    const firstFilmCard = screen.getByText('Only Yesterday');
    fireEvent.click(firstFilmCard);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});

describe('Show update button', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    mockedAxios.get
      .mockResolvedValueOnce(mockedFilmEmptyResponse);
  });

  it('should return empty axios response', async () => {
    render(<Films />);
    await screen.findByText('Atualizar');
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});