import Script from 'next/script';
import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

export const metadata: Metadata = {
    title: 'SNS Academy - Design Thinking CBSE School Coimbatore',
    description: "SNS Academy - India's first Design Thinking CBSE school in Coimbatore. Nursery to Grade XII with world-class facilities.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Font Awesome */}
                <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />

                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased bg-gray-50">
                <FloatingButtons />
                <Navigation />
                {children}
                <Footer />

                {/* Tailwind CSS (Requested to preserve CDN usage precisely) */}
                <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
            </body>
        </html>
    );
}
