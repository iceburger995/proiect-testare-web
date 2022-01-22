import { ThemeType } from './types';

export const THEMES: { [key in ThemeType]: { logo: string; logoIcon: string; favicon?: string } } = {
	DEFAULT: {
		logo: 'assets/logo.svg',
		logoIcon: 'assets/logo.svg',
	},
};
