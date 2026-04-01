import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.meta.siteName,
  description: siteContent.meta.siteTagline,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const setInitialTheme = `
    (() => {
      const key = "tus-theme";
      let stored = null;
      try {
        stored = localStorage.getItem(key);
      } catch {}
      const preference = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const resolved = preference === "system" ? (systemDark ? "dark" : "light") : preference;
      document.documentElement.setAttribute("data-theme-preference", preference);
      document.documentElement.setAttribute("data-theme", resolved);
    })();
  `;

  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className="bg-white text-gray-900">
        <ThemeProvider>
          <Navbar
            siteName={siteContent.meta.siteName}
            items={siteContent.navigation}
            openLabel={siteContent.ui.openMenu}
            closeLabel={siteContent.ui.closeMenu}
          />
          {children}
          <Footer content={siteContent.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}
