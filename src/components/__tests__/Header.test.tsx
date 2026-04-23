import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import Header from '@/components/Header';

describe('Header', () => {
  it('cambia el toggle activo entre PERSONAS y EMPRESAS', async () => {
    const user = userEvent.setup();

    render(<Header />);

    const personasButton = screen.getByRole('button', { name: 'PERSONAS' });
    const empresasButton = screen.getByRole('button', { name: 'EMPRESAS' });

    expect(personasButton).toHaveClass('bg-mach-cyan');
    expect(empresasButton).not.toHaveClass('bg-mach-cyan');

    await user.click(empresasButton);

    expect(empresasButton).toHaveClass('bg-mach-cyan');
    expect(personasButton).not.toHaveClass('bg-mach-cyan');
  });

  it('abre y cierra el menu mobile', async () => {
    const user = userEvent.setup();

    render(<Header />);

    expect(screen.getAllByRole('link', { name: 'Inicio' })).toHaveLength(1);

    await user.click(screen.getByRole('button', { name: 'Abrir menú' }));

    expect(screen.getAllByRole('link', { name: 'Inicio' })).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: 'Blog' })).toHaveLength(2);

    await user.click(screen.getByRole('button', { name: 'Abrir menú' }));

    expect(screen.getAllByRole('link', { name: 'Inicio' })).toHaveLength(1);
  });
});
