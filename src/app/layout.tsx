import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supreme Group - Automotive Excellence & Innovation",
  description: "Leading the future of automotive excellence with cutting-edge technology and unparalleled innovation. Discover our comprehensive automotive solutions.",
  keywords: "automotive, technology, innovation, vehicles, engine, cabin systems, commercial vehicles, passenger vehicles",
  authors: [{ name: "Supreme Group" }],
  creator: "Supreme Group",
  publisher: "Supreme Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://supremegroup.com"),
  openGraph: {
    title: "Supreme Group - Automotive Excellence & Innovation",
    description: "Leading the future of automotive excellence with cutting-edge technology and unparalleled innovation.",
    url: "https://supremegroup.com",
    siteName: "Supreme Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Supreme Group - Automotive Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supreme Group - Automotive Excellence & Innovation",
    description: "Leading the future of automotive excellence with cutting-edge technology and unparalleled innovation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
