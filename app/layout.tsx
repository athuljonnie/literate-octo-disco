import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '../redux/providers';
import NavBar from '@/components/navbar/navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Providers>
        <NavBar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
