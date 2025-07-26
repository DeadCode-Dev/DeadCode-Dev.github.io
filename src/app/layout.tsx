import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antonious Youssef — Backend-Focused Full-Stack Developer",
  description: "I'm Antonious, a full-stack developer specializing in secure and scalable backend systems with Node.js, Express, PostgreSQL, and Next.js.",
  openGraph: {
    title: "Antonious Youssef — Backend-Focused Full-Stack Developer",
    description: "I'm Antonious, a full-stack developer specializing in secure and scalable backend systems with Node.js, Express, PostgreSQL, and Next.js.",
    images: [
      "https://antonious.me/og-image.png"
    ],
    url: "https://antonious.me/",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://antonious.me",
  },
  metadataBase: new URL("https://antonious.me"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
