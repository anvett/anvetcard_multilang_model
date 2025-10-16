"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto
const LanguageContext = createContext();

// Provider
export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState("es"); // Idioma por defecto

  // Leer idioma desde localStorage o navegador
  useEffect(() => {
    const storedLocale = localStorage.getItem("locale");
    if (storedLocale) {
      setLocale(storedLocale);
    } else {
      const browserLang = navigator.language.startsWith("en") ? "en" : "es";
      setLocale(browserLang);
    }
  }, []);

  // Guardar idioma seleccionado
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  // Función para cambiar idioma
  const toggleLocale = () => {
    setLocale((prev) => (prev === "es" ? "en" : "es"));
  };

  const value = {
    locale,
    setLocale,
    toggleLocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};
