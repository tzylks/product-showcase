import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ClientProvider } from '@/app/common/ClientProvider';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Product Showcase',
    description: 'Product showcase application built with Next.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            suppressHydrationWarning
        >
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-sans`}
                style={{
                    fontFamily: 'var(--font-geist-sans)',
                }}
            >
                <ClientProvider>{children}</ClientProvider>
            </body>
        </html>
    );
}
