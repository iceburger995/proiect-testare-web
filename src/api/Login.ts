import { fetchWrapper, RequestMethod } from 'helpers/fetchWrapper';

export interface UserDTO {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	username: string;
	isAdmin: boolean;
	picture: string;
}

export interface UserLogin {
	email: string;
	password: string;
}

export interface LoginResponse {
	access_token: string;
	user: UserDTO;
}

const PATH = '/login/auth';

export const requestLogin = (body: UserLogin): Promise<LoginResponse> =>
	fetchWrapper<LoginResponse>(PATH, { method: RequestMethod.POST, body });
