import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getUsers, UserDTO } from 'api/User';
import { Loading } from 'components';

export const Users: React.FunctionComponent = (): JSX.Element => {
	const [users, setUsers] = useState<UserDTO[]>([]);
	const { push } = useHistory();

	useEffect(() => {
		const fetchUsers = async (): Promise<void> => {
			try {
				const response = await getUsers();

				setUsers(response);
				console.log(response);
			} catch (e: any) {
				if (e.status === 401) {
					push('/login');
				}
				console.log(e);
			}
		};

		fetchUsers();
	}, []);

	if (!users.length) return <Loading />;

	return <>hello</>;
};
