import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useNotFoundStyles } from './styles';

export const NotFound: React.FunctionComponent = () => {
	const styles = useNotFoundStyles();

	return (
		<Box component="div" className={styles.root}>
			<Typography variant="h3" className={styles.title} align="center">
				<FormattedMessage id="not-found__main-header" />
			</Typography>
			<Typography variant="h6" className={styles.subtitle}>
				<FormattedMessage id="not-found__sub-header" />
			</Typography>
		</Box>
	);
};
