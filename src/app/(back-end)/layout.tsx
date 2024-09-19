import type { Metadata } from "next";
import "../globals.css";
import { lusitana } from "../fonts/fonts";

export const metadata: Metadata = {
  title: "Smart Book Controll Panel",
  description: "Learn Smarter | Go Paperless | Reduce Costs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${lusitana.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
