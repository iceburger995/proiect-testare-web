import { makeStyles, createStyles } from '@mui/styles';

export const useAppStyles = makeStyles(
	() =>
		createStyles({
			root: {
				display: 'flex !important',
				flexDirection: 'column',
				height: '100vh',
			},
		}),
	{ index: 1 }
);
