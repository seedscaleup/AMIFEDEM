import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "AMIDEFEM — Amicale de Développement des Filles et Femmes de Mengong",
    template: "%s | AMIDEFEM",
  },
  description:
    "L'AMIDEFEM favorise l'autonomisation et le développement local des femmes et des filles de Mengong, dans la région du Sud au Cameroun, à travers la solidarité, l'éducation et l'entrepreneuriat.",
  keywords: [
    "AMIDEFEM",
    "Mengong",
    "Cameroun",
    "association de femmes",
    "autonomisation des femmes",
    "région du Sud Cameroun",
    "excellence scolaire",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-100 text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
