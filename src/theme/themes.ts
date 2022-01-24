import { PaletteOptions } from '@mui/material';
import { red, green, purple } from '@mui/material/colors';

import { light } from './palette';

export type themesList = 'LIGHT';

export type themes = {
	[K in themesList]: {
		palette: PaletteOptions;
	};
};

export const themes: themes = {
	LIGHT: {
		palette: {
			mode: 'light',
			primary: {
				light: '#66D3FA',
				main: '#3C99DC',
				dark: '#0F5298',
			},
			secondary: {
				light: light[300],
				main: light[400],
				dark: light[600],
			},
			background: {
				paper: '#FFFFFF',
				default: '#f6f7f9',
			},
			error: red,
			success: green,
			info: purple,
		},
	},
};
