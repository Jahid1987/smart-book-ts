import type { Metadata } from "next";
import "../globals.css";
import { inter } from "../fonts/fonts";
import TopNav from "@/components/front-end/topnav/TopNavBar";
import Footer from "@/components/front-end/Footer";
import { ThemeProvider } from "@/components/theme-provider";
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
        className={`${inter.className} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopNav />
          <div className="container px-1  pt-4 mx-auto min-h-[calc(100vh-145px)]">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
