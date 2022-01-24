import { Box, Typography } from '@mui/material';
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import underConstruction from 'assets/logo.png';

import { useUnderConstructionStyles } from './styles';

export const UnderConstruction: React.FunctionComponent = memo(() => {
	const styles = useUnderConstructionStyles();

	return (
		<Box component="div" className={styles.root}>
			<img src={underConstruction} alt="Under Construction" className={styles.image} />
			<Typography variant="h3" className={styles.title} align="center">
				<FormattedMessage id="under-construction__main-header" />
			</Typography>
			<Typography variant="h6" className={styles.subtitle}>
				<FormattedMessage id="under-construction__sub-header" />
			</Typography>
		</Box>
	);
});
