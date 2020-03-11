const axios = require('axios');

async function makePatchRequest(){
	params = {
		first_name: 'Truong'
	}
	let res  = await axios.put('http://localhost:3000/users/6/',params);
	console.log(res.data);
}
makePatchRequest();