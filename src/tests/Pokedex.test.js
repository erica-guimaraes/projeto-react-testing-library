import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Componente Pokedex', () => {
  it('Verifica se a página contém um h2 com o texto "Encountered Pokémon"', () => {
    renderWithRouter(<App />);
    const title = screen.getByText('Encountered Pokémon');
    expect(title).toBeInTheDocument();
  });

  it('Verifica se é exibido o próximo Pokémon da lista quando o botão "Próximo Pokémon" é clicado', () => {
    renderWithRouter(<App />);
    const btnNextPokemon = screen.getByRole('button', { name: 'Próximo Pokémon' });
    userEvent.click(btnNextPokemon);
    screen.getByText(/Charmander/i);
    userEvent.click(btnNextPokemon);
    screen.getByText(/Caterpie/i);
    userEvent.click(btnNextPokemon);
    screen.getByText(/Ekans/i);
  });

  it('Verifica se os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);
    screen.getByRole('button', { name: /All/i });
    screen.getByRole('button', { name: /Electric/i });
    screen.getByRole('button', { name: /Fire/i });
    screen.getByRole('button', { name: /Bug/i });
    screen.getByRole('button', { name: /Poison/i });
    screen.getByRole('button', { name: /Psychic/i });
    screen.getByRole('button', { name: /Normal/i });
    screen.getByRole('button', { name: /Dragon/i });
  });

  it('Verifica se os botões de filtragem por tipo possuem o "data-testid=pokemon-type-button" exceto o botão All', () => {
    renderWithRouter(<App />);
    const btnFilters = screen.getAllByTestId('pokemon-type-button')[0];
    userEvent.click(btnFilters);
    expect(btnFilters.textContent).toBe('Electric');
  });

  it('Verifica se é exibido somente os Pokemons de determinado tipo ao clicar nos botões de filtragem por tipo', () => {
    renderWithRouter(<App />);
    const btnType = screen.getByRole('button', { name: /psychic/i });
    userEvent.click(btnType);
    screen.getByText(/Alakazam/i);

    const btnNextPokemon = screen.getByRole('button', { name: 'Próximo Pokémon' });
    userEvent.click(btnNextPokemon);
    screen.getByText(/Mew/i);
  });

  it('Verifica se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const btnType = screen.getByRole('button', { name: /bug/i });
    userEvent.click(btnType);
    screen.getByText(/Caterpie/i);

    const all = screen.getByRole('button', { name: 'All' });
    userEvent.click(all);
    screen.getByText(/Pikachu/i);
  });
});
