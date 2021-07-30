import { useEffect, useState } from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import { UserContext } from "./UserContext";
import { getUser } from "./api/api";

import Home from "./pages/Home";
import Login from "./pages/Login";

import "./App.css";

const App = () => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		if (localStorage.getItem("token")) {
			getUser(localStorage.getItem("token"))
				.then((res) => {
					setUser(res.data.data);
					setLoading(false)
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
			{ !loading ?
				(<Router>
					<Switch>
						<UserContext.Provider value={{ user, setUser }}>
							<Route exact path="/auth">
								<Login></Login>
							</Route>
							<Route exact path="/">
								{user === null ? <Redirect to="/auth" /> : <Home></Home>}
							</Route>
							{/* <Route exact path="/">
							<Home></Home>
						</Route> */}
						</UserContext.Provider>
					</Switch>
				</Router>): null
			}
		</div>
	);
};

export default App;
