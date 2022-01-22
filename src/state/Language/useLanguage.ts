import React from 'react';

import { LanguageContext, LanguageContextProps } from './LanguageContext';

export const useLanguage = (): LanguageContextProps => {
	const context = React.useContext(LanguageContext);

	if (!context) {
		throw new Error('useLanguage must be used inside LanguageProvider');
	}

	return context;
};
