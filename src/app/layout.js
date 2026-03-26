import "./globals.css";
import { Providers } from "./Providers";
import NavBar from "@/Components/NavBar";
import { Fraunces, DM_Sans } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "Monteros | Tucumán",
  description:
    "Descubre Monteros: cultura, tradición, eventos y puntos turísticos en el corazón de Tucumán.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-stone-50 font-sans">
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
