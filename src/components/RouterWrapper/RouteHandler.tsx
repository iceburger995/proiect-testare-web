import React from 'react';
import { StaticContext } from 'react-router';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { LOGIN } from 'routes/routes';

interface RouteHandlerProps extends RouteComponentProps<any, StaticContext, unknown> {
	component: React.ElementType;
	isPrivate: boolean;
	redirect?: string;
}

export const RouteHandler = ({
	component: Component,
	isPrivate,
	redirect,
	...props
}: RouteHandlerProps): JSX.Element => {
	if (isPrivate && !localStorage.getItem('access_token')) {
		return <Redirect to={{ pathname: redirect || LOGIN }} />;
	}

	return <Component {...props} />;
};
