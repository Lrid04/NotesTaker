import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const typeWriter = localFont({
  src: "./fonts/typeWriter.ttf",
  variable: "--font-type-writer"
})

export const metadata: Metadata = {
  title: "Club Note Taker",
  description: "A Web App For Taking Notes then Exporting A File",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${typeWriter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
