import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const COLLAPSED_SIDEBAR_WIDTH = 64;
export const OPEN_SIDEBAR_WIDTH = 280;

export const useAppStyles = makeStyles(
	(theme: Theme) =>
		createStyles({
			root: {
				height: '100%',
				marginLeft: COLLAPSED_SIDEBAR_WIDTH,
				maxWidth: `calc(100% - ${COLLAPSED_SIDEBAR_WIDTH}px)`,
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden',
				transition: theme.transitions.create(['max-width', 'margin'], {
					easing: theme.transitions.easing.easeInOut,
					duration: theme.transitions.duration.leavingScreen,
				}),
			},
			sidebarOpen: {
				marginLeft: OPEN_SIDEBAR_WIDTH,
				maxWidth: `calc(100% - ${OPEN_SIDEBAR_WIDTH}px)`,
			},
		}),
	{ index: 1 }
);
