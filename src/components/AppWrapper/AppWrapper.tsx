import Container from '@material-ui/core/Container';
import React, { Suspense } from 'react';

import { UserDTO } from 'api/Login';
import { RouterWrapper, Loading } from 'components';
import { routes } from 'routes/routes';
import { useAuth } from 'state/Authentication/useAuthContext';

import { useAppStyles } from './styles';

export const AppWrapper = (): JSX.Element => {
	const { state } = useAuth();

	const localStorageUser: UserDTO = JSON.parse(localStorage.getItem('user') || '{}');
	const styles = useAppStyles();

	console.log('localstoarge', localStorageUser);

	return (
		<Container className={styles.root} disableGutters component="main">
			<Suspense fallback={<Loading />}>
				<RouterWrapper routes={routes} />
			</Suspense>
		</Container>
	);
};
