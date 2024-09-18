import type { Metadata } from "next";
import "../globals.css";

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
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
