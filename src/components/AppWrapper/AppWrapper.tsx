import Container from '@material-ui/core/Container';
import React, { Suspense, useCallback, useState } from 'react';

import { UserDTO } from 'api/Login';
import { RouterWrapper, Loading, SideBar } from 'components';
import { TopMenu } from 'components/TopMenu/TopMenu';
import { routes } from 'routes/routes';

import { useAppStyles } from './styles';

export const AppWrapper = (): JSX.Element => {
	const [collapsedSidebar, setCollapsedSidebar] = useState(false);

	const localStorageUser: UserDTO = JSON.parse(localStorage.getItem('user') || '{}');
	const styles = useAppStyles();

	const toggleSidebar = useCallback((): void => {
		setCollapsedSidebar((collapsed) => !collapsed);
	}, [setCollapsedSidebar]);

	return (
		<Container className={styles.root} disableGutters component="main">
			<SideBar open={collapsedSidebar} onToggleCollapse={toggleSidebar} />
			<TopMenu />
			<Suspense fallback={<Loading />}>
				<RouterWrapper routes={routes} />
			</Suspense>
		</Container>
	);
};
