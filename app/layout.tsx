import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.meta.siteName,
  description: siteContent.meta.siteTagline,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className="bg-white text-gray-900">
        <Navbar
          siteName={siteContent.meta.siteName}
          items={siteContent.navigation}
          openLabel={siteContent.ui.openMenu}
          closeLabel={siteContent.ui.closeMenu}
        />
        {children}
        <Footer content={siteContent.footer} />
      </body>
    </html>
  );
}