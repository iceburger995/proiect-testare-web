import { PaletteColor, Theme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

export const useTopMenuStyles = makeStyles((theme: Theme) =>
	createStyles({
		topMenu: {
			backgroundColor: `${theme.palette.background.paper} !important`,
		},
		toolbar: { display: 'flex', justifyContent: 'space-between' },
		menuButton: {
			marginRight: theme.spacing(1),
			color: theme.palette.action.active,
		},
		userDetails: {
			marginRight: 5,
			textTransform: 'none',
			textAlign: 'right',
		},
		username: {
			fontSize: 14,
			fontWeight: 700,
		},
		title: {
			fontSize: 11,
			color: theme.palette.primary[400 as unknown as keyof PaletteColor],
			fontWeight: 400,
		},
		optionsDropdown: {
			padding: theme.spacing(1, 0),
		},
		dropdownField: {
			display: 'flex',
			alignItems: 'center',
		},
		dropdownFieldIcon: {
			marginRight: theme.spacing(2),
			color: theme.palette.action.active,
		},
		profilePlaceholder: {
			backgroundColor: theme.palette.mode ? theme.palette.grey[300] : theme.palette.grey[600],
			color: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
		},
		inputRoot: {
			color: 'inherit',
			flexGrow: 1,
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			flexGrow: 1,
			color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
		},
		logoWrapper: {
			display: 'flex',
			justifyContent: 'center',
			'& img': {
				maxWidth: '50px',
			},
		},
		rightSide: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
		},
		langButton: {
			fontWeight: 700,
			margin: theme.spacing(0, 1),
			textTransform: 'uppercase',
			color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[800],
		},
		languageImage: {
			marginRight: theme.spacing(1),
			width: 21,
		},
		tabWrapper: {
			'&.Mui-selected': {
				boxShadow: theme.shadows[2],
			},
		},
		tabTitle: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			paddingLeft: theme.spacing(1),
			width: 180,
			justifyContent: 'space-between',

			[theme.breakpoints.up('xl')]: {
				width: 248,
			},
		},
		tabIcon: {
			marginTop: '6px',
		},
	})
);
