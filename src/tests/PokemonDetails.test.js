import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Componente PokemonDetails', () => {
  it('Verifica se é exibido na tela um texto com o nome do Pokemon', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);

    const title = screen.getByText(/Pikachu Details/i);
    expect(title).toBeInTheDocument();
  });

  it('Verifica se é exibido na tela um título com o texto "Summary"', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);

    const title = screen.getByText(/Summary/i);
    expect(title).toBeInTheDocument();
  });

  it('Verifica se é exibido um parágrafo com o resumo do Pokémon específico', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);

    const paragraph = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(paragraph).toBeInTheDocument();
  });

  it('Verifica se é exibido na tela o texto "Game Locations of <name>", onde <name> é o nome do Pokémon exibido', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);

    const text = screen.getByText(/Game Locations of Pikachu/i);
    expect(text).toBeInTheDocument();
  });

  it('Verifica se são exibidas na tela imagens de localização com o src correto', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);

    const locations = screen.getAllByAltText(/Pikachu location/i);

    expect(locations[0].src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(locations[1].src).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Verifica se a página exibi um checkbox que permite favoritar o Pokémon', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
    userEvent.click(checkbox);

    const altImage = 'Pikachu is marked as favorite';
    expect(screen.getByAltText(altImage)).toBeInTheDocument();
    userEvent.click(checkbox);
    expect(screen.queryByAltText(altImage)).not.toBeInTheDocument();
  });
});
