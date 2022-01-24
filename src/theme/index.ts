import { createTheme, Theme } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';

import { themes, themesList } from './themes';

const defaultTheme = createTheme();

export const customTheme = (theme: themesList): Theme => {
	const palette = createPalette(themes[theme].palette);

	return createTheme({
		...themes[theme],
		shape: {
			borderRadius: 8,
		},
		typography: {
			fontFamily: [
				'Montserrat',
				'Mulish',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
		},
		transitions: {
			duration: {
				standard: 300,
				enteringScreen: 300,
				leavingScreen: 200,
			},
		},
		components: {
			// An example of how we can modify global styles for some components
			// https://material-ui.com/customization/globals/
			MuiSelect: {
				styleOverrides: {
					select: {
						height: 16,
					},
				},
			},
			MuiTablePagination: {
				styleOverrides: {
					root: {
						flexShrink: 0,
						boxShadow: `0 -1px 2px 0 ${palette.divider}`,
					},
				},
			},
			MuiTableCell: {
				styleOverrides: {
					head: {
						fontWeight: 700,
						whiteSpace: 'nowrap',
					},
				},
			},
			MuiSvgIcon: {
				styleOverrides: {
					root: {
						verticalAlign: 'baseline',
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						fontWeight: 700,
						minWidth: '90px',
					},
				},
			},
			MuiMenuItem: {
				styleOverrides: {
					root: {
						[defaultTheme.breakpoints.up('sm')]: {
							minHeight: '36px',
						},
					},
				},
			},
			MuiTab: {
				styleOverrides: {
					root: {
						padding: '20px 12px',
					},
					wrapped: {
						fontSize: '14px',
						fontWeight: 700,
						textTransform: 'none',
					},
					labelIcon: {
						padding: '20px 12px',
						paddingTop: '20px',
					},
				},
			},
			MuiFormControl: {
				styleOverrides: {
					root: {
						width: '100%',
						fontSize: '14px',
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					input: {
						fontSize: '14px',
					},
				},
			},
			MuiInputLabel: {
				styleOverrides: {
					root: {
						fontSize: '14px',
					},
				},
			},
			MuiFormControlLabel: {
				styleOverrides: {
					label: {
						fontSize: '14px',
					},
				},
			},
			MuiChip: {
				styleOverrides: {
					root: {
						borderRadius: '.4em',
						padding: 0,
						height: '26px',
						color: '#fff',
					},
					label: {
						padding: '0 .4rem',
					},
				},
			},
			MuiIconButton: {
				styleOverrides: {
					sizeSmall: {
						padding: 4,
					},
				},
			},
			MuiAccordion: {
				styleOverrides: {
					root: {
						margin: 0,
						'&.Mui-expanded': {
							margin: 0,
						},
						'&:not(:first-child)': {
							borderTop: '1px solid #eee',
						},
					},
				},
			},
			MuiFormHelperText: {
				styleOverrides: {
					root: {
						textOverflow: 'ellipsis',
						overflow: 'hidden',
					},
				},
			},
		},
	});
};
