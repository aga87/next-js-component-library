import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { BASE_URL } from "@/app/constants/baseUrl";
import { PageLayout } from "@/app/layout-components";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap", // prevent "flash of invisible text" (FOIT)
  variable: "--font-poppins", // for use with Tailwind CSS through a CSS variable
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  publisher: "Aga",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    url: BASE_URL,
    type: "website",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      {/* Explicit ICO favicon link for maximum compatibility. */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <body className={`antialiased`}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
