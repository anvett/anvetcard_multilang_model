import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Dra. Karen Freire - Odontología • Armonización Orofacial",
  description:
    "Sonrisas saludables y estéticas con ortodoncia, profilaxis y armonización facial mínimamente invasiva.",
  keywords:
    "odontología, ortodoncia, profilaxis, carillas, endodoncia, armonización orofacial, rinomodelación, hilos tensores, Quito",
  authors: [{ name: "Dra. Karen Freire" }],
  robots: "index, follow",
  openGraph: {
    title: "Dra. Karen Freire - Odontología • Armonización Orofacial",
    description:
      "Atención integral con enfoque en salud y estética: ortodoncia, limpiezas, carillas y armonización facial.",
    url: "https://karenfreire.anvetcard.com",
    images: [
      {
        url: "https://karenfreire.anvetcard.com/assets/images/shared.png",
        alt: "Dra. Karen Freire - Odontología y Armonización Orofacial",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Karen Freire - Odontología • Armonización Orofacial",
    description:
      "Ortodoncia, profilaxis, carillas y armonización facial mínimamente invasiva en Quito.",
    images: ["https://karenfreire.anvetcard.com/assets/images/shared.png"],
  },
  icons: {
    icon: "/assets/icons/favicon.ico",
    shortcut: "/assets/icons/favicon.ico",
    apple: "/assets/icons/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  const menuConfig = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#services" },
    { label: "Galería", href: "#galeria" },
  ];

  const footerLinks = [...menuConfig];

  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${poppins.className} min-h-screen flex flex-col bg-primary text-light`}
      >
        <LanguageProvider>
          <Navbar
            // 🎨 Estilos generales
            bgColor="bg-dark"
            textColor="text-light"
            borderColor="border-secondary"
            // 🖼️ Logo
            logoSrc="/assets/images/logo.png"
            // 📋 Menú
            menuItems={menuConfig}
            // 🅰️ Estilos de texto
            linkTextSize="text-size-2"
            navTextSize="text-size-4"
            // 📱 Mobile (menú)
            mobileMenuBg="bg-primary"
            mobileMenuTextColor="text-light"
            mobileIconColor="text-light"
            mobileIconSize="w-10 h-10"
            customMobileIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 text-secondary shadow-md shadow-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            }
          />
          <main>{children}</main>
          <Footer
            // 🎨 Estilos visuales
            bgColor="bg-gradient-to-t from-dark-light to-primary-light"
            bgSecondColor="bg-dark"
            textColor="text-secondary"
            borderColor="border-secondary"
            // 🔗 Enlaces del menú
            footerLinks={[
              { label: "Inicio", href: "#inicio" },
              { label: "Info. Pago", href: "#info_pago" },
              { label: "Servicios", href: "#services" },
            ]}
            linkTextSize="text-size-1"
            // 🖼️ Logo
            footerLogo="/assets/images/logo.png"
            // © Copyright
            copyrightText="© 2025 Anvetcorp SAS. Todos los derechos reservados."
            copyrightColor="text-light"
            copyrightSize="text-size-2"
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
