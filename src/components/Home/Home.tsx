import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useHomeStyles } from './styles';

export const Home: React.FunctionComponent = (): JSX.Element => {
	const classes = useHomeStyles();

	return (
		<div className={classes.wrapper}>
			<FormattedMessage id="home__title" />
		</div>
	);
};
