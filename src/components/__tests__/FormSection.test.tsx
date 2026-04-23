import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import FormSection from '@/components/FormSection';

describe('FormSection', () => {
  it('mantiene el envio deshabilitado hasta completar los campos requeridos', async () => {
    const user = userEvent.setup();

    render(<FormSection />);

    expect(screen.getByRole('button', { name: 'Completa todos los campos' })).toBeDisabled();

    await user.type(screen.getByLabelText(/rut/i), '12.345.678-9');
    await user.type(screen.getByLabelText(/nombre completo/i), 'Ada Lovelace');
    await user.type(screen.getByLabelText(/tel[eé]fono/i), '+56 9 1234 5678');
    await user.selectOptions(screen.getByLabelText(/monto solicitado/i), '$500.000');
    await user.click(screen.getByRole('checkbox'));

    expect(screen.getByRole('button', { name: 'Enviar solicitud >>' })).toBeEnabled();
  });

  it('muestra la confirmacion al enviar y permite reiniciar el flujo', async () => {
    const user = userEvent.setup();

    render(<FormSection />);

    await user.type(screen.getByLabelText(/rut/i), '12.345.678-9');
    await user.type(screen.getByLabelText(/nombre completo/i), 'Ada Lovelace');
    await user.type(screen.getByLabelText(/tel[eé]fono/i), '+56 9 1234 5678');
    await user.selectOptions(screen.getByLabelText(/monto solicitado/i), '$500.000');
    await user.click(screen.getByRole('checkbox'));
    await user.click(screen.getByRole('button', { name: 'Enviar solicitud >>' }));

    expect(screen.getByRole('heading', { name: '¡Solicitud enviada!' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Nueva solicitud' }));

    expect(screen.getByRole('button', { name: 'Completa todos los campos' })).toBeDisabled();
    expect(screen.queryByRole('heading', { name: '¡Solicitud enviada!' })).toBeNull();
  });
});
