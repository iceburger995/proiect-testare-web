import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useLoadingStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			minHeight: '100vh',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			padding: theme.spacing(4),
		},
	})
);
