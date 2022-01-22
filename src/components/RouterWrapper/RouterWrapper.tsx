import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFound, Home } from 'components';

import { PrivateRoute } from './PrivateRoute';

export interface RouteProps {
	path: string;
	exact?: boolean;
	isPrivate: boolean;
	component: React.ElementType;
	redirect?: string;
}

export const RouterWrapper: React.FC<{ routes: Array<RouteProps> }> = ({ routes }) => (
	<Switch>
		{routes.map(({ path, component, ...rest }) => (
			<PrivateRoute exact key={path} path={path} component={component} {...rest} />
		))}
		<Route exact component={Home} path={'/'} />
		<Route component={NotFound} />
	</Switch>
);
