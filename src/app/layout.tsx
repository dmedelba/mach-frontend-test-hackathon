import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'MACHBANK – Tu Banco Digital',
  description: 'Banca digital moderna, segura y sin complicaciones. Costo $0 mensual.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans bg-white text-mach-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
