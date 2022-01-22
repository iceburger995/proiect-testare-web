import React, { createContext, FunctionComponent, useReducer } from 'react';

import { authReducer } from './reducer';
import { AuthContextProps, AuthInitialState } from './types';

const INITIAL_STATE: AuthInitialState = {
	user: null,
	isAuthenticated: false,
	token: '',
	loading: false,
	error: {},
};

const INITIAL_CONTEXT: AuthContextProps = {
	state: INITIAL_STATE,
	dispatch: () => null,
};

export const AuthContext = createContext<AuthContextProps>(INITIAL_CONTEXT);

export const AuthenticationProvider: FunctionComponent = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

	return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};
