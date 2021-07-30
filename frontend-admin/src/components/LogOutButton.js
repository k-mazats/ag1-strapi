import { useContext } from "react";
import { UserContext } from "../UserContext";

const LogOutButton = (props) => {
	const { setUser } = useContext(UserContext);
	const logOutHandler = () => {
		localStorage.removeItem("token");
    setUser(null);
	};
	return <button onClick={logOutHandler}>Déconnexion</button>;
};

export default LogOutButton;
