import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Componente App', () => {
  it('Verifica se é exibido na tela um link de navegação com o texto Home', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /home/i });
    expect(home).toBeInTheDocument();
  });

  it('Verifica se é exibido na tela um link de navegação com o texto About', () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /about/i });
    expect(about).toBeInTheDocument();
  });

  it('Verifica se é exibido na tela um link de navegação com o texto Favorite Pokémon', () => {
    renderWithRouter(<App />);
    const favoritePokemon = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(favoritePokemon).toBeInTheDocument();
  });
});
