const API_BASE = 'http://localhost:3001';

const apiFetch = async (path: string, init?: RequestInit) => {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${await response.text()}`);
  }
  return response.json();
};

export { apiFetch };