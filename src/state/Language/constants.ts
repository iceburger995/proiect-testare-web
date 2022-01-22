import en from 'assets/i18n/en.json';
import ro from 'assets/i18n/ro.json';

export const translations: Record<string, Record<string, string>> = {
	en,
	ro,
};

export const initialContext = {
	changeLanguage: (language: keyof typeof translations) => language,
};
