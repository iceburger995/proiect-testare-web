import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const WrappedNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
	(props, ref): JSX.Element => <NavLink ref={ref} {...props} />
);
WrappedNavLink.displayName = 'WrappedNavLink';
