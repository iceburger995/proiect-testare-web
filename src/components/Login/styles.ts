import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useLoginStyles = makeStyles(
	(theme: Theme) =>
		createStyles({
			wrapper: {
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			},
			formContainer: {
				display: 'flex',
				justifyContent: 'center',
				background: theme.palette.common.white,
				padding: theme.spacing(4),
			},
			submitWrapper: {
				display: 'flex',
				justifyContent: 'center',
				'& button': {
					width: '100%',
				},
			},
			error: {
				color: theme.palette.error.main,
			},
		}),
	{ index: 1 }
);
