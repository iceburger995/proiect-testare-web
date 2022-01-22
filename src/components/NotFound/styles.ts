import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useNotFoundStyles = makeStyles(
	(theme: Theme) =>
		createStyles({
			root: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				flex: '1',
				padding: theme.spacing(3),
			},
			image: {
				width: '38%',
				maxWidth: 600,
			},
			title: {
				margin: theme.spacing(5, 0, 2),
				color: theme.palette.primary.main,
			},
			subtitle: {
				color: theme.palette.grey[500],
			},
		}),
	{ index: 1 }
);
