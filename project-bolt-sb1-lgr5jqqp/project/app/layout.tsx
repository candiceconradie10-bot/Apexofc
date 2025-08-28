import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/contexts/CartContext';
import { ClientOnly } from '@/components/ClientOnly';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LUXE - Premium Fashion Store',
  description: 'Discover the latest trends in premium fashion. Shop luxury clothing, accessories, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
          <ClientOnly>
            <Toaster />
          </ClientOnly>
        </CartProvider>
      </body>
    </html>
  );
}
