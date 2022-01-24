import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useUnderConstructionStyles = makeStyles(
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
