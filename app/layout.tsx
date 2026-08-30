import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Road Family Legacy Films | Forest Edition",
  description: "Private cinematic family legacy documentaries for generations.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
