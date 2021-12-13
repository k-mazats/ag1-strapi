const axios = require('axios');
const baseUrl = 'http://localhost:1337';

const getSectionsList = async () => {
	try {
		let response = await axios({
			method: 'get',
			url: `${baseUrl}/content`,
			json: true,
		});
		console.log(response.data)
		// return response.data.Section;
	} catch (err) {
		console.error(err);
	}
};
export { getSectionsList };