import { useHistory } from "react-router";

import { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext"

import LogInForm from "../../components/LogInForm/LogInForm";

const Login = () => {
	const { user } = useContext(UserContext);
	const history = useHistory();
	useEffect(() => {
		if (user) history.push("/");
	}, [history, user]);
	return (
		<div className="login">
			<LogInForm></LogInForm>
		</div>
	);
};

export default Login;
