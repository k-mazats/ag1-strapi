import { postLogin } from "../api/api";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [postLoginError, setPostLoginError] = useState(false);
	const { setUser } = useContext(UserContext);
	const history = useHistory();

	const handleMailChange = (e) => {
		setMail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = { email: mail, password: password };
		const login = await postLogin(data);
		if (login.status && login.status === 200) {
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

export default LoginForm;
