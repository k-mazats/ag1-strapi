import { useEffect, useState } from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import { UserContext } from "src/UserContext";
import { getUser } from "src/api/api";

import Home from "src/pages/Home/Home";
import Login from "src/pages/Login/Login";

import "./App.css";

const App = () => {
	const [user, setUser] = useState<null | object >(null);
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		if (localStorage.getItem("token")) {
			getUser(localStorage.getItem("token"))
				.then((res) => {
					setUser(res.data.data);
					setLoading(false);
				})
				.catch(() => {
					setUser(null);
					setLoading(false);
				});
		} else {
			setUser(null);
			setLoading(false);
		}
	}, []);
	return (
		<div className="App">
			{!loading ? (
				<UserContext.Provider value={{user: user, setUser: setUser}}>
					<Router>
						<Switch>
							<Route exact path="/auth">
								<Login></Login>
							</Route>
							<Route exact path="/">
								{user === null ? <Redirect to="/auth" /> : <Home></Home>}
							</Route>
						</Switch>
					</Router>
				</UserContext.Provider>
			) : null}
		</div>
	);
};

export default App;
