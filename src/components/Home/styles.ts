import { makeStyles, createStyles } from '@mui/styles';

export const useHomeStyles = makeStyles(
	() =>
		createStyles({
			wrapper: {
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			},
		}),
	{ index: 1 }
);
