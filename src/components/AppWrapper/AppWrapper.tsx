import React, { Suspense, useCallback, useEffect, useState } from 'react';

import { RouterWrapper, Loading, SideBar } from 'components';
import { TopMenu } from 'components/TopMenu/TopMenu';
import { routes } from 'routes/routes';
import { checkLoggedInUser } from 'state/Authentication/actions';
import { useAuth } from 'state/Authentication/useAuthContext';

import { useAppStyles } from './styles';

export const AppWrapper = (): JSX.Element => {
	const [collapsedSidebar, setCollapsedSidebar] = useState(false);

	const { dispatch, state } = useAuth();

	const styles = useAppStyles();

	const toggleSidebar = useCallback((): void => {
		setCollapsedSidebar((collapsed) => !collapsed);
	}, [setCollapsedSidebar]);

	useEffect(() => {
		checkLoggedInUser(dispatch);
	}, []);

	return (
		<div className={styles.root}>
			<TopMenu />
			{state.isAuthenticated && (
				<>
					<SideBar open={collapsedSidebar} onToggleCollapse={toggleSidebar} />
				</>
			)}

			<Suspense fallback={<Loading />}>
				<RouterWrapper routes={routes} />
			</Suspense>
		</div>
	);
};
