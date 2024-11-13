import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "Café Emil",
  description: "Café Emil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
