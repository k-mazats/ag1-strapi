import { useContext } from "react";
import { UserContext } from "../UserContext";

import SideBar from '../components/SideBar';

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
