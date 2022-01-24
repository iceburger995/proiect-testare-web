import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import { useLoadingStyles } from './styles';

interface LoadingProps {
	delay?: number;
	minHeight?: string;
}

export function Loading({ delay = 0, minHeight, children }: React.PropsWithChildren<LoadingProps>): JSX.Element | null {
	const [showLoading, setShowLoading] = useState(!delay);

	const classes = useLoadingStyles();

	setTimeout(() => {
		setShowLoading(true);
	}, delay);

	if (!showLoading) {
		return null;
	}

	return (
		<div className={classes.root}>
			{children || (
				<Typography variant="h5" color="textSecondary">
					Loading...
				</Typography>
			)}
			<CircularProgress size={50} />
		</div>
	);
}

export default Loading;
