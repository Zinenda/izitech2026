import { defaultLang, translations, type Language, type TranslationKey } from "./translations";

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "pt" || value === "en";
}

export function t(key: TranslationKey, lang: Language = defaultLang): string {
  return translations[lang][key] ?? translations[defaultLang][key] ?? key;
}

export function getLangFromUrl(url: URL): Language {
  const lang = url.searchParams.get("lang");
  return isLanguage(lang) ? lang : defaultLang;
}
