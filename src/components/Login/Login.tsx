import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { loginUser } from 'state/Authentication/actions';
import { useAuth } from 'state/Authentication/useAuthContext';

interface FormType {
	email: string;
	password: string;
}

export const Login: React.FunctionComponent = (): JSX.Element => {
	const { push } = useHistory();

	const [form, setForm] = useState<FormType>({
		email: '',
		password: '',
	});

	const { dispatch } = useAuth();

	const submitLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
		e.preventDefault();
		try {
			const response = await loginUser(dispatch, form);

			response && push('/');
		} catch (error) {
			console.log(error);
		}
	};

	const handleInputs = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
		setForm((prevState) => ({
			...prevState,
			[e.target.name as keyof FormType]: e.target.value,
		}));
	};

	return (
		<div>
			<div>
				<TextField id="email-input" name="email" label="Email" variant="outlined" onChange={(e) => handleInputs(e)} />
			</div>
			<div>
				<TextField
					id="password-input"
					name="password"
					type="password"
					label="Password"
					variant="outlined"
					onChange={(e) => handleInputs(e)}
				/>
			</div>
			<div>
				<Button variant="contained" color="primary" onClick={submitLogin}>
					Submit
				</Button>
			</div>
		</div>
	);
};
