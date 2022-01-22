import { useContext } from 'react';

import { AuthContext } from './AuthenticationContext';
import { AuthContextProps } from './types';

export const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used inside a Provider');
	}

	return context;
};
