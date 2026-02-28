import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kerico Builder Starter',
  description: 'Starter app for rapid shipping with Builder Mode'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
