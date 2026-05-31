import "server-only";
import type esDict from "@/dictionaries/es.json";

const dictionaries = {
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

export type Lang = "es" | "en";
export type Dictionary = typeof esDict;

export const locales = ["es", "en"] as const;
export const defaultLocale: Lang = "es";

export function isValidLang(lang: string): lang is Lang {
  return locales.includes(lang as Lang);
}

export async function getDictionary(lang: Lang): Promise<Dictionary> {
  return dictionaries[lang]();
}
