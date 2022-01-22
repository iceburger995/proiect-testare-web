import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { FunctionComponent, useState, useEffect } from 'react';

import { customTheme } from 'theme';
import { THEMES } from 'theme/constants';
import { themesList } from 'theme/themes';
import { ThemeType } from 'theme/types';

import { ThemeContextType } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ThemeContext = React.createContext<ThemeContextType>({ darkMode: false, toggleDarkMode: () => {} });

export const ThemeWrapper: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const themeMode = darkMode ? 'DARK' : 'LIGHT';
	const theme = process.env.THEME && process.env.THEME !== 'DEFAULT' ? process.env.THEME : themeMode;

	const toggleDarkMode = (): void => {
		setDarkMode((dark) => !dark);
	};

	useEffect(() => {
		const faviconElement = document.querySelector('#app-favicon');

		if (faviconElement && process.env.THEME && process.env.THEME !== 'DEFAULT') {
			const favicon = THEMES[process.env.THEME as ThemeType].favicon;

			if (favicon) {
				(faviconElement as HTMLLinkElement).href = favicon;
			}
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ toggleDarkMode, darkMode }}>
			<ThemeProvider<typeof customTheme> theme={customTheme(theme as themesList)}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeWrapper;
export const useThemeState = (): ThemeContextType => React.useContext(ThemeContext);
