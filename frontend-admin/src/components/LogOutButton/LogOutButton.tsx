import { useContext } from "react";
import { UserContext } from "../../UserContext";

const LogOutButton = () => {
	const { setUser } = useContext(UserContext);
	const logOutHandler = () => {
		localStorage.removeItem("token");
		if (setUser) setUser(null);
	};
	return <button onClick={logOutHandler}>Déconnexion</button>;
};

export default LogOutButton;
