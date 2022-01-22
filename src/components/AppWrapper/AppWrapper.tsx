import Container from '@material-ui/core/Container';
import React, { Suspense } from 'react';

import { UserDTO } from 'api/Login';
import { RouterWrapper, Loading } from 'components';
import { TopMenu } from 'components/TopMenu/TopMenu';
import { routes } from 'routes/routes';

import { useAppStyles } from './styles';

export const AppWrapper = (): JSX.Element => {
	const localStorageUser: UserDTO = JSON.parse(localStorage.getItem('user') || '{}');
	const styles = useAppStyles();

	return (
		<Container className={styles.root} disableGutters component="main">
			<TopMenu />
			<Suspense fallback={<Loading />}>
				<RouterWrapper routes={routes} />
			</Suspense>
		</Container>
	);
};
