import { fetchWrapper, RequestMethod } from 'helpers/fetchWrapper';

export interface UserDTO {
	id: string;
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	isAdmin: boolean;
}

const PATH = '/users';

export const getUsers = (): Promise<UserDTO[]> => fetchWrapper<UserDTO[]>(PATH, { method: RequestMethod.GET });
