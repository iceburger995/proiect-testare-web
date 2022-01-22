import { Theme, createTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';

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
		overrides: {
			// An example of how we can modify global styles for some components
			// https://material-ui.com/customization/globals/
			MuiSelect: {
				selectMenu: {
					height: 16,
				},
			},
			MuiTablePagination: {
				root: {
					flexShrink: 0,
					boxShadow: `0 -1px 2px 0 ${palette.divider}`,
				},
			},
			MuiTableCell: {
				head: {
					fontWeight: 700,
					whiteSpace: 'nowrap',
				},
			},
			MuiSvgIcon: {
				root: {
					verticalAlign: 'baseline',
				},
			},
			MuiButton: {
				root: {
					fontWeight: 700,
					minWidth: '90px',
				},
			},
			MuiMenuItem: {
				root: {
					[defaultTheme.breakpoints.up('sm')]: {
						minHeight: '36px',
					},
				},
			},
			MuiTab: {
				root: {
					padding: '20px 12px',
				},
				wrapper: {
					fontSize: '14px',
					fontWeight: 700,
					textTransform: 'none',
				},
				labelIcon: {
					padding: '20px 12px',
					paddingTop: '20px',
				},
			},
			MuiFormControl: {
				root: {
					width: '100%',
					fontSize: '14px',
				},
			},
			MuiOutlinedInput: {
				input: {
					fontSize: '14px',
				},
			},
			MuiInputLabel: {
				root: {
					fontSize: '14px',
				},
			},
			MuiFormControlLabel: {
				label: {
					fontSize: '14px',
				},
			},
			MuiChip: {
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
			MuiIconButton: {
				sizeSmall: {
					padding: 4,
				},
			},
			MuiAccordion: {
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
			MuiFormHelperText: {
				root: {
					textOverflow: 'ellipsis',
					overflow: 'hidden',
				},
			},
		},
	});
};
