import { translations } from '../Language/constants';

type LanguagesMapper<T> = {
	[K in keyof T]: T[K];
};

export type Language = keyof LanguagesMapper<typeof translations>;

export interface LanguageSettings {
	language: Language;
}
