import { Theme } from '@mui/material/styles/createTheme';
import { makeStyles, createStyles } from '@mui/styles';

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
