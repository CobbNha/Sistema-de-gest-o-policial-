import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIAC",
  description: "Sistema Inteligente de Análise Criminal",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
