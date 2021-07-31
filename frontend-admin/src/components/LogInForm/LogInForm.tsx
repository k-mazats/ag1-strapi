import { postLogin } from "src/api/api";
import { useState, useContext, SyntheticEvent } from "react";
import { UserContext } from "src/UserContext";
import { useHistory } from "react-router-dom";

const LogInForm = () => {
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [postLoginError, setPostLoginError] = useState(false);
	const { setUser } = useContext(UserContext);
	const history = useHistory();

	const handleMailChange = (e: SyntheticEvent) => {
		const { value } = e.target as HTMLInputElement;
		setMail(value);
	};

	const handlePasswordChange = (e: SyntheticEvent) => {
		const { value } = e.target as HTMLInputElement;
		setPassword(value);
	};

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		const data = { email: mail, password: password };
		const login = await postLogin(data);
		if (login.status && login.status === 200 && login.data.data.user && setUser) {
			setPostLoginError(false);
			localStorage.setItem("token", login.data.data.token);
			setUser(login.data.data.user);
			history.push("/");
		} else {
			setPostLoginError(true);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{postLoginError ? (
				<div>Nous n'avons pas réussi à vous connecter</div>
			) : null}
			<div>
				<label>Email:</label>
				<input type="email" onChange={handleMailChange} required />
			</div>
			<div>
				<label>Mot de passe:</label>
				<input type="password" onChange={handlePasswordChange} required />
			</div>
			<div>
				<input type="submit" value="Se connecter" />
			</div>
		</form>
	);
};

export default LogInForm;
