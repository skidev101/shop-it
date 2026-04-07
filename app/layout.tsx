import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Providers from "./providers";
import { Toaster } from "sonner";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ShopIt",
  description: "Modern E-commerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <main className="flex-1 max-w-500">
            {children}
            <Toaster position="top-right" richColors />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
