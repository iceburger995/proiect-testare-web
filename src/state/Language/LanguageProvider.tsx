import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import errors from 'assets/i18n/api-errors.json';

import { translations } from './constants';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
	const [language, changeLanguage] = useState<keyof typeof translations>(process.env.DEFAULT_LANGUAGE || 'en');

	const messages = { ...errors, ...translations[language] };

	return (
		<LanguageContext.Provider value={{ changeLanguage }}>
			<IntlProvider locale={language} defaultLocale={process.env.DEFAULT_LANGUAGE} messages={messages}>
				{children}
			</IntlProvider>
		</LanguageContext.Provider>
	);
};
