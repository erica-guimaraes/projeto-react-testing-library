import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../pages';

describe('Componente NotFound', () => {
  it('Verifica se é exibido na tela um h2 com o texto "Page requested not found"', () => {
    render(<NotFound />);
    const notFound = screen.getByText('Page requested not found');
    expect(notFound).toBeInTheDocument();
  });

  it('Verifica se a página NotFound contém uma imagem com src específico', () => {
    render(<NotFound />);
    const image = screen.getByAltText(/Pikachu crying because the page requested was not found/i);
    expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
