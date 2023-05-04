import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Componente FavoritePokemon', () => {
  it('Verifica se é exibido na tela a mensagem "No favorite pokemon found", caso a pessoa não tenha Pokémon favoritos', () => {
    render(<FavoritePokemon />);
    const favoritePokemon = screen.getByText('No favorite Pokémon found');
    expect(favoritePokemon).toBeInTheDocument();
  });

  it('Verifica se são exibidos na tela apenas os Pokémons favoritados', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: 'More details' });
    userEvent.click(moreDetails);

    const favorite = screen.getByText(/Pokémon favoritado?/i);
    userEvent.click(favorite);

    const favoritePokemon = screen.getByRole('link', { name: 'Favorite Pokémon' });
    userEvent.click(favoritePokemon);

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });
});
