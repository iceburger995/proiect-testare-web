import { createContext } from 'react';

import { initialContext, translations } from './constants';

export interface LanguageContextProps {
	changeLanguage: (language: keyof typeof translations) => void;
}

export const LanguageContext = createContext<LanguageContextProps>(initialContext);
