"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useI18n } from "@/hooks/useI18n";

/**
 * Pill flotante para cambiar ES/EN.
 * Uso recomendado: renderízalo dentro de un contenedor relative, con position absolute en top-right.
 */
export default function LocaleSwitchPill({
  className = "",
  rounded = "rounded-full",
  padding = "px-3 py-1",
  textSize = "text-sm",
  shadow = "shadow-md",
}) {
  const { locale, toggleLocale } = useLanguage();
  const { t } = useI18n();

  const isEN = locale === "en";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.locale.switchLabel}
      aria-pressed={isEN}
      className={[
        "flex items-center gap-2 bg-secondary text-dark",
        rounded,
        padding,
        textSize,
        shadow,
        "hover:bg-light hover:text-dark transition-colors duration-200 border border-transparent",
        className,
      ].join(" ")}
    >
      <span className={`font-semibold ${!isEN ? "opacity-100" : "opacity-60"}`}>
        {t.locale.es}
      </span>
      <span className="opacity-60">|</span>
      <span className={`font-semibold ${isEN ? "opacity-100" : "opacity-60"}`}>
        {t.locale.en}
      </span>
    </button>
  );
}
