const axios = require('axios');
const baseUrl = 'http://localhost:1337';

const getContent = async () => {
	try {
		let response = await axios({
			method: 'get',
			url: `${baseUrl}/content`,
			json: true,
		});
		// console.log(response.data)
		return response.data.Section;
	} catch (err) {
		console.error(err);
	}
};
const getHero = async () => {
	try {
		let response = await axios({
			method: 'get',
			url: `${baseUrl}/hero`,
			json: true,
		});
		// console.log(response.data);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};
const getCarousel = async (id) => {
	try {
		let response = await axios({
			method: 'get',
			url: `${baseUrl}/carousels/${id}`,
			json: true,
		});
		// console.log(response.data);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};
const getFooter = async (id) => {
	try {
		let response = await axios({
			method: 'get',
			url: `${baseUrl}/footer`,
			json: true,
		});
		// console.log(response.data);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};
const sendMail = async (data) => {
try {
	let response = await axios({
		method: 'post',
		url: `${baseUrl}/contact`,
		json: true,
		data,
	});
	// console.log(response.data);
	return response.data;
} catch (err) {
	console.error(err);
}
}
export { getContent, getHero, getCarousel, sendMail, getFooter };