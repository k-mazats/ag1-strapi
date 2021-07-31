import { useContext } from "react";
import { UserContext } from "src/UserContext";

import SideBar from "src/components/SideBar/SideBar";

import "./Home.css";

const Home = () => {
	const user = useContext(UserContext);
	return (
		<div className="home">
			<SideBar></SideBar>

			<pre>{JSON.stringify(user, null, 2)}</pre>
		</div>
	);
};

export default Home;
