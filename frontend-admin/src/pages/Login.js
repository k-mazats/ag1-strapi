import { useHistory } from "react-router";

import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";

import LoginForm from "../components/LoginForm";

const Login = (props) => {
	const { user } = useContext(UserContext);
	const history = useHistory();
	useEffect(() => {
		if (user) history.push("/");
	}, [history, user]);
	return (
		<div className="login">
			<LoginForm></LoginForm>
		</div>
	);
};

export default Login;
