import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const COLLAPSED_SIDEBAR_WIDTH = 64;
export const OPEN_SIDEBAR_WIDTH = 280;

export const useSidebarStyles = makeStyles(
	(theme: Theme) =>
		createStyles({
			root: {
				display: 'flex',
			},
			drawerToggleButton: {
				width: 40,
				height: 40,
				margin: '0 auto',
				color: theme.palette.common.white,
				transition: theme.transitions.create('margin', {
					easing: theme.transitions.easing.easeInOut,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
			drawer: {
				width: OPEN_SIDEBAR_WIDTH,
				flexShrink: 0,
				whiteSpace: 'nowrap',
			},
			drawerContent: {
				backgroundColor: theme.palette.background.default,
				borderRight: 'none',
				boxShadow: '0 0 6px 0 rgba(0,0,0,.5)',
			},
			drawerOpen: {
				width: OPEN_SIDEBAR_WIDTH,
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
				'& $drawerToggleButton': {
					margin: theme.spacing(0, 2, 0, 'auto'),
				},
			},
			drawerClose: {
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				overflowX: 'hidden',
				width: COLLAPSED_SIDEBAR_WIDTH,
				'& $menuItem': {
					width: '100%',
					margin: 0,
					borderRadius: 'initial',
					paddingRight: 40,
				},
				'& $menuItemIcon': {
					margin: 0,
				},
				'& $menuItemText': {
					opacity: 0,
					flex: 0,
				},
				'& $submenuToggle': {
					opacity: 0,
					flex: 0,
					width: 0,
				},
				'& $collapsible': {
					height: '0 !important',
					overflow: 'hidden',
				},
				'& $listSubheader:not($subheaderHidden)': {
					color: 'transparent',
					'&::before': {
						content: '""',
						background: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300],
						position: 'absolute',
						left: 0,
						right: 0,
						top: 20,
						margin: '0 auto',
						width: 15,
						height: 2,
					},
				},
				'& $actions': {
					padding: theme.spacing(1, 0, 2),
					flexDirection: 'column-reverse',
					alignItems: 'center',
					'& > img': {
						width: 30,
						marginTop: theme.spacing(1),
					},
				},
			},
			actions: {
				display: 'flex',
				flexDirection: 'row',
				background: theme.palette.primary.main,
				top: 0,
				zIndex: 1,
				padding: theme.spacing(1, 0, 2),
				transition: 'padding 150ms, flexDirection 150ms, boxShadow 150ms',
				'& > img': {
					width: 150,
					transition: theme.transitions.create('width', {
						easing: theme.transitions.easing.sharp,
						duration: theme.transitions.duration.leavingScreen,
					}),
				},
			},
			content: {
				overflow: 'overlay',
				overflowX: 'hidden',
				flex: 1,
			},
		}),
	{ index: 1 }
);
