import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MACH Race 2026',
  description: 'ADLC Orchestrator Frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
