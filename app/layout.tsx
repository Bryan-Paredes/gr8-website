import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GR8 | Mueblería de Interiores",
  description: "GR8 is a modern interior design studio based in New York City.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <meta name="description" content={metadata.description} />
      <link rel="icon" href="/logo.svg" />
      <link
        rel="apple-icon"
        href="/logo.svg"
        type="image/svg+xml"
        sizes="<generated>"
      />
      <link
        rel="apple-touch-icon"
        href="/logo.svg"
        type="image/svg+xml"
        sizes="<generated>"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
