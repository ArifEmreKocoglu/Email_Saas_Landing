import LanguageToggle from "@/components/LanguageToggle";
import { LocaleProvider } from "@/context/LocaleContext";
import ThemeToggle from "@/components/ThemeToggle";
import LenisWrapper from "@/components/LenisWrapper";
import SideNav from "@/components/SideNav";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Entrfy Landing",
  description: "AI-powered email intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocaleProvider>
          <Header />
          <SideNav />
          <LenisWrapper>{children}</LenisWrapper>
        </LocaleProvider>
      </body>
    </html>
  );
}