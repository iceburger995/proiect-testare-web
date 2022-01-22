import React from 'react';
import { Route } from 'react-router-dom';

import { RouteHandler } from './RouteHandler';
import { RouteProps } from './RouterWrapper';

export const PrivateRoute: React.FC<RouteProps> = ({ component: Component, isPrivate = true, ...rest }) => (
	<Route {...rest} render={(props) => <RouteHandler isPrivate={isPrivate} component={Component} {...props} />} />
);
