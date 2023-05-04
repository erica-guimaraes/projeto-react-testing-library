import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('Componente About', () => {
  it('Verifica se a página About contém um título h2 com o testo "About Pokédex"', () => {
    render(<About />);
    const aboutPokedex = screen.getByText('About Pokédex');
    expect(aboutPokedex).toBeInTheDocument();
  });

  it('Verifica se a página About contém imagem de uma Pokédex', () => {
    render(<About />);
    const image = screen.getByAltText(/Pokédex/i);
    expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
