import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
// import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// const metadata: Metadata = {
//   title: "GR8",
//   description: "GR8 is a modern interior design studio based in New York City.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
