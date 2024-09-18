import type { Metadata } from "next";
import "../globals.css";
import { inter } from "../ui/fonts";

export const metadata: Metadata = {
  title: "Smart Book",
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
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
