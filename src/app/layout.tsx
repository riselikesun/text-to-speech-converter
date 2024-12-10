import type { Metadata } from "next";
import "./globals.css";
import { CssBaseline } from "@mui/material";
import { SpeechProvider } from "./context/SpeechProvider";

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
        <SpeechProvider>{children}</SpeechProvider>
      </body>
    </html>
  );
}
