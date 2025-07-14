import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Página Home', () => {
  test('renderiza o título principal', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/transforme seu humor em música/i)).toBeInTheDocument();
  });

  test('renderiza o parágrafo de instruções', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/descubra a trilha sonora perfeita/i)).toBeInTheDocument();
  });

  test('renderiza o botão "Começar agora"', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const botao = screen.getByRole('button', { name: /começar agora/i });
    expect(botao).toBeInTheDocument();
  });

  test('renderiza os quadrados coloridos', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const caixas = screen.getAllByTestId('color-box');
    expect(caixas).toHaveLength(5);
  });
});
