import en from 'assets/i18n/en.json';

export const translations: Record<string, Record<string, string>> = {
	en,
};

export const initialContext = {
	changeLanguage: (language: keyof typeof translations) => language,
};
