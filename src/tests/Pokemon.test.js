import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Componente Pokemon', () => {
  it('Verifica se é exibido na tela um texto com o tipo do Pokemon', () => {
    renderWithRouter(<App />);
    screen.getByText(/pikachu/i);
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType.textContent).toBe('Electric');
  });

  it('Verifica se o peso médio do Pokémon é exibido', () => {
    renderWithRouter(<App />);
    screen.getByText(/pikachu/i);
    const averageWeight = screen.getByText(/Average weight: 6.0 kg/i);
    expect(averageWeight).toBeInTheDocument();
  });

  it('Verifica se a imagem de determinado Pokemon é exibida', () => {
    renderWithRouter(<App />);
    const image = screen.getByAltText(/Pikachu sprite/i);
    expect(image.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });

  it('Verifica se o card do Pokémon contém um link para exibir detalhes deste Pokémon', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /More details/i });
    expect(details).toBeInTheDocument();
  });

  it('Verifica se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /More details/i }));
    userEvent.click(screen.getByRole('checkbox'));

    const image = screen.getByAltText('Pikachu is marked as favorite');
    expect(image.src).toBe('http://localhost/star-icon.svg');
  });
});
