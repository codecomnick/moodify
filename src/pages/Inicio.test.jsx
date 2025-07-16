import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Inicio from './Inicio';

describe('Página Inicio', () => {
  test('renderiza o título principal', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/escolha o seu mood e aproveite a trilha sonora/i)
    ).toBeInTheDocument();
  });

  test('renderiza todos os 5 botões de humor', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    const botoes = screen.getAllByRole('button');
    expect(botoes).toHaveLength(5);
    expect(botoes.map((btn) => btn.textContent.toLowerCase())).toEqual(
      expect.arrayContaining(['calmo', 'estressado', 'feliz', 'animado', 'triste'])
    );
  });

  test('renderiza o logo Moodify', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );

    expect(screen.getByText(/moodify/i)).toBeInTheDocument();
  });
});
