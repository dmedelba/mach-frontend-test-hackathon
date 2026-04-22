const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'; // Modificado para usar puerto 3001 del backend

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  });
  if (!res.ok) {
    // Mejorar el manejo de errores para proporcionar más contexto
    const errorBody = await res.text();
    let errorMessage = `API error ${res.status}: ${errorBody}`;
    try {
      const errorJson = JSON.parse(errorBody);
      if (errorJson.error) {
        errorMessage = `API error ${res.status}: ${errorJson.error}`;
      }
    } catch (parseError) {
      // Si no es JSON, usar el texto plano
    }
    throw new Error(errorMessage);
  }
  return res.json() as Promise<T>;
}

export async function startCycle(payload: {
  challenge_name: string;
  challenge_type: 'greenfield' | 'brownfield';
  challenge_description: string;
  challenge_success_criteria: string[];
}): Promise<{ status: string; thread_id: string }> {
  return apiFetch('/api/cycle/start', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function resumeCycle(
  thread_id: string,
  decision: 'approve' | 'reject',
): Promise<{ status: string; thread_id: string; decision: string }> {
  return apiFetch('/api/cycle/resume', {
    method: 'POST',
    body: JSON.stringify({ thread_id, decision }),
  });
}

// NUEVO: Funciones para el contador
export async function getCounterValue(): Promise<{ count: number }> {
  try {
    return await apiFetch('/api/counter', { method: 'GET' });
  } catch (error) {
    console.error('Error fetching counter value:', error);
    throw error; // Re-throw para que el componente pueda manejarlo
  }
}

export async function incrementCounterValue(): Promise<{ newCount: number }> {
  try {
    return await apiFetch('/api/counter/increment', { method: 'POST' });
  } catch (error) {
    console.error('Error incrementing counter value:', error);
    throw error; // Re-throw para que el componente pueda manejarlo
  }
}