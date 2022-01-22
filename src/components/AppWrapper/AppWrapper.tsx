import Container from '@material-ui/core/Container';
import React, { Suspense, useCallback, useState } from 'react';

import { RouterWrapper, Loading, SideBar } from 'components';
import { TopMenu } from 'components/TopMenu/TopMenu';
import { routes } from 'routes/routes';
import { useAuth } from 'state/Authentication/useAuthContext';

import { useAppStyles } from './styles';

export const AppWrapper = (): JSX.Element => {
	const [collapsedSidebar, setCollapsedSidebar] = useState(false);

	const { state } = useAuth();

	console.log(state);

	const styles = useAppStyles();

	const toggleSidebar = useCallback((): void => {
		setCollapsedSidebar((collapsed) => !collapsed);
	}, [setCollapsedSidebar]);

	return (
		<Container className={styles.root} disableGutters component="main">
			{state.isAuthenticated && (
				<>
					<SideBar open={collapsedSidebar} onToggleCollapse={toggleSidebar} />
					<TopMenu />
				</>
			)}

			<Suspense fallback={<Loading />}>
				<RouterWrapper routes={routes} />
			</Suspense>
		</Container>
	);
};
