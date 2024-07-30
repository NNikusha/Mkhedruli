import MainLayout from "../common/components/__organisms/MainLayout/MainLayout";
import { Montserrat } from "next/font/google";
import "common/assets/globals.css";
import { Metadata } from "next";

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mkhedruli.ge"),
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icons/logo.svg" />
      </head>
      <body className={`${montserrat.variable}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
