import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import React, { useRef } from 'react';
import { useIntl } from 'react-intl';

import * as Flags from 'assets/flags';
import Logo from 'assets/logo.png';
import { useLanguage } from 'state/Language/useLanguage';

import { useTopMenuStyles } from './styles';

export const TopMenu: React.FunctionComponent = () => {
	const topMenuRef = useRef<HTMLDivElement>();
	const classes = useTopMenuStyles();
	const { formatMessage } = useIntl();

	const { changeLanguage } = useLanguage();

	return (
		<AppBar
			position="static"
			variant="elevation"
			color="secondary"
			ref={topMenuRef}
			className={classes.topMenu}
			aria-label={formatMessage({ id: 'label__topmenu_header' })}
		>
			<Toolbar className={classes.toolbar}>
				<Grid container spacing={2}>
					<Grid item xs={4}></Grid>
					<Grid item xs={4} className={classes.logoWrapper}>
						<img src={Logo} alt="Logo" />
					</Grid>
					<Grid item xs={4} className={classes.rightSide}>
						<Button
							onClick={() => changeLanguage('en')}
							aria-label={formatMessage({ id: 'label__language' })}
							className={classes.langButton}
						>
							<img src={Flags.UKFlag} className={classes.languageImage} alt="language" />
							EN
						</Button>
						<Button
							onClick={() => changeLanguage('ro')}
							aria-label={formatMessage({ id: 'label__language' })}
							className={classes.langButton}
						>
							<img src={Flags.ROFlag} className={classes.languageImage} alt="language" />
							RO
						</Button>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
