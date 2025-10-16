"use client";
import { useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Import estático para preservar performance en export estático
import es from "@/i18n/es.json";
import en from "@/i18n/en.json";

/**
 * Hook de i18n simple:
 *  - Lee el locale desde LanguageContext
 *  - Devuelve un objeto `t` con las claves del diccionario
 *  - Incluye una función `tr(key, fallback)` por si quieres acceder por clave
 */
export const useI18n = () => {
  const { locale } = useLanguage();

  const t = useMemo(() => {
    return locale === "en" ? en : es;
  }, [locale]);

  const tr = (key, fallback = "") => {
    // Acceso seguro por clave "a.b.c" si más adelante anidas
    try {
      return key.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), t) ?? fallback;
    } catch {
      return fallback;
    }
  };

  return { t, tr, locale };
};
