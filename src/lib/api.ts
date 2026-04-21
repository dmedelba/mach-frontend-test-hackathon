const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  });
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${await res.text()}`);
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
