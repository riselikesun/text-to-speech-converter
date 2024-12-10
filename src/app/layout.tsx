import type { Metadata } from "next";
import "./globals.css";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Text to Speech Converter",
  description: "Convert any text into speech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
