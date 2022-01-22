import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useAppStyles = makeStyles(
	() =>
		createStyles({
			root: {
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
			},
		}),
	{ index: 1 }
);
