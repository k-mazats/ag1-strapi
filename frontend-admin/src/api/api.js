const axios = require("axios").default;
const apiUrl = "http://localhost:1337/admin";

export const postLogin = async (formData) => {
	let response;
	try {
		response = await axios({
			method: "post",
			url: `${apiUrl}/login`,
			data: formData,
		});
	} catch (error) {
		response = error;
	}
	return response;
};

export const getUser = async (token) => {
	let response;
	try {
		response = await axios({
			method: "get",
			url: `${apiUrl}/users/me`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} catch (error) {
		response = error;
	}
	return response;
};


