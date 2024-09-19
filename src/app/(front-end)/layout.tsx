import type { Metadata } from "next";
import "../globals.css";
import { inter } from "../ui/fonts";
import TopNav from "@/components/front-end/topnav/TopNavBar";
import Footer from "@/components/front-end/Footer";
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
        className={`${inter.className} antialiased `}
      >
        <TopNav />
        <div className="container px-1  pt-4 mx-auto min-h-[calc(100vh-145px)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
